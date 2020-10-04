import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "http://localhost:3000/posts";
  constructor(private http:HttpClient) { }
  getAllPosts():Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  getPostById(id):Observable<Post> {
    return this.http.get<Post>(this.url+"/"+id);
  }
  deletePost(id):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
  addPost(Post):Observable<any> {
    return this.http.post(this.url,Post);
  }
  UpdatePost(id,Post):Observable<any>{
    return this.http.put(this.url+"/"+id,Post);
  }
}
