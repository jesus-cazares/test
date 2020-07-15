import { createAction, props } from '@ngrx/store';

export const saveItem = createAction(
    '[Save] Save item',
    props<{ var: string }>()
  );
  