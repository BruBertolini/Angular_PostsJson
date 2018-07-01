import { Subscription } from 'rxjs/Subscription';
import { PostsService } from './../posts.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  constructor(private postService: PostsService) {}

  userSubscription: Subscription;
  @Input() idUser: string;
  @Input() type: string;
  name: string;
  email: string;
  loading: boolean;

  // Encontrar as informacoes do usuario baseado no Input
  findUserInfo() {
    this.loading = true;
    this.userSubscription = this.postService.getUserInfo(this.idUser).subscribe(
      data => {
        if (data) {
          this.loading = false;
          this.name = data.name;
          this.email = data.email;
        }
      },
      error => {
        console.log(error);
        this.name = 'N/A';
        this.email = 'N/A';
      }
    );
  }
}
