import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store';
import * as selectors from '../../store/selectors/selectors';

@Component({
  selector: 'ng-survey-container',
  templateUrl: './survey.container.html',
  styleUrls: ['./survey.container.scss']
})
export class SurveyContainer implements OnInit {
  savedValue$: Observable<string>

  constructor(
    private store: Store<State>
  ) {}

  ngOnInit(): void {
    this.savedValue$ = this.store.select(selectors.someSelector);
  }
}
