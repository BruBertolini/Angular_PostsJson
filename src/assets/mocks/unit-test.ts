import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { User } from '../../app/shared/entities/user';
import { ListPosts } from '../../app/shared/entities/listPosts';
import { Post } from '../../app/shared/entities/post';

@Injectable()
export class PostsServiceMock {

  // Mock de busca de usuario
  getUserInfo(userId): Observable<User> {
    let user;
    if (userId === '1') {
      user = new User();
      user.email = 'email@email.com';
      user.id = '1';
      user.name = 'Leanne Graham';
      user.username = 'Leanne';
    }
    return Observable.of(user);
  }

  // Mock de lista de posts
  listPosts(): Observable<ListPosts> {

    const list = new ListPosts();
    list.list = [];

    const post = new Post();
    post.id = '1';
    post.body = 'Texto';
    post.title = 'Title';
    post.userId = '1';

    list.list[0] = post;

    return Observable.of(list);
  }
}
