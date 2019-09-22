import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Passenger } from '../../models/passenger';

@Component({
  selector: 'passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input() detail: Passenger;
  @Output() remove: EventEmitter<any> = new EventEmitter();
  @Output() edit: EventEmitter<any> = new EventEmitter();
  editing: boolean = false;
  constructor() { }

  ngOnChanges(changes) {
    console.log(changes);
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  ngOnInit() {
    console.log('ngOnInit PassengerDetail');
  }

  onNameChange(value) {
    this.detail.fullname = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
