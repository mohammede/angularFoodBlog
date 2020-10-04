import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogFooterComponent} from './components/blog-footer/blog-footer.component';
import { PostComponent } from './components/post/post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import { ContactusComponent } from './components/contactus/contactus.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    HomeComponent,
    BlogFooterComponent,
    PostComponent,
    AddPostComponent,
    UpdatePostComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
