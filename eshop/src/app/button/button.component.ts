import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Output() click = new EventEmitter<string>();
  constructor() {
    this.text = "Кнопка"
  }
  funkClick() {
    console.log(1);
    this.click.emit()
    
  }

  ngOnInit(): void {}
}