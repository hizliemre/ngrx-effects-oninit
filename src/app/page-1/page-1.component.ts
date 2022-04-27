import { Component, OnDestroy, OnInit } from '@angular/core';
import { EffectSources } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from './+state/actions';
import { Page1Effects } from './+state/effects';
import { page1Feature } from './+state/reducer';

@Component({
  selector: 'page-1',
  template: 'page 1 rendered. state initialized : {{ initialized$ | async }}',
  providers: [
    Page1Effects
  ]
})
export class Page1Component implements OnInit, OnDestroy {

  initialized$ = this._store.select(page1Feature.selectInitialized);

  constructor(
    private _store: Store,
    private _effectSources: EffectSources,
    private _effects: Page1Effects
  ) { }


  ngOnInit(): void {
    this._effectSources.addEffects(this._effects);
  }

  ngOnDestroy(): void {
    this._store.dispatch(actions.destroy())
  }
}
