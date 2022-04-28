import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { page2Feature } from './+state/reducer';
import { Page2Component } from './page-2.component';

@NgModule({
  declarations: [Page2Component],
  imports: [
    CommonModule,
    StoreModule.forFeature(page2Feature)
  ],
  exports: [Page2Component],
})
export class Page2Module { }
