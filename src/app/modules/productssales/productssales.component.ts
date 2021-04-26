import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-productssales',
  templateUrl: './productssales.component.html',
  styleUrls: ['./productssales.component.scss']
})
export class ProductssalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
	
      $( ".ani-fav" )
        .mouseenter(function() {
            $('.h-product').css('margin-top','26px');
            setTimeout(function(){ 
                $('.h-product').css('background-image','url("assets/images/heart-pF.png")');
                $('.h-product').css('margin-top','0px');
              }, 300);
    
        })
        .mouseleave(function() {
            setTimeout(function(){ 
                $('.h-product').css('background-image','url("assets/images/heart-p.svg")');   
              }, 300);
      });	
      $( ".ani-car" )
        .mouseenter(function() {
            $('.b-product').css('margin-top','26px');
            setTimeout(function(){ 
                $('.b-product').css('background-image','url("assets/images/b-productF.png")');
                $('.b-product').css('margin-top','0px');
              }, 300);
    
        })
        .mouseleave(function() {
            setTimeout(function(){ 
                $('.b-product').css('background-image','url("assets/images/b-product.png")');   
              }, 300);
      });
    
    })

  }

}
