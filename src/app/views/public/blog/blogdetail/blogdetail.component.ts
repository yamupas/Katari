import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Doc, detalleBlog } from 'src/app/core/models/public/blog.model';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {

  alias: string = null;
  item: Doc = null;

  constructor(public api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe((val) => {
        if ((val instanceof NavigationEnd)) {
          this.loadInfo();
          return;
        }
    });
  }

  ngOnInit(): void {
  }


  loadInfo(){

    this.alias = this.activatedRoute.snapshot.params.article;
    
    if(this.alias) {

      this.api.detalleBlog(this.alias).subscribe((item: detalleBlog)=>{
        this.item = item.data[0];
        console.log(this.item);
      },
      (error)=>{
  
      })
    } else {
      this.router.navigate(['/']);
    }
  }
}
