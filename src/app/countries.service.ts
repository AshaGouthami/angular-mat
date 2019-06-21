import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }
  getCountries(){
   return this.http.get("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
  }
  getStates(countryId: number){
    return this.http.get("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
   }
   getCities(countryId: number){
    return this.http.get("https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json")
   }
  }



  // apiBaseUrl = 'http://localhost/dev/tcxapp/';

  // constructor(private http: HttpClient) { }

  // getCountries() {
  //   return this.http.get(`${this.apiBaseUrl}api/countries`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // getStates(countryId: number) {
  //   return this.http.get(`${this.apiBaseUrl}api/states/${countryId}`).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // getCities(stateId: number) {
  //   return this.http.get(`${this.apiBaseUrl}api/cities/${stateId}`).pipe(
  //     catchError(this.handleError)
  //   );
//   }
//    private handleError(error: HttpErrorResponse) {
//     if (error.error instanceof ErrorEvent) {
//       console.error('An error occurred:', error.error.message);
//     } else {
//       console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
//     }
//     return throwError('Something bad happened. Please try again later.');
//   }
