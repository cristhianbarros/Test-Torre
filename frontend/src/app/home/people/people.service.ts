import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.post(`${environment.urlSearch}/people/_search`, {});
  }

  getBio(username: string, params: HttpParams = new HttpParams()) {
    return this.http.get(`${environment.urlBio2}/${username}/detail`, {
      params,
      headers: this.headers,
    });
  }
}
