import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudittrailService {

  private baseUrl = 'http://localhost:8080/api/audittrail';

  constructor(private http: HttpClient) { }

  getAudittrail(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAudittrailList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
