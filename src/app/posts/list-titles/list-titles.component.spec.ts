import { PopoverModule } from 'ng2-popover';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitlesComponent } from './list-titles.component';
import { DetailComponent } from '../detail/detail.component';
import { PostsService } from '../posts.service';
import { PostsServiceMock } from '../../../assets/mocks/unit-test';


describe('ListTitlesComponent', () => {
  let component: ListTitlesComponent;
  let fixture: ComponentFixture<ListTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTitlesComponent, DetailComponent ],
      imports: [PopoverModule],
      providers: [
        { provide: PostsService ,
          useClass: PostsServiceMock
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTitlesComponent);
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

  it('findUser', () => {
    component.ngOnInit();
    component.findUser(1, 0);
    fixture.whenStable().then(() => {
    expect(component.list.list[0].user.email).toEqual('email@email.com');
   });
  });
});
