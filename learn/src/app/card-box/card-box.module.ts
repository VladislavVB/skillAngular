import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBoxComponent } from './card-box.component';
import { RateComponent } from './rate/rate.component';
import { ButtonComponent } from './button/button.component';
import { BageComponent } from './bage/bage.component';

@NgModule({
  declarations: [CardBoxComponent, RateComponent, ButtonComponent, BageComponent],
  imports: [CommonModule],
  exports: [CardBoxComponent]
})
export class CardBoxModule {}
