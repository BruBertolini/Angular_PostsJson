import { User } from './../shared/entities/user';
import { Post } from './../shared/entities/post';
import { ListPosts } from './../shared/entities/listPosts';
import { environment } from './../../environments/environment';
import { Http } from '@angular/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }
  listPostsWithUser(): Observable<ListPosts> {
    let url : string;
    url = `${environment.rootApi}/posts`; 

    return this.http.get(url)
      .map(res => {
        let item = res.json();
        let posts = new ListPosts();
        
        posts.list = [];
        for(let i = 0;i < item.length;i++){
          posts.list[i] =  new Post();
          posts.list[i].body = item[i].body;
          posts.list[i].id = item[i].id;
          posts.list[i].title = item[i].title;
          posts.list[i].userId = item[i].userId;
        }
       
        return posts;
    })
    .catch(this.lidarErro);
  }
  listPosts(): Observable<ListPosts> {
    let url : string;
    url = `${environment.rootApi}/posts`; 

    return this.http.get(url)
      .map(res => {
        let item = res.json();
        let posts = new ListPosts();
        
        posts.list = [];
        for(let i = 0;i < item.length;i++){
          posts.list[i] =  new Post();
          posts.list[i].body = item[i].body;
          posts.list[i].id = item[i].id;
          posts.list[i].title = item[i].title;
          posts.list[i].userId = item[i].userId;
        }
       
        return posts;
    })
    .catch(this.lidarErro);
  }

  getUserInfo(userId): Observable<User> {
    let url : string;
    url = `${environment.rootApi}/users/${userId}`; 

    return this.http.get(url)
      .map(res => {
        let item = res.json();
        let user = new User();
        
        user.id = item.id;
        user.name = item.name;
        user.username = item.username;
        user.email = item.email;
        
       
        return user;
    })
    .catch(this.lidarErro);
  }

  

  private lidarErro(erro: Response | any) {
    console.error(erro.message || erro);
    return Observable.throw(erro.message || erro);
  }


}
