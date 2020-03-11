import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  @Input() receivers;
  @Output() getData = new EventEmitter;
  @Output() deleteData = new EventEmitter;
  @Output() report = new EventEmitter;
  
 // form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  marked = false;
  filter = false;
  
  onFilterChange(event: any, value: any) {
    this.getData.emit(event);

    this.marked = value.target.checked;

    console.log(value)
  }

  submit()
  {

  }

}
