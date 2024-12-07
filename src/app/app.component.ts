import { Component } from '@angular/core';
import { AppRoutingModule } from './app.routes'; // Маршрутизация
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
//   imports: [ AppRoutingModule],
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
