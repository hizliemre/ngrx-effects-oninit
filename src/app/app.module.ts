import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Module } from './page-1/page-1.module';
import { Page2Component } from './page-2/page-2.component';


@NgModule({
  declarations: [
    AppComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    Page1Module
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
