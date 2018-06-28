import { PostsComponent } from './posts/posts.component';
import { AppComponent } from './app.component';
import { Component, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    { path: 'posts', component: PostsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

