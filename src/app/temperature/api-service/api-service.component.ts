import { Component } from '@angular/core';

@Component({
  selector: 'app-api-service',
  standalone: true,
  imports: [],
  templateUrl: './api-service.component.html',
  styleUrl: './api-service.component.css'
})
export class ApiServiceComponent {

  constructor() {
  }

  apiUrl:string = "https://dataset.api.hub.geosphere.at/v1/station/current/tawes-v1-10min?parameters=TL&station_ids=11035";

  makeFetchRequest() {
    fetch(this.apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response has gone wrong');
        }
        return response.json();
      })
      .then(data => {
        const temperature = data;
        console.log(temperature);
      })
      .catch(error => {
        console.error('error:', error);
      });
  }

}
