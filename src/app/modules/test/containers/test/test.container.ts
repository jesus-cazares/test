import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../store';
import * as selectors from '../../store/selectors/selectors';
import * as action from '../../store/actions/some.actions';
import { Item } from 'src/app/shared/model/item';

@Component({
  selector: 'ng-test-container',
  templateUrl: './test.container.html',
  styleUrls: ['./test.container.scss']
})
export class TestContainerComponent implements OnInit {
  savedValue$: Observable<any>;
  constructor(
    private store: Store<State>
  ) {
    
  }

  ngOnInit(): void {
    this.savedValue$ = this.store.select(selectors.itemSelector);  
  }

  testValue(value: any) {  
    console.log(value);
    const item: Item  = {
      name: value.name,
      food: value.food
    }
    this.store.dispatch(action.saveItem({val: item}))
    this.savedValue$.subscribe(x=> console.log(x.val));
  }
}
