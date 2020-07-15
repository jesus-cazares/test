import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/some.actions';

export interface State {
  val: string
};

export const initialState: State = {
  val: 'HI!'
};

const saveItem = createReducer(
  initialState,
  on(actions.saveItem, (state, props) => ({
    ...state,
    var: props.val
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return saveItem(state, action);
}
