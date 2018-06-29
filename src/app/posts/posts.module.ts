import { PostsComponent } from './posts.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostsService } from './posts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopoverModule} from "ng2-popover";

import { DetailComponent } from './detail/detail.component';
import { ListTitlesComponent } from './list-titles/list-titles.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    PopoverModule
  ],
  declarations: [
    PostsComponent,
    DetailComponent,
    ListTitlesComponent],
  providers:[PostsService]
})
export class PostsModule { }
