import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { ContactusComponent } from './components/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'post', component: PostComponent },
    { path: 'addpost', component: AddPostComponent },
    { path:'updatepost', component:UpdatePostComponent },
    { path:'contactus', component: ContactusComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
