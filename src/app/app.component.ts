import { Component, ViewChildren, QueryList } from '@angular/core';
import { ControlContainer , NgForm} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ], 
  providers : [{provide : ControlContainer, useExisting : NgForm}]
})
export class AppComponent  {
  name = 'Angular';
  @ViewChildren('childForm')  childForm:QueryList<any>;
  formValid: boolean;
  ngOnInit(){
   
  }
  
  onSubmitValidator(validation){
      //  this.formValid = validation; 
        console.log(validation);   
  }
}
