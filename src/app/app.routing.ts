import { PostsComponent } from './posts/posts.component';
import { AppComponent } from './app.component';
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTitlesComponent } from './posts/list-titles/list-titles.component';


const APP_ROUTES: Routes = [
    { path: '', component: PostsComponent },
    { path: 'listTitles', component: ListTitlesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

