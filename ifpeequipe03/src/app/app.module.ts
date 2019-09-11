import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { IsaacComponent } from './isaac/isaac.component';

import { TaliaComponent } from './talia/talia.component';


@NgModule({
  declarations: [
    AppComponent,

    IsaacComponent

    TaliaComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
