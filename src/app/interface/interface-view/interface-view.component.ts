import { Component } from '@angular/core';
import {
  TemperatureComponentComponent
} from "../../dataComponents/temperature-component/temperature-component.component";

@Component({
  selector: 'app-interface-view',
  standalone: true,
  imports: [
    TemperatureComponentComponent
  ],
  templateUrl: './interface-view.component.html',
  styleUrl: './interface-view.component.css'
})
export class InterfaceViewComponent {

}
