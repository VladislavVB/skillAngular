import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eshop';
  inCart = 0;
  valueInput = '';
  arrayInputs: string[] = [];
  apiUrl = `${environment.api}`;
  addInputValue() {
    this.arrayInputs.push(this.valueInput);
    console.log(this.arrayInputs);
    this.valueInput = ''
  }
}
