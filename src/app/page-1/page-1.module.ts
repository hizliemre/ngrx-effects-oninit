import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { page1Feature } from './+state/reducer';
import { Page1Component } from './page-1.component';

@NgModule({
  declarations: [Page1Component],
  imports: [
    CommonModule,
    StoreModule.forFeature(page1Feature)
  ],
  exports: [Page1Component],
})
export class Page1Module { }
