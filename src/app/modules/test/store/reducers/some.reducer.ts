import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/some.actions';

export interface State {
  name: string;
  favFood: string;
};

export const initialState: State = {
  name: 'PlaceHolder Name',
  favFood: 'PlaceHolder Food'
};

const saveItem = createReducer(
  initialState,
  on(actions.saveItem, (state, props) => ({
    ...state,
    name: props.name,
    favFood: props.favFood

  }))
);

export function reducer(state: State | undefined, action: Action) {
  return saveItem(state, action);
}
