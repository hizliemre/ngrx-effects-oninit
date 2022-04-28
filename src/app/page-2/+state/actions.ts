import { createAction, props } from '@ngrx/store';

export const initialize = createAction('[Page 2][STATE] Initialize', props<{ someValue: string }>());
export const initialized = createAction('[Page 2][STATE] Initialized');
export const afterInitialized = createAction('[Page 2][STATE] After initialized');
export const destroy = createAction('[Page 2][STATE] Destroy');
