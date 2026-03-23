import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './models/bike.model';

@Injectable({
  providedIn: 'root'
})
export class BikeServiceService {

  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:5111/api'; 

  
  getBikes(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/Product`);
  }
  
  getBikeById(id: number): Observable<ApiResponse<any>> {
    return this.http.get<ApiResponse<any>>(`${this.baseUrl}/Product/${id}`);
  }

  getCategories(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/Lookup/categories`);
  }
  getManufacturers(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/Lookup/manufacturers`);
  }

  getcolor(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/Lookup/colours`);
  }

  getCurrencies(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/Lookup/currencies`);
  }

  getFavourites(): Observable<ApiResponse<any[]>> {
    return this.http.get<ApiResponse<any[]>>(`${this.baseUrl}/Favourite`);
  }

  removeFromFavourites(id:number): Observable<ApiResponse<any>> {
    return this.http.delete<ApiResponse<any>>(`${this.baseUrl}/Favourite/${id}`);
  }

addBike(bike: FormData): Observable<ApiResponse<any>> {
  return this.http.post<ApiResponse<any>>(`${this.baseUrl}/Product`, bike);
}

  addToFavourites(bike: any): Observable<ApiResponse<any>> {
  return this.http.post<ApiResponse<any>>(`${this.baseUrl}/Favourite`, bike);
}
}