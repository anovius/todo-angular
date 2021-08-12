import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import {NavComponent} from './component/nav/nav.component';
import {HomeComponent} from './component/home/home.component';
import { TasksComponent } from './component/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
