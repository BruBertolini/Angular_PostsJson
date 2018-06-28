import { Subscription } from 'rxjs/Subscription';
import { PostsService } from './../posts.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private postService: PostsService) { }

  userSubscription: Subscription;
  @Input() show: boolean;
  ngOnInit() {
  }

  findUserInfo(){
    this.userSubscription = this.postService.getUserInfo(1).subscribe( 
      data => {
        
          console.log(data);
       
      },
      error => {
        console.log(error);
      }
    );
  }


}
