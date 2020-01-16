//our root app component
import { Component, NgModule } from "@angular/core";
import { FormsModule, FormGroup, FormControl } from "@angular/forms";
import { DecimalMask } from "./decimal-mask.directive";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  name: string;
  value: number;
  constructor() {}
  profileForm: FormGroup;
  ngOnInit() {
    this.profileForm = new FormGroup({
      amount: new FormControl("")
    });
  }
}
