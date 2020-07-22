import { Action, createReducer, on } from '@ngrx/store';

import * as actions from '../actions/some.actions';

export interface State {
  val?: string,
  name?: string,
  food?: string
};

export const initialState: State = {
  val: 'HI!',
  name: 'name',
  food:'food'
};


const saveItem = createReducer(
  initialState,
  on(actions.saveItem, (state, props) => ({
    ...state,
    var: props.val
  }))
);

const saveName = createReducer(
    initialState,
    on(actions.saveName, (state, props) => (
      {
      ...state,
      var: props.name
    }))
  );

const saveFood = createReducer(
  initialState,
  on(actions.saveFood, (state, props) => ({
    ...state,
    var: props.food
  }))
);

export function reducer(state: State | undefined, action: Action) {
  switch(action.type) {
    case '[Save] Save food':
      return saveFood(state, action);
    case '[Save] Save name':
      return  saveName(state, action);
    case '[Save] Save item':
      return saveItem(state, action);
    default:
      return saveItem(state, action);
  }
  
}