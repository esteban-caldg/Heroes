import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HerodetailComponent,
    MessagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
