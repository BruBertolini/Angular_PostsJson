import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PostsService } from './posts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [DetailComponent],
  providers:[PostsService]
})
export class PostsModule { }
