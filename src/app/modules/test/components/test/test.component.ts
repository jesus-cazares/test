import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
@Component({
  selector: 'ng-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  @Output() onSubmitValue = new EventEmitter();
  testForm = new FormGroup( {
    name: new FormControl(''),
    food: new FormControl('')
  }


  );
  submit() {
    console.log(this.testForm.value);
    const name: string = this.testForm.value.name;
    const food: string = this.testForm.value.food;
    const arr = [];
    for(let i =0; i < name.length; i++) {
      if (name[i] !== 'a') {
        arr.push(name[i]);
      }
    }

    const result =arr.join('');

    console.log(result);

    this.onSubmitValue.emit({name: result, food});

  }
}
