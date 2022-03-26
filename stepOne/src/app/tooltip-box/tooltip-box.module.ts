import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipBoxComponent } from './tooltip-box.component';
import { IconComponent } from '../icon/icon.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

@NgModule({
  declarations: [TooltipBoxComponent, IconComponent, TooltipComponent],
  imports: [CommonModule],
  exports: [TooltipBoxComponent]
})
export class TooltipBoxModule {}
