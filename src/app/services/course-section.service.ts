

const baseUrl = 'http://localhost:8080/api/tutorials';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourseSection } from '../models/course-section.model'

@Injectable({
  providedIn: 'root',
})
export class CourseSectionService {
  private baseUrl = 'http://0.0.0.0:8000/courses_sections'; // Adjust the base URL as needed

  constructor(private http: HttpClient) {}

  getAll(): Observable<ICourseSection[]> {
    return this.http.get<ICourseSection[]>(this.baseUrl);
  }

  get(id: any): Observable<ICourseSection> {
    return this.http.get<ICourseSection>(`${this.baseUrl}/${id}`);
  }

  create(data: ICourseSection): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: ICourseSection): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByCourseID(courseID: string): Observable<ICourseSection[]> {
    console.log("courseID = " + courseID)
    const theUrl = this.baseUrl + '/' + courseID;
    return this.http.get<ICourseSection[]>(theUrl);
  }
}

