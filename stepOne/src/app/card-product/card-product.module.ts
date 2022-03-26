import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductComponent } from './card-product.component';
import { IconComponent } from '../icon/icon.component';

@NgModule({
  declarations: [CardProductComponent, IconComponent],
  imports: [CommonModule],
  exports: [CardProductComponent]
})
export class CardProductModule {}
