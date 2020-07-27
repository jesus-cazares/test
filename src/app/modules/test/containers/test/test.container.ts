import { saveItem } from './../../store/actions/some.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store';
import * as selectors from '../../store/selectors/selectors';

@Component({
  selector: 'ng-test-container',
  templateUrl: './test.container.html',
  styleUrls: ['./test.container.scss']
})
export class TestContainerComponent implements OnInit {
  savedValue$: Observable<string>

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.savedValue$ = this.store.select(selectors.someSelector);
  }

  onValueChanges(event: any) {
    this.store.dispatch(saveItem({...event}));
  }
}
