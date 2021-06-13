import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {

  @Input() tenGhe: any;
  @Output() eventAddGhe = new EventEmitter();

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  addNewGhe() {
    this.status = !this.status;
    this.eventAddGhe.emit(this.status)
  }


}
