import { Component, OnInit } from '@angular/core';
import {ControlContainer, NgForm} from '@angular/forms';

@Component({
  selector: 'app-button-submit',
  templateUrl: './button-submit.component.html',
  styleUrls: ['./button-submit.component.css'],
  providers : [{provide : ControlContainer, useExisting : NgForm}]
})
export class ButtonSubmitComponent  {
  constructor(private control : NgForm) { }
}