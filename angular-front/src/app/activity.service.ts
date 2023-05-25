import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private activitiesUrl = 'http://localhost:3000/api/activity'

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl)
  }

  getActivity(id: string): Observable<Activity> {
    return this.http.get<Activity>(`${this.activitiesUrl}/id/${id}`)
  }
}
