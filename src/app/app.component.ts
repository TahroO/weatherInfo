import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {TemperatureComponentComponent} from "./dataComponents/temperature-component/temperature-component.component";
import {InterfaceViewComponent} from "./interface/interface-view/interface-view.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, TemperatureComponentComponent, InterfaceViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weatherStation';
}
