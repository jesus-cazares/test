import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureKey, State } from '..';

export const selectFeatureState = createFeatureSelector<State>(featureKey);

export const someSelector = createSelector(selectFeatureState, (state: State) => state.save.val);
export const nameSelector = createSelector(selectFeatureState, (state: State) => state.save.name);
export const foodSelector = createSelector(selectFeatureState, (state: State) => state.save.food);
