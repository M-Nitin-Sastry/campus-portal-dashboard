import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmissionsService {

  private apiUrl = 'http://localhost:4000/api/admissions';

  constructor(private http: HttpClient) {}

  // Get all admission records
  getAdmissions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ✅ Update allocated seats for a specific branch
  updateSeats(id: string, branchName: string, allocatedSeats: number): Observable<any> {
    // NOTE: 'branch' here MUST match your backend route:  /:id/branch/:branchName
    return this.http.put(`${this.apiUrl}/${id}/branch/${branchName}`, { allocatedSeats });
  }
}
