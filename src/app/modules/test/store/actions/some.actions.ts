import { createAction, props } from "@ngrx/store";

export const saveItem = createAction(
  "SAVE",
  props<{ val: string; val1: string }>()
);
