import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetails } from './payment-details.component';
@Component({
  selector: 'app-root',
  imports: [PaymentDetails ,RouterOutlet],
  templateUrl: './app.html',
  styleUrls: './app.css'
})
export class App {
  protected title = 'PaymentApp';
}
