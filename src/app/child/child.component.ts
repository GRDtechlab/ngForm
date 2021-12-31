import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  QueryList,
  ViewChildren
} from "@angular/core";
import { ControlContainer, NgForm } from "@angular/forms";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ChildComponent implements OnInit {
  @Input("id") inputId;
  @Input("name") inputName;

  constructor() {}

  ngOnInit() {}
  onChange(event: any) {
    console.log(event.value);
  }
}
