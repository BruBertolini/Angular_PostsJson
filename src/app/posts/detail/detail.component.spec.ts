import { HttpModule } from '@angular/http';
import { PostsServiceMock } from '../../../assets/mocks/unit-test';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { PopoverModule } from 'ng2-popover';
import { PostsService } from '../posts.service';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PopoverModule, FormsModule, HttpModule],
      declarations: [DetailComponent],
      providers: [
        { provide: PostsService ,
          useClass: PostsServiceMock
        }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('findUserInfo with value', async(() => {
    component.idUser = '1';
    component.findUserInfo();
    fixture.whenStable().then(() => {
      expect(component.name).toEqual('Leanne Graham');
    });
  }));

  it('findUserInfo without value', async(() => {
    component.idUser = '2';
    component.findUserInfo();
    fixture.whenStable().then(() => {
      expect(component.name).toEqual(undefined);
    });
  }));
});
