import { Component } from '@angular/core';
import {DataHandlerHelper} from "../data-handler/dataHandlerHelper";

@Component({
  selector: 'app-api-service',
  standalone: true,
  imports: [],
  templateUrl: './api-service.component.html',
  styleUrl: './api-service.component.css'
})
export class ApiServiceComponent {
  private dataHandlerHelper: DataHandlerHelper;

  constructor() {
    this.dataHandlerHelper = new DataHandlerHelper;
  }

  apiUrl:string = "https://dataset.api.hub.geosphere.at/v1/station/current/tawes-v1-10min?parameters=TL&station_ids=11035";
  apiUrlGrazAirport: string = "https://dataset.api.hub.geosphere.at/v1/station/current/tawes-v1-10min?parameters=TL&station_ids=11240";

  makeFetchRequest(url: string) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response has gone wrong');
        }
        return response.json();
      })
      .then(data => {
        const dataSet = data;
        console.log(dataSet);
        return dataSet;
      })
      .catch(error => {
        console.error('error:', error);
      });
  }

  getMetaData() {
    const apiUrlMetaData: string = "https://dataset.api.hub.geosphere.at/v1/station/current/tawes-v1-10min/metadata";
    this.makeFetchRequest(apiUrlMetaData);
    console.log("MetaDataWorks!")
  }

  // getTemperatureData(): string {
  //   let degrees = "";
  //        fetch(this.apiUrlGrazAirport)
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Response has gone wrong');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         const temperature = data.features[0].properties.parameters.TL.data[0];
  //         const name = data.features[0].properties.parameters.TL.name;
  //         const unit = data.features[0].properties.parameters.TL.unit;
  //         degrees = name + ": " + temperature + unit;
  //         console.log(temperature);
  //       })
  //       .catch(error => {
  //         console.error('error:', error);
  //       })
  //   return degrees;
  // }
}


