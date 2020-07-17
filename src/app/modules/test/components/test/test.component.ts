import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
export interface NameFood {
  name: string;
  favFood: string;
}
@Component({
  selector: 'ng-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges {
  formGrp: FormGroup;
  outputStr = ''

  @Output() emitValue: EventEmitter<NameFood> = new EventEmitter();
  @Input() inputVal: NameFood;
  constructor(private fb: FormBuilder) {

  }
  ngOnInit() {
    this.formGrp = this.fb.group(
      {
        name: [''],
        favFood: ['']
      }
    );
  }
  ngOnChanges() {
    console.log('input val', this.inputVal);
  }
  onFormSubmit() {
    const toArr: [] = this.formGrp.get('name')?.value.split('');
    toArr.forEach(
      (each: string) => {

        if (each.toUpperCase() !== 'A') {
          this.outputStr = this.outputStr.concat(each);
        }
      }
    );

    // Emit name
    const foodVal = this.formGrp.get('favFood')?.value;
    const emitObject: NameFood = {
      name: this.outputStr,
      favFood: foodVal
    };
    this.emitValue.emit(emitObject);

  }


}
