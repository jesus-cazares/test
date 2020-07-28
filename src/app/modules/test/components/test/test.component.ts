import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "ng-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  @Output() foodEmmiter = new EventEmitter();
  //@Output("foodname") foodnameEmitter = new EventEmitter();

  foodForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.foodForm = new FormGroup({
      foodname: new FormControl(""),
      food: new FormControl(""),
    });
  }

  onSubmit() {
    let nameValue: String = this.foodForm.controls.foodname.value;
    let foodSplitArray = nameValue.split("");
    let filteredData = foodSplitArray.filter(
      (a) => a.toLowerCase() !== "a".toLowerCase()
    );
    let resultStr = filteredData.join("");
    let foodValue = this.foodForm.controls.food.value;
    this.foodEmmiter.emit({
      food: resultStr,
      foodName: foodValue,
    });
    //    this.foodnameEmitter.emit();
  }
}
