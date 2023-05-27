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

  getByStatus(status: string): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.activitiesUrl}/status/${status}`)
  }

  deleteActivity(id: string): Observable<Activity> {
    return this.http.delete<Activity>(`${this.activitiesUrl}/${id}`)
  }

  updateActivity(item: Activity): Observable<Activity> {
    console.log(item)
    return this.http.put<Activity>(`${this.activitiesUrl}/${item._id}`, item)
  }
}
