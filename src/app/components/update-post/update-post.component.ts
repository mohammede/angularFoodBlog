import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent implements OnInit {
  constructor(private postService:PostsService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams
  .subscribe(params => {
    this.id = params.id;
  });
  }
   data:Post;
   id:string;
  date = new Date();
  dd = String(this.date.getDate()).padStart(2, '0');
  mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.date.getFullYear();
  today = this.mm + '/' + this.dd + '/' + this.yyyy;
  updatePost: FormGroup;
  isUpdates:string;
  ngOnInit(): void {
    this.postService.getPostById(this.id).subscribe(
    (data)=> {
      this.updatePost.controls['title'].setValue(data.title);
      this.updatePost.controls['author'].setValue(data.author);
      this.updatePost.controls['image'].setValue(data.image);
      this.updatePost.controls['content'].setValue(data.content);
      this.updatePost.controls['date'].setValue(data.date);
    });
    this.updatePost = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      image: new FormControl(),
      content: new FormControl(),
      date: new FormControl()
    });
  }

  onSubmit(form: FormGroup) {
    this.postService.UpdatePost(this.id,{
        "title": form.value.title,
        "content": form.value.content,
        "image": form.value.image,
        "author": form.value.author,
        "date": form.value.date
    }).subscribe(()=>{
        this.router.navigateByUrl('/', { skipLocationChange: true });
    });
  }
}
