import { Component, OnInit, ɵConsole } from '@angular/core';
import { Customizer, CustomizerResponse } from 'src/app/core/models/public/customizer.model';
import { ApiService } from 'src/app/core/services/api.service';

import * as THREE from 'three-full';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ShoeTip, ModelId, HeelHeight } from '../../../core/models/public/customizer.model';
import { ConditionalExpr } from '@angular/compiler';


declare var $: any;

@Component({
  selector: 'app-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {

  customizer: Customizer[] = null;

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    
    const body = {
      "category": "botines"
    };
    
    this.api.initPersonalizador(body).subscribe((item: CustomizerResponse)=>{
      this.customizer = item.data;
      this.initCustomizer();
    
    },
    (error)=>{

    });
  }
  
  

  initCustomizer() {

    const dataComponent = this;

    const altura=false;
    const punta=false;
    const diseno=false;

    const tallas: Array<{talla: string}> =this.customizer[0].size;   
    //console.log(tallas);

    const LOADER = document.getElementById('js-loader');
    const TRAY = document.getElementById('js-tray-slide');
    const DRAG_NOTICE = document.getElementById('js-drag-notice');
    var raycaster;
    var mouse =  new THREE.Vector2(),INTERSECTED;

    var theModel;

    var interactivity=false;
    
    //const BT5B1C1CO="assets/personalizador/B1_C1_cortada_5.5.glb";  
    
    //Modelo Basico

    const BT5B1C1CO=this.customizer[0].heelHeight[0].modelId.url;

    //const BT5B1C1CO="https:katari-model.s3.amazonaws.com/product/mocasines/heelHeight/B1_C3_redonda_7.5.glb";

    const MODEL_PATH=BT5B1C1CO;

    //Creación de secciones

    const objAltura=this.customizer[0].heelHeight;
    var objPunta;
    var objDiseno;
    //Altura de tacon
    const lhh = document.getElementById('list-heel-height');
    
    var objModelsHh=new Object();
    
    for(var i=0;i<objAltura.length;i++){
      $(lhh).append('<li class="hoverMat"><div class="label-m-p">Altura <br>'+objAltura[i].name+'</div><div class="borde-blanco-m m-active"><div id="'+objAltura[i].code+'" class="material-p heelHeight-op" style="background-image: url('+objAltura[i].miniature+'"></div></div></li>');     objModelsHh[i]={modelId:i,nombre:objAltura[i].code,url:objAltura[i].modelId.url};
    }

    const optionhh = document.querySelectorAll(".heelHeight-op");
    optionhh.forEach(function(option) {
      option.addEventListener('click', selectOptionHh);
    });
    
    function selectOptionHh(e) {
      let option = e.target.id;

      for(var i=0;i<objAltura.length;i++){      
        if(option===objModelsHh[i].nombre){
          loadModel(objModelsHh[i].url);
          activeShoeTips(objModelsHh[i].modelId);
        }
      }
      
    }

    //Puntas de tacon
    const lst = document.getElementById('list-shoeTips');
    var objModelsSt=new Object();
    var temp;
    function activeShoeTips(ind){
      $(lst).empty();
      temp=ind;
      objPunta=objAltura[ind].shoeTips; 
      //console.log(objPunta);
      for(var i=0;i<objPunta.length;i++){
        $(lst).append('<li class="hoverMat"><div class="label-m-p">'+objPunta[i].name+'</div><div class="borde-blanco-m m-active"><div id="'+objPunta[i].code+i+'" class="material-p shoeTips-op" style="background-image: url('+objPunta[i].miniature+'"></div></div></li>');
        objModelsSt[i]={modelId:i,nombre:objPunta[i].code+i,url:objPunta[i].modelId.url};
      } 
      const optionst = document.querySelectorAll(".shoeTips-op");
      optionst.forEach(function(option) {
        option.addEventListener('click', selectOptionSt);
      });

    }
    function selectOptionSt(e) {
      let option = e.target;
      for(var i=0;i<objPunta.length;i++){
        if(option.id===objModelsSt[i].nombre){ 
          loadModel(objModelsSt[i].url);
          activeDesign(objModelsSt[i].modelId);
        }
      }     
    }

    //Diseño de tacon
    const ld = document.getElementById('list-design');
    var objModelsD=new Object();
    var temp2;
    var temp3;
    
    function activeDesign(ind){
      $(ld).empty();
      temp2=ind;
      console.log(temp);
      console.log(ind);
      console.log(objAltura[temp].shoeTips[ind].design);
      objDiseno=objAltura[temp].shoeTips[ind].design;

      for(var i=0;i<objDiseno.length;i++){
        $(ld).append('<li class="hoverMat"><div class="label-m-p">'+objDiseno[i].name+'</div><div class="borde-blanco-m m-active"><div id="'+objDiseno[i].code+i+'" class="material-p design-op" style="background-image: url('+objDiseno[i].miniature+'"></div></div></li>');
        objModelsD[i]={modelId:i,nombre:objDiseno[i].code+i,url:objDiseno[i].modelId.url};
      }  
      const optiond = document.querySelectorAll(".design-op");
      optiond.forEach(function(option) {
        option.addEventListener('click', selectOptionD);
      });

    }
    function selectOptionD(e) {
      
      let option = e.target.id;
      for(var i=0;i<objDiseno.length;i++){      
        if(option===objModelsD[i].nombre){
          //loadModel("https://katari-model.s3.amazonaws.com/product/mocasines/heelHeight/B1_C3_redonda_7.5.glb");
          loadModel(objModelsD[i].url);
          temp3=objModelsD[i].ModelId;
          //selectModel=true;        
        }
      }      
    }

    function loadModel(modelo){
      scene.remove(theModel);
      model(modelo);
    }

    var colors=[];
    $("#manhattan").click(function(){

      $('#js-tray-slide').empty();

      var size=0.8;
      var bumps=0.06;
      var metalness=0;
      var roughness=0.22;
      colors = [
    {
      materialT: 'b',
      color: 'e0e0e0',
      bump: 'assets/modelos/texturas/manhattan/cuero_Manhattan_bump_indexado.png',
      size: [size, size, size],
      bumpScale: bumps,
      roughness: roughness,
      metalness: metalness},
    {
      materialT: 'b',
      color: 'f9b233',
      bump: 'assets/modelos/texturas/manhattan/cuero_Manhattan_bump_indexado.png',
      size: [size, size, size],
      bumpScale: bumps,
      roughness: roughness,
      metalness: metalness},
    {
      materialT: 'b',
      color: '1b263a',
      bump: 'assets/modelos/texturas/manhattan/cuero_Manhattan_bump_indexado.png',
      size: [size, size, size],
      bumpScale: bumps,
      roughness: roughness,
      metalness: metalness},   
    ];
    buildColors(colors);
  })
    $("#charol").click(function(){
    var metalness=0.036;
    var roughness=0.12;
    colors = [
  {
    materialT:'c',      
    color: '20235b',        
    roughness:roughness,
    metalness:metalness},
  {
    materialT:'c',
    color: '85a4d6',      
    roughness:roughness,
    metalness:metalness},
  {
    materialT:'c',
    color: 'c9b68d',  
    roughness:roughness,
    metalness:metalness},   
  ];
        buildColors(colors);
  })  
      var activeOption = '1';

      var loaded = false;
      var infoOption=false;
      var infoOptionObj;
      var INTERSECTED;
      var scene = new THREE.Scene();
      var cantParts;
      var selectModel=false;

      //var CanvaW=window.innerWidth;
      //var CanvaH=window.innerHeight;

      var CanvaW=$("#c").width();
      var CanvaH=$("#c").height();

      var cameraFar = 20;
      var camera = new THREE.PerspectiveCamera(35, CanvaW/CanvaH, 0.1, 1000 );
      camera.position.z = cameraFar;
      const canvas: HTMLCanvasElement = document.querySelector('#c');


      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true,alpha:true });
      renderer.setClearColor( 0xff0000, 0);

      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);      



      //document.body.appendChild(renderer.domElement);

      var controls = new OrbitControls(camera, renderer.domElement );
      controls.maxPolarAngle = Math.PI * 0.5;
      controls.minDistance = 10;
      controls.maxDistance = 20;
      controls.enablePan = false;
      controls.enableDamping = true;


      var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
      scene.add( ambientLight );

      var pointLight = new THREE.PointLight( 0xffffff, 0.6 );

      camera.add( pointLight );
      scene.add( camera );


      const INITIAL_MTL = new THREE.MeshStandardMaterial({ color: 0xffffff,emissive:0xff0000,emissiveIntensity:0});
      const INITIAL_MTL_T = new THREE.MeshStandardMaterial({ color:0xffffff,depthWrite:false,roughness:0.12,metalness:1});

      
      const INITIAL_MAP_AU=[];


      var envMap = new THREE.TextureLoader().load('assets/modelos/texturas/env/env.jpg');
      envMap.mapping = THREE.SphericalReflectionMapping;
      //envMap.mapping = FlakesTexture;
      INITIAL_MTL.envMap = envMap;
      INITIAL_MTL_T.envMap = envMap;


      // Init the object loader
      var loader = new GLTFLoader();
      
      function model(Modelo){        
        loader.load(Modelo, function (gltf) {
          theModel = gltf.scene;
  
          theModel.traverse(o => {
            if (o.isMesh) {
              o.castShadow = true;
              o.receiveShadow = true;
              
            }
          });
  
          // Set the models initial scale   
          theModel.scale.set(1.5, 1.5, 1.5);
          // theModel.rotation.y = Math.PI;
          theModel.rotation.y = 80.1;
  
          // Offset the y position a bit
          theModel.position.y = 0;
  
                    
          cantParts=theModel.children;
          const PartsModel=dataComponent.customizer[0].heelHeight[0].shoeTips[0].design[0].modelId.parts;
          /*if(selectModel===true){

            const PartsModel=dataComponent.customizer[0].heelHeight[0].shoeTips[0].design[0].modelId.parts;  

            for(var i=0;i<PartsModel.length;i++){              
              if(PartsModel[i].category==="accesorios"){
                  console.log(PartsModel[i].category);
                  for(var j=0;j<cantParts.length;j++){
  
                    if(PartsModel[i].layerName===theModel.children[j].name){  

                      //console.log(PartsModel[i].layerName);                    
                      //console.log(theModel.children[j].name);
                      
                      INITIAL_MAP_AU[j][1]={mtl:INITIAL_MTL_T.clone()};
                     //console.log(INITIAL_MAP_AU[j]);
                      
                    }else{
                      INITIAL_MAP_AU[j]={childID:theModel.children[j].name,mtl:INITIAL_MTL.clone()};
                      console.log(INITIAL_MAP_AU[j]);
                    }   
                  }
              }
            }

            console.log("final");

          }else{
            for(var i=0;i<cantParts.length;i++){
              INITIAL_MAP_AU[i]={childID:theModel.children[i].name,mtl:INITIAL_MTL.clone()};
            }
            /*for(var i=0;i<cantParts.length;i++){
              if(theModel.children[i].name.indexOf("ta_")>-1 || theModel.children[i].name.indexOf("tachas0")>-1 ){ 
                INITIAL_MAP_AU[i]={childID:theModel.children[i].name,mtl:INITIAL_MTL_T.clone()};
               theModel.children[i].accesorio=1;
               theModel.children[i].visible=false;
               $("#lista-accesorios").append('<li id="accesorio-'+i+'" class="hoverMat"><div class="label-m-p">'+theModel.children[i].name+'</div><div class="borde-blanco-m m-active"><div class="material-p" style="background-image:url(assets/images/tacon.jpg);"></div></div></li>');
                 createBtn(i);
                 $('.hoverMat').click(function() {                  
                   $(this).find('.m-active').toggleClass('m-active-on');
                   return false;
                 });            
             }else{
                INITIAL_MAP_AU[i]={childID:theModel.children[i].name,mtl:INITIAL_MTL.clone()};
             }
            }
          }*/

          if(Modelo==="https://katari-model.s3.amazonaws.com/product/mocasines/heelHeight/B1_C3_redonda_7.5.glb"){
            for(var i=0;i<PartsModel.length;i++){
            
              if(PartsModel[i].category==="accesorios"){              
                
                 for(var j=0;j<cantParts.length;j++){
                   
                    if(PartsModel[i].layerName===cantParts[j].name){

                      INITIAL_MAP_AU[i]={childID:cantParts[i].name,mtl:INITIAL_MTL.clone()};
                      theModel.children[j].accesorio=1;
                      theModel.children[j].visible=false; 
                      $("#lista-accesorios").append('<li id="accesorio-'+j+'" class="hoverMat"><div class="label-m-p">'+PartsModel[i].name+'</div><div class="borde-blanco-m m-active"><div class="material-p" style="background-image:url(assets/images/tacon.jpg);"></div></div></li>');
                      createBtn(j);
                      $('.hoverMat').click(function() {                  
                        $(this).find('.m-active').toggleClass('m-active-on');
                        return false;
                      });                  
                    }else{
                     
                    }
                 }         
              }else{
                INITIAL_MAP_AU[i]={childID:cantParts[i].name,mtl:INITIAL_MTL.clone()};
              }  
                $('.hoverMat').click(function() {                  
                  $(this).find('.m-active').toggleClass('m-active-on');
                  return false;
                });            
            }
          }else{
            for(var i=0;i<cantParts.length;i++){  
              if(theModel.children[i].name.indexOf("ta_")>-1 || theModel.children[i].name.indexOf("tachas0")>-1 ){ 
                INITIAL_MAP_AU[i]={childID:theModel.children[i].name,mtl:INITIAL_MTL.clone()};
                theModel.children[i].accesorio=1;
                theModel.children[i].visible=false;   
                /*$("#lista-accesorios").append('<li id="accesorio-'+i+'" class="hoverMat"><div class="label-m-p">'+theModel.children[i].name+'</div><div class="borde-blanco-m m-active"><div class="material-p" style="background-image:url(assets/images/tacon.jpg);"></div></div></li>');
                  createBtn(i);
                  $('.hoverMat').click(function() {                  
                    $(this).find('.m-active').toggleClass('m-active-on');
                    return false;
                  }); */           
              }else{
                 INITIAL_MAP_AU[i]={childID:theModel.children[i].name,mtl:INITIAL_MTL.clone()};
              }
                  /*$('.hoverMat').click(function() {                  
                    $(this).find('.m-active').toggleClass('m-active-on');
                    return false;
                  });*/
            }
          }

         


         
          
          // Set initial textures
          for (let object of INITIAL_MAP_AU) {
            initColor(theModel, object.childID, object.mtl);
          }
          // Add the model to the scene
          scene.add(theModel);
          // Remove the loader
          LOADER.remove();
  
        }, undefined, function (error) {
          console.error(error);
        });
  
      }
        model(MODEL_PATH);
      
      function LoadPartsModelTexture(theModel){        
        
        
        
      }
      // Function - Add the textures to the models
      function createBtn(i){
        $("#accesorio-"+i+"").click(function(){
          theModel.children[i].visible ? theModel.children[i].visible=false : theModel.children[i].visible=true;            
        }); 

      }
      function initColor(parent, type, mtl) {
        parent.traverse(o => {
          if (o.isMesh) {
            if (o.name.includes(type)) {
              o.material = mtl;
              o.nameID = type; // Set a new property to identify this object
            }
          }
        });
      }
      
      var animate = function () {       
        
        requestAnimationFrame( animate );

        controls.update();
        renderer.render(scene, camera);


          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            //camera.aspect = canvas.clientWidth / canvas.clientHeight;            
            camera.aspect = CanvaW / CanvaH;
            camera.updateProjectionMatrix();
          }

          if (theModel != null && loaded == false) {
            initialRotation();
            DRAG_NOTICE.classList.add('start');
          }
          if(infoOption==true){            
            if(infoOptionObj.material.emissiveIntensity<=0){
              infoOptionObj.material.emissiveIntensity=0;
              infoOption=false;
            }else{
              infoOptionObj.material.emissiveIntensity-=0.03;               
            }
          }
          if(interactivity==true){
            raycaster = new THREE.Raycaster();
            renderer.domElement.addEventListener( 'click', raycast, false );
          }

      }
      
      animate();     
      function raycast ( e ) {


        scene.updateMatrixWorld();

        mouse.x = ( e.offsetX / (CanvaW) ) * 2 - 1;
        mouse.y = - ( e.offsetY / (CanvaH) ) * 2 + 1;



        raycaster.setFromCamera( mouse, camera ); 

        var intersects = raycaster.intersectObjects( scene.children, true );        
        
        activeOption = intersects[0].object.name;
        infoOptionObj=intersects[0].object;  
        console.log(intersects[0].object.material);     
        //console.log(activeOption);
        if ( intersects.length > 0 ) {

             
          if ( INTERSECTED != intersects[ 0 ].object || INTERSECTED.material.emissiveIntensity==0 ) {
             
            if ( INTERSECTED ) INTERSECTED.material.emissiveIntensity=0;

             INTERSECTED = intersects[ 0 ].object;  
             //console.log(INTERSECTED);
             INTERSECTED.material.emissiveIntensity=1;
             infoOption=true;            
          }
        } else {
 
          if ( INTERSECTED ) INTERSECTED.material.emissiveIntensity=0;
          INTERSECTED = null;
           
        }   
      } 
      // Function - New resizing method
      function resizeRendererToDisplaySize(renderer) {
        const canvas = renderer.domElement;
        var width = CanvaW;
        var height = CanvaH;
        var canvasPixelWidth = canvas.width / window.devicePixelRatio;
        var canvasPixelHeight = canvas.height / window.devicePixelRatio;

        const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
        if (needResize) {

          renderer.setSize(width, height, false);
        }
        return needResize;
      }
 // Function - Build Colors

       function buildColors(colors) {
      
        document.getElementById("js-tray-slide").innerHTML = "";
        $('#js-tray-slide').empty();
      
        for (let [i, color] of colors.entries()) {             
          if(color.map){
            $(TRAY).append('<li class="hoverMat-2"><div class="tray__swatch borde-blanco-m m-active" data-key="'+i+'"><div class="material-p-col"  data-key="'+i+'" style="background-image:url('+color.map+')"></div></div></li>'); 
          }else{
            $(TRAY).append('<li class="hoverMat-2"><div class="tray__swatch borde-blanco-m m-active" data-key="'+i+'"><div class="material-p-col"  data-key="'+i+'" style="background-color:#'+color.color+'"></div></div></li>'); 
          }
        }
      
        const swatches = document.querySelectorAll(".tray__swatch");
        swatches.forEach(function(swatch) {
          swatch.addEventListener('click', selectSwatch);
        });
        // for (const swatch of swatches) {
        //   swatch.addEventListener('click', selectSwatch);
        // }
      }     
      
      
      
      // Select Option
      const options = document.querySelectorAll(".option");
      options.forEach(function(option) {
        option.addEventListener('click', selectOption);
      });
      // for (const option of options) {
      //   option.addEventListener('click', selectOption);
      // }
      
      function selectOption(e) {
        let option = e.target;
        activeOption = e.target.dataset.option;
        options.forEach(function(otherOption) {
           otherOption.classList.remove('--is-active');
        });
        // for (const otherOption of options) {
        //   otherOption.classList.remove('--is-active');
        // }
        option.classList.add('--is-active');
      
      }
      
      function selectSwatch(e) {
          
      
        let color = colors[parseInt(e.target.dataset.key)];
        let new_mtl;
        console.log(color);
        if (color.texture) {
      
          let txt = new THREE.TextureLoader().load(color.texture);          
      
          txt.repeat.set(color.size[0], color.size[1], color.size[2]);
          txt.wrapS = THREE.RepeatWrapping;
          txt.wrapT = THREE.RepeatWrapping;         
      
          new_mtl = new THREE.MeshStandardMaterial({
            map: txt,
            // shininess: color.shininess ? color.shininess : 10,
            opacity:1,
            transparent:true,
            // bumpMap:bump,
            emissive:0xff0000,
            emissiveIntensity:0,
           });
      
        } else if(color.materialT=='b') {
          let bump = new THREE.TextureLoader().load(color.bump);
        // bump.repeat.set(color.size[0], color.size[1], color.size[2]);
        //bump.repeat.set(10,10,10);
        bump.wrapS = THREE.RepeatWrapping;
        bump.wrapT = THREE.RepeatWrapping;
      
         new_mtl = new THREE.MeshStandardMaterial({
            color: parseInt('0x' + color.color),            
            bumpMap:bump,
            bumpScale:color.bumpScale,
            metalness:color.metalness,
            roughness:color.roughness,
            emissive:0xff0000,
            emissiveIntensity:0,
          });
         new_mtl.envMap = envMap;
        }else if(color.materialT=='c'){
      
          new_mtl = new THREE.MeshStandardMaterial({
            color: parseInt('0x' + color.color),            
            emissive:0x0,
            emissiveIntensity:1,
            metalness:color.metalness,
            roughness:color.roughness
           });
          new_mtl.envMap = envMap;
        }else if(color.materialT=='d'){
          let bump = new THREE.TextureLoader().load(color.bump);
          // bump.repeat.set(color.size[0], color.size[1], color.size[2]);
          bump.wrapS = THREE.RepeatWrapping;
          bump.wrapT = THREE.RepeatWrapping;
      
          let map = new THREE.TextureLoader().load(color.map);
          // map.repeat.set(color.size[0], color.size[1], color.size[2]);
          map.wrapS = THREE.RepeatWrapping;
          map.wrapT = THREE.RepeatWrapping;
      
         new_mtl = new THREE.MeshStandardMaterial({
            color:"0xffffff",
            map:map,            
            bumpMap:bump,
            bumpScale:color.bumpScale,
            metalness:color.metalness,
            roughness:color.roughness,
            emissive:0xff0000,
            emissiveIntensity:0,
          });
          new_mtl.envMap = envMap;
        }
        setMaterial(theModel, activeOption, new_mtl);
      }
      

      function setMaterial(parent, type, mtl) {
        parent.traverse(o => {
          if (o.isMesh && o.nameID != null) {
            if (o.nameID == type) {
              o.material = mtl;
            }
          }
        });
      }

      // Function - Opening rotate
      let initRotate = 0;

      function initialRotation() {
        initRotate++;
        if (initRotate <= 120) {
          theModel.rotation.y += Math.PI / 60;
        } else {
          loaded = true;
        }
      }

      
      var slider = document.getElementById('js-tray'),sliderItems = document.getElementById('js-tray-slide'),difference;

      function slide(wrapper, items) {
        var posX1 = 0,
        posX2 = 0,
        posInitial,
        threshold = 20,
        posFinal,
        slides = items.getElementsByClassName('tray__swatch');

        // Mouse events
        items.onmousedown = dragStart;

        // Touch events
        items.addEventListener('touchstart', dragStart);
        items.addEventListener('touchend', dragEnd);
        items.addEventListener('touchmove', dragAction);

        function dragStart(e) {
          e = e || window.event;
          posInitial = items.offsetLeft;
          difference = sliderItems.offsetWidth - slider.offsetWidth;
          difference = difference * -1;

          if (e.type == 'touchstart') {
            posX1 = e.touches[0].offsetX;
          } else {
            posX1 = e.offsetX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
          }
        }

        function dragAction(e) {
          e = e || window.event;

          if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].offsetX;
            posX1 = e.touches[0].offsetX;
          } else {
            posX2 = posX1 - e.offsetX;
            posX1 = e.offsetX;
          }

          if (items.offsetLeft - posX2 <= 0 && items.offsetLeft - posX2 >= difference) {
            items.style.left = items.offsetLeft - posX2 + "px";
          }
        }

        function dragEnd(e) {
          posFinal = items.offsetLeft;
          if (posFinal - posInitial < -threshold) {

          } else if (posFinal - posInitial > threshold) {

          } else {
            items.style.left = posInitial + "px";
          }

          document.onmouseup = null;
          document.onmousemove = null;
        }

      }

      slide(slider, sliderItems);

      var checkRose='<i class="fa fa-check-circle-o check-rose" aria-hidden="true"></i>';
    	var mod=0;
    	var alt=0;
    	var pun=0;
    	var dis=0;
    	var acc=0;
    	var mat=0;

	$("#modelo-tab").click(function(){
		$("#title-tabs").text("¿QUÉ MODELO PREFIERES?");
		$("#p-tabs").text("Elige el modelo de tu zapato, es importante que no te saltes este paso.");
		interactivity=false;
	})
	$("#altura-tab").click(function(){
		$("#title-tabs").text("¿QUÉ TAN ALTO LO QUIERES?");
		$("#p-tabs").text("La altura de un zapato es una decisión muy personal, tómate tu tiempo.");
		if(mod==0){
			$('#modelo-tab').last().append(checkRose);
			mod=1;
		}
		interactivity=false;
	})
	$("#puntas-tab").click(function(){
		$("#title-tabs").text("¿QUÉ ESTILO DE PUNTA PREFIERES?");
		$("#p-tabs").text("Elegante formal o urbano, elige el tipo de punta que te ayude a definir tu estilo.");
		if(alt==0){
			$('#altura-tab').last().append(checkRose);
			alt=1;
		}
		interactivity=false;
	})
	$("#diseno-tab").click(function(){
		$("#title-tabs").text("ELIGE EL DISEÑO QUE PREFIERAS");
		$("#p-tabs").text("Dale forma y variedad a tu estilo, elegante y clásico o moderno y exótico, decide como quieres que te vean.");
		if(pun==0){
			$('#puntas-tab').last().append(checkRose);
			pun=1;
		}
		interactivity=false;
	})
	$("#accesorios-tab").click(function(){
		$("#title-tabs").text("ELIGE EL DISEÑO QUE PREFIERAS");
		$("#p-tabs").text("Dale forma y variedad a tu estilo, elegante y clásico o moderno y exótico, decide como quieres que te vean.");
		if(dis==0){
			$('#diseno-tab').last().append(checkRose);
			dis=1;
		}
		interactivity=false;
	})
	$("#materiales-tab").click(function(){
		$("#title-tabs").text("DALE COLOR A TU DISEÑO");
		$("#p-tabs").text("Finaliza tu obra y dale vida con los materiales y colores que reflejen tu estilo.");
		if(acc==0){
			$('#accesorios-tab').last().append(checkRose);
			acc=1;
		}
		interactivity=true;
	})

	var checkPurple="<i class='fa fa-check-circle check-purple' aria-hidden='true'></i>";

	$('.hoverMat').click(function() {
		$(".check-purple").remove();
		$('.m-active').removeClass('m-active-on');
		$(this).append(checkPurple);
        $(this).find('.m-active').toggleClass('m-active-on');
        return false;
    })
  }   

  
}
