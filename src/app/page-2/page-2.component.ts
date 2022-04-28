import { Component, OnDestroy, OnInit } from '@angular/core';
import { EffectSources } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as actions from './+state/actions';
import { Page2Effects } from './+state/effects';
import { page2Feature } from './+state/reducer';

@Component({
  selector: 'page-2',
  template: 'page 2 rendered',
  providers: [Page2Effects]
})
export class Page2Component implements OnInit, OnDestroy {

  initialized$ = this._store.select(page2Feature.selectInitialized);

  constructor(
    private _store: Store,
    private _effectSources: EffectSources,
    private _effects: Page2Effects
  ) { }

  ngOnInit(): void {
    this._effectSources.addEffects(this._effects);
  }

  ngOnDestroy(): void {
    this._store.dispatch(actions.destroy())
  }

}
