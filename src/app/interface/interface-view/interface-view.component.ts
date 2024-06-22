import { Component } from '@angular/core';
import {
  TemperatureComponentComponent
} from "../../dataComponents/temperature-component/temperature-component.component";
import {FormsModule} from "@angular/forms";
import {ApiServiceComponent} from "../../services/api-service/api-service.component";

@Component({
  selector: 'app-interface-view',
  standalone: true,
  imports: [
    TemperatureComponentComponent,
    FormsModule,
    ApiServiceComponent
  ],
  templateUrl: './interface-view.component.html',
  styleUrl: './interface-view.component.css'
})
export class InterfaceViewComponent {

  private temperatureComponent: TemperatureComponentComponent;

  constructor() {

    this.temperatureComponent = new TemperatureComponentComponent;
  }

  onClick() {
    this.showTemperature();
    console.warn("ClickEvent!!")
  }

  showTemperature() : string{
    return this.temperatureComponent.getTemperature();

  }

  showMetaData() {

  }

}
