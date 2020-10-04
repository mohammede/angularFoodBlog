import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'
import { Post } from '../../interfaces/post'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private postsService:PostsService) { }
  posts: Post[];
  ngOnInit(): void {
    this.postsService.getAllPosts().subscribe(
      (data) => this.posts = data
      );
  }

}
