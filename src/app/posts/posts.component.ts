import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PostsService } from './posts.service';
import { ListPosts } from './../shared/entities/listPosts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postSubscription: Subscription;
  loading: boolean;
  list: ListPosts;
  notFound: boolean;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.loading = true;  

    this.postSubscription = this.postService.listPosts().subscribe( 
      data => {
        this.loading = false;  
        
        if(data.list.length != 0){
          this.list = data;
          console.log(this.list);
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
 
  ngOnDestroy(){
    try {
      this.postSubscription.unsubscribe();
    } catch (error) {
      console.log(error);
    }
  }


}
