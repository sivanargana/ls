import { Component, OnInit,Input,forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR,ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [     
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => ToggleComponent),
      multi: true     
    }   
  ]
})
export class ToggleComponent implements ControlValueAccessor  {

  value; 
  onChange:(e)=> void;
  onTouched:()=> void;
  disabled:boolean;

  constructor() { }

  writeValue(obj: any): void {

    this.value = obj;
    
  }
  registerOnChange(fn: any): void {
 this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  this.disabled = isDisabled
  }
  

}
