import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { State } from "../../store";
import * as selectors from "../../store/selectors/selectors";
import { saveItem } from "../../store/actions/some.actions";

@Component({
  selector: "ng-test-container",
  templateUrl: "./test.container.html",
  styleUrls: ["./test.container.scss"],
})
export class TestContainerComponent implements OnInit {
  savedValue$: Observable<string>;

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.savedValue$ = this.store.select(selectors.someSelector);
  }

  onFoodEmit(eve: any) {
    this.store.dispatch(saveItem({ val: eve.food, val1: eve.foodName }));
  }
}
