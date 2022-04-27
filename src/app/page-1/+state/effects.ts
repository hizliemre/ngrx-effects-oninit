import { Injectable } from '@angular/core';
import { Actions, createEffect, EffectNotification, ofType, OnInitEffects, OnRunEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { delay, map, Observable, takeUntil } from 'rxjs';
import * as actions from './actions';

@Injectable()
export class Page1Effects implements OnInitEffects, OnRunEffects {

  constructor(private _actions$: Actions) { }

  $initialize = createEffect(() => {
    return this._actions$.pipe(
      ofType(actions.initialize),
      delay(3000),
      map(() => actions.initialized())
    );
  });

  ngrxOnInitEffects(): Action {
    return actions.initialize();
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return resolvedEffects$.pipe(
      takeUntil(this._actions$.pipe(ofType(actions.destroy)))
    )
  }
}
