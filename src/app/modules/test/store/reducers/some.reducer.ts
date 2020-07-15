import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/some.actions';

export interface State {
  var: string | undefined
};

export const initialState: State = {
  var: undefined
};

const saveItem = createReducer(
  initialState,
  on(actions.saveItem, (state, props) => ({
    ...state,
    var: props.var
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return saveItem(state, action);
}
