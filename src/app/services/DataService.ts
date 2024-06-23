import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(apiUrl: string): Observable<JSON[]> {
    return this.http.get<JSON[]>(apiUrl);
  }
}
