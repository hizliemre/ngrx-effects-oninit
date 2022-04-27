import { createFeature, createReducer, on } from '@ngrx/store';
import * as actions from './actions';

interface Page1State {
  initialized: boolean;
}

const initialState: Page1State = {
  initialized: false
}

const reducer = createReducer(
  initialState,
  on(actions.initialize, () => initialState),
  on(actions.initialized, (state) => ({ ...state, initialized: true })),
  on(actions.destroy, () => initialState),
)

export const page1Feature = createFeature({
  name: 'page1',
  reducer
});
