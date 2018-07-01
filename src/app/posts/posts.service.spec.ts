import { ListPosts } from './../shared/entities/listPosts';
import { TestBed, inject } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpModule } from '@angular/http';
import { User } from '../shared/entities/user';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [PostsService]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));

  it('listPosts', inject([PostsService], (service: PostsService) => {
    service.listPosts().subscribe((data: ListPosts) => {
      expect(data.list.length).toBeGreaterThan(0);
    });
  }));

  it('getUserInfo with value', inject([PostsService], (service: PostsService) => {
    service.getUserInfo('1').subscribe((user: User) => {
      expect(user.email).toEqual('Sincere@april.biz');
    });
  }));

  it('getUserInfo without value', inject([PostsService], (service: PostsService) => {
    service.getUserInfo('1').subscribe((user: User) => {
      expect(user).toEqual(undefined);
    });
  }));
});
