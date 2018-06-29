import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PostsService } from './../posts.service';
import { ListPosts } from './../../shared/entities/listPosts';
import { User } from '../../shared/entities/user';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.css']
})
export class ListTitlesComponent implements OnInit {

  postSubscription: Subscription;
  userSubscription: Subscription;
  loading: boolean;
  loadingInfo: string;
  list: ListPosts;
  notFound: boolean;
  name: string;
  email: string;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.loading = true;  

    this.postSubscription = this.postService.listPostsWithUser().subscribe( 
      data => {
        this.loading = false;  
        if(data.list.length != 0){
          this.list = data;
          
        }else{
          this.notFound = true;         
        }
      },
      error => {
        this.loading = false; 
        console.log(error);
      }
    );
  }

  findUser(userId, position){
    this.loadingInfo = 'Loading...';
    this.userSubscription = this.postService.getUserInfo(userId).subscribe( 
      data => {
        this.loadingInfo = '';
        this.list.list[position].user = new User();
        this.list.list[position].user.name = data.name;
        this.list.list[position].user.email=  data.email;
       
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnDestroy(){
    try {
      this.postSubscription.unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }

}
