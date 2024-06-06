import {errorContext} from "rxjs/internal/util/errorContext";


const jsonArray: JSON[] = [];

export class DataHandlerHelper {

  constructor() {
  }

  generateArrayFromJSON(url: string) {




    return jsonArray;
  }

  generateStringFileFromJSON(response: JSON) {
    let jsonData = JSON.stringify(response);
    let fs = require('fs');

    fs.writeFile("response.txt", jsonData, (err: string) => {
      if (err) {
        console.log(err);
      }
    })
  }

}
