import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on("scroll", function(){

      var widthS=$(window).width();
      
        var scrolly = $(document).scrollTop();

        if(scrolly > 300 && widthS>1000 ){
          $("#menu").css('opacity','0');
          setTimeout(function(){
            $("#menu").css('display','none');
            $("#menu-responsive").css('display','block');  		
        }, 300);
        setTimeout(function(){	
          $("#menu-responsive").css('opacity','1');
        }, 500);   	
        }else if(scrolly<300){
          $("#menu-responsive").css('opacity','0');
          setTimeout(function(){
            $("#menu-responsive").css('display','none');
            $("#menu").css('display','block');  		
        }, 300);
        setTimeout(function(){	
          $("#menu").css('opacity','1');
        }, 500);  
        }

    })
  }

}
