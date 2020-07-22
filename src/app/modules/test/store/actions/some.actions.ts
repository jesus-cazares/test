import { createAction, props } from '@ngrx/store';
import { Item } from 'src/app/shared/model/item';

export const saveItem = createAction(
    '[Save] Save item',
     props<{ val: Item } >()
  );
