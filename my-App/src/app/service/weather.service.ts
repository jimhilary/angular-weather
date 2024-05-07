import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

 private apiKey = '3c2b0e8a4emsh9865075a6db5b02p12ee55jsn0b36bece6538';
 private apiUrl = 'https://the-weather-api.p.rapidapi.com/api/weather';

  constructor(private http: HttpClient) { }

   searchWeather(city: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', this.apiKey)
      .set('X-RapidAPI-Host', 'the-weather-api.p.rapidapi.com');

    const options = { headers };

    return this.http.get(`${this.apiUrl}/${city}`, options);
   }
}