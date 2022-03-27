import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBoxComponent } from './card-box.component';
import { BageComponent } from './bage/bage.component';
import { RateComponent } from './rate/rate.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [CardBoxComponent, BageComponent, RateComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [CardBoxComponent]
})
export class CardBoxModule {}
