import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss'],
})
export class FooComponent implements OnInit {
  constructor() {
    console.log(this.title);
    
  }
  ngOnInit(): void {
    console.log(this.title);
    
  }
  @Input()
  title!: string;

  @Output()
  sayHi = new EventEmitter();

  onSayHi() {
    this.sayHi.emit()
  }
}
