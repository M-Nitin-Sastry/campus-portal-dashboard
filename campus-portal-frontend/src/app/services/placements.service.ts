import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacementsService {

  private apiUrl = 'http://localhost:4000/api/placements';

  constructor(private http: HttpClient) {}

  getPlacements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addPlacement(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  deletePlacement(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
