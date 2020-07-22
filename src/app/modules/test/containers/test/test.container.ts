import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store';
import * as selectors from '../../store/selectors/selectors';
import * as action from '../../store/actions/some.actions';

@Component({
  selector: 'ng-test-container',
  templateUrl: './test.container.html',
  styleUrls: ['./test.container.scss']
})
export class TestContainerComponent implements OnInit {
  savedValue$: Observable<any>;
  savedFoodValue$: Observable<any>;
  savedNameValue$: Observable<any>;
  constructor(
    private store: Store<State>
  ) {
    
  }

  ngOnInit(): void {
    this.savedValue$ = this.store.select(selectors.someSelector);  
    this.savedNameValue$ = this.store.select(selectors.nameSelector);  
    this.savedFoodValue$ = this.store.select(selectors.foodSelector);  
   
  }

  testValue(value: any) {  
    console.log(value);
    this.store.dispatch(action.saveName(value.name));
    this.store.dispatch(action.saveFood(value.food));
  }
}
