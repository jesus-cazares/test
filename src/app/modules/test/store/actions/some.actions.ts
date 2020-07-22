import { createAction, props } from '@ngrx/store';

export const saveItem = createAction(
    '[Save] Save item',
    props<{ val: string}>()
  );

  export const saveName = createAction(
    '[Save] Save name',
    props<{ name: string }>()
  );

  export const saveFood = createAction(
    '[Save] Save food',
    props<{ food: string }>()
  );