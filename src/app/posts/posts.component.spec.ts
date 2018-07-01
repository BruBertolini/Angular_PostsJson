import { PopoverModule } from 'ng2-popover';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { DetailComponent } from './detail/detail.component';
import { PostsService } from './posts.service';
import { PostsServiceMock } from '../../assets/mocks/unit-test';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent, DetailComponent ],
      imports: [PopoverModule],
      providers: [
        { provide: PostsService ,
          useClass: PostsServiceMock
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit', () => {
    component.ngOnInit();
    expect(component.list).toBeDefined();
  });

  it('ngOnDestroy', () => {
    component.ngOnInit();
    component.ngOnDestroy();
    expect(component.postSubscription.closed).toEqual(true);
  });

});
