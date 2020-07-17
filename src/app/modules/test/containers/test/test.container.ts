import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store';
import * as selectors from '../../store/selectors/selectors';
import { saveItem } from '../../store/actions/some.actions';
import { NameFood } from '../../components/test/test.component';

@Component({
  selector: 'ng-test-container',
  templateUrl: './test.container.html',
  styleUrls: ['./test.container.scss']
})
export class TestContainerComponent implements OnInit {
  savedValue$: Observable<NameFood>

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.savedValue$ = this.store.select(selectors.someSelector);
  }

  onValueEmitted(event: NameFood) {
    this.store.dispatch(saveItem({ name: event.name, favFood: event.favFood }));
  }
}
