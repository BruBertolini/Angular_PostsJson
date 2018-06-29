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
  @Input() idUser: string;
  @Input() type: string;
  name: string;
  email: string;
  loading: boolean;


  ngOnInit() {
    
  }

  findUserInfo(){
    this.loading = true;
    this.userSubscription = this.postService.getUserInfo(this.idUser).subscribe( 
      data => {

        this.loading = false;
        this.name = data.name;
        this.email = data.email;
        
          console.log(data);
       
      },
      error => {
        console.log(error);
      }
    );
  }


}
