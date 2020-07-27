import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ng-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  group: FormGroup;

  @Output()
  valueChanges = new EventEmitter<{[name: string]: string}>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.group = this.fb.group({
      name: "",
      favFood: "",
    });
  }

  onSubmit() {
    console.log(this.group.value);

    const name = this.group.get('name') as FormControl;
    let nameArr = name.value.split('');
    nameArr = nameArr.filter((char: string) => char !== 'a');
    const nameStr = nameArr.join('');
    const favFood = this.group.get('favFood') as FormControl;
    const favFoodStr = favFood.value as string;

    console.log('name::', nameStr, favFoodStr);
    
    this.valueChanges.emit({name: nameStr, favFood: favFoodStr});
  }
}
