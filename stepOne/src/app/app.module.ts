import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { CardProductModule } from './card-product/card-product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipBoxModule } from './tooltip-box/tooltip-box.module';


@NgModule({
  declarations: [AppComponent ],
  imports: [BrowserModule, ButtonModule, CardProductModule, BrowserAnimationsModule, TooltipBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
