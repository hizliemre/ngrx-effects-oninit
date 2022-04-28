import { createFeature, createReducer, on } from '@ngrx/store';
import * as actions from './actions';

interface Page2State {
  initialized: boolean;
}

const initialState: Page2State = {
  initialized: false
}

const reducer = createReducer(
  initialState,
  on(actions.initialize, () => initialState),
  on(actions.initialized, (state) => ({ ...state, initialized: true })),
  on(actions.destroy, () => initialState),
)

export const page2Feature = createFeature({
  name: 'page2',
  reducer
});
