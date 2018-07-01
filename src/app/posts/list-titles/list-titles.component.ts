import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { PostsService } from './../posts.service';
import { ListPosts } from './../../shared/entities/listPosts';
import { User } from '../../shared/entities/user';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.css']
})
export class ListTitlesComponent implements OnInit, OnDestroy {
  postSubscription: Subscription;
  userSubscription: Subscription;
  loading: boolean;
  loadingInfo: string;
  list: ListPosts;
  notFound: boolean;
  name: string;
  email: string;

  constructor(private postService: PostsService) {}

  // carrega a lista de posts
  ngOnInit() {
    this.loading = true;

    this.postSubscription = this.postService.listPosts().subscribe(
      data => {
        this.loading = false;
        if (data.list.length !== 0) {
          this.list = data;
        } else {
          this.notFound = true;
        }
      },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }

  // encontra as informacoes do autor
  findUser(userId, position) {
    this.loadingInfo = 'Loading...';
    this.userSubscription = this.postService.getUserInfo(userId).subscribe(
      data => {
        if (data) {
          this.loadingInfo = '';
          this.list.list[position].user = new User();
          this.list.list[position].user.name = data.name;
          this.list.list[position].user.email = data.email;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  // Cancela a subscricao dos metodos
  ngOnDestroy() {
    try {
      this.postSubscription.unsubscribe();

      if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
