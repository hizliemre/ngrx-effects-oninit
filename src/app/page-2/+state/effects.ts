import { Injectable } from '@angular/core';
import { Actions, createEffect, EffectNotification, ofType, OnInitEffects, OnRunEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, Observable, takeUntil, tap } from 'rxjs';
import * as actions from './actions';


@Injectable()
export class Page2Effects implements OnInitEffects, OnRunEffects {

  private readonly _example: string = 'hi there';

  constructor(
    private _actions$: Actions,
  ) { }

  $initialize = createEffect(() => {
    return this._actions$.pipe(
      ofType(actions.initialize),
      map(() => actions.initialized())
    );
  });

  $initialized = createEffect(() => {
    return this._actions$.pipe(
      ofType(actions.initialized),
      map(() => actions.afterInitialized())
    );
  });

  $afterInitialized = createEffect(() => {
    return this._actions$.pipe(
      ofType(actions.afterInitialized),
      tap(() => console.log('after initialized dispatched'))
    );
  }, { dispatch: false });

  ngrxOnInitEffects(): Action {
    return actions.initialize({ someValue: this._example });
  }

  ngrxOnRunEffects(resolvedEffects$: Observable<EffectNotification>): Observable<EffectNotification> {
    return resolvedEffects$.pipe(
      takeUntil(this._actions$.pipe(ofType(actions.destroy)))
    )
  }

}
