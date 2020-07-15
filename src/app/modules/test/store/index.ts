import { Action, ActionReducerMap } from '@ngrx/store';

import * as saveReducer from './reducers/some.reducer';

export const featureKey = 'test';

export interface State {
    save: saveReducer.State;
}

export const reducer: ActionReducerMap<State, Action> = {
    save: saveReducer.reducer
};

export const effects = [
];
