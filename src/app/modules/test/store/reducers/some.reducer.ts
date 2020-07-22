import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/some.actions';

export interface State {
  name: string,
  food: string
};

export const initialState: State = {
  name: 'chao',
  food: 'beef'
};

const saveItem = createReducer(
  initialState,
  on(actions.saveItem, (state, props) => ({
    ...state,
    val: props.val
  }))
);

export function reducer(state: State | undefined, action: Action) {
  console.log(state);
  return saveItem(state, action);
}