import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bage',
  template: `
    <div class="bage-banner">Скидка -17%</div>
  `,
  styleUrls: ['./bage.component.scss']
})
export class BageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
