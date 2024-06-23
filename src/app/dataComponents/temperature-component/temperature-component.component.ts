import {Component,OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ApiServiceComponent} from "../../services/api-service/api-service.component";
import {DataService} from "../../services/DataService";

@Component({
  selector: 'app-temperature-component',
  standalone: true,
  imports: [
    FormsModule,
    ApiServiceComponent
  ],
  templateUrl: './temperature-component.component.html',
  styleUrl: './temperature-component.component.css'
})
export class TemperatureComponentComponent implements OnInit{

  protected apiServiceComponent: ApiServiceComponent;
  protected degrees: string = "";

  // @Output() newItemEvent = new EventEmitter<string>();

  constructor(private data_service: DataService) {
    this.apiServiceComponent = new ApiServiceComponent();
  }

  apiUrlGrazAirport: string = "https://dataset.api.hub.geosphere.at/v1/station/current/tawes-v1-10min?parameters=TL&station_ids=11240";

  makeFetchRequest() {
    fetch(this.apiUrlGrazAirport)
      .then(response => {
        if (!response.ok) {
          throw new Error('Response has gone wrong');
        }
        return response.json();
      })
      .then(data => {
        const dataSet = data;
        const temperature = data.features[0].properties.parameters.TL.data[0];
        const name = data.features[0].properties.parameters.TL.name;
        const unit = data.features[0].properties.parameters.TL.unit;
        this.degrees = name + ": " + temperature + unit;
        console.log(dataSet);
        console.log(temperature);
      })
      .catch(error => {
        console.error('error:', error);
      })
  }

  data: JSON[] = [];
  errorMessage!: string;


  ngOnInit() {
    this.data_service.getData(this.apiUrlGrazAirport).subscribe({
      next: (data) => {
        this.data = data;
        console.log(this.data);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  // addNewItem(value: string) {
  //   this.newItemEvent.emit(value);
  // }

  getTemperature(): string {
    this.makeFetchRequest();

    console.log("TemperatureCall works!");
    return this.degrees;
  }
}

