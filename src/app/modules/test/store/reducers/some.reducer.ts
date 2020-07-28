import { Action, createReducer, on } from "@ngrx/store";

import * as actions from "../actions/some.actions";

export interface State {
  val: string;
  val1: string;
}

export const initialState: State = {
  val: "HI!",
  val1: "",
};

const saveItem = createReducer(
  initialState,
  on(actions.saveItem, (state, props) => ({
    ...state,
    var: props.val,
    var1: props.val1,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return saveItem(state, action);
}
