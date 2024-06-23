import {Component} from '@angular/core';
import {DataHandlerHelper} from "../data-handler/dataHandlerHelper";
import {FormsModule} from "@angular/forms";


enum ResponseType{
  "TEXT" = 0,
  "JSON" = 1,
  "DEFAULT" = 2,

}

@Component({
  selector: 'app-api-service',
  standalone: true,
  imports: [
    FormsModule
  ],
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

  makeFetchRequest(url: string, type: ResponseType): string | JSON {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response has gone wrong');
        }
        return response.json();
      })
      .then(data => {
        const dataSet = data;
        const jsonString = JSON.stringify(dataSet);
        const jsonObject: JSON = dataSet;
        console.log(dataSet);
        switch (type) {
          case ResponseType.TEXT :
            return jsonString;
          case ResponseType.JSON :
            return jsonObject;
          default:
            return dataSet;
        }
        // return dataSet;
      })
      .catch(error => {
        console.error('error:', error);
      })
    return "No matching Response";
  }



  // jsonToFile(obj : JSON | string, filename : string){
  //   writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
  // }
  //
  // getMetaData() {
  //   const apiUrlMetaData: string = "https://dataset.api.hub.geosphere.at/v1/station/current/tawes-v1-10min/metadata";
  //   const response = this.makeFetchRequest(apiUrlMetaData, ResponseType.JSON);
  //   console.log("MetaDataWorks!")
  //   return this.jsonToFile(response, "weatherData")
  // }

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


