import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  constructor(private postService:PostsService,private router:Router,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.queryParams
  .subscribe(params => {
    this.isAdded = params.isAdded;
  });
   }
  date = new Date();
  dd = String(this.date.getDate()).padStart(2, '0');
  mm = String(this.date.getMonth() + 1).padStart(2, '0'); //January is 0!
  yyyy = this.date.getFullYear();
  today = this.mm + '/' + this.dd + '/' + this.yyyy;
  myForm: FormGroup;
  isAdded:string;
  ngOnInit(): void {
    this.postService.getAllPosts().subscribe(
    (data)=> {
    this.myForm.controls['id'].setValue(data.length+1);
    });
    this.myForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(''),
      author: new FormControl(''),
      image: new FormControl(''),
      content: new FormControl(''),
      date: new FormControl(this.today)
    });


  }
  onSubmit(form: FormGroup) {
    this.postService.addPost(form.value).subscribe(()=>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['addpost'],{ queryParams: { isAdded: 'true' } });
      })
    });

  }

}
