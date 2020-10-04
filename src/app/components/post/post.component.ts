import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { PostsService } from 'src/app/services/posts.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
id: string;
Post:Post;
  constructor(private activatedRoute: ActivatedRoute,private postService:PostsService,private router:Router) {
    this.activatedRoute.queryParams
  .subscribe(params => {
    this.id = params.id;
  });
  }
  update() {
      this.router.navigate(['updatepost'],{ queryParams: { id: this.id } });
  }
  delete() {
    confirm('are you sure') ? this.postService.deletePost(+this.id).subscribe(()=>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['home']);
      })
    }) : false;
    //this.postService.deletePost(+this.id).subscribe(()=>console.log("deleted"))
  }
  ngOnInit(): void {
    this.postService.getPostById(this.id).subscribe((data)=>
    {
      this.Post = data;
    }
    );
  }

}
