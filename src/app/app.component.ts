import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {TemperatureComponentComponent} from "./temperature/temperature-component/temperature-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, TemperatureComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherStation';
}
