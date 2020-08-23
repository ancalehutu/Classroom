import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/test/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getAllStudentsService(): Observable<any> {
    return this.http.get(API_URL+'admin/getstudents');
  }

  getAllTeachersService(): Observable<any> {
    return this.http.get(API_URL+'admin/getteachers');
  }

  getAllClassesService(): Observable<any> {
    return this.http.get(API_URL+'admin/getclasses');
  }

  getStudentService(id_student): Observable<any> {
    console.log(API_URL+'admin/getstudentsId/'+`${id_student}`);
    return this.http.get(API_URL+'admin/getstudentsId/'+`${id_student}`);
  }

  getTeacherService(id_teacher): Observable<any> {
    return this.http.get(API_URL+'admin/getteachersId/'+`${id_teacher}`);
  }

  getClassService(id_classes): Observable<any> {
    return this.http.get(API_URL+'admin/getclassesId/'+`${id_classes}`);
  }

  createStudentService(data:any): Observable<any> {
    return this.http.post<any>(API_URL+'admin/student', data);
  }

  createTeacherService(data:any): Observable<any> {
    return this.http.post<any>(API_URL+'admin/teacher', data);
  }

  createClassService(data:any): Observable<any> {
    return this.http.post<any>(API_URL+'admin/classes', data);
  }

  updateStudentService(id_student:any, data:any) {
    const API_URL_HERE=API_URL+'admin/updatestudents';
    console.log(`${API_URL_HERE}/${id_student}`);
    return this.http.put(`${API_URL_HERE}/${id_student}`, data);
  }

  updateTeacherService(id_teacher:any, data:any) {
    const API_URL_HERE=API_URL+'admin/updateteachers';
    console.log(`${API_URL_HERE}/${id_teacher}`);
    return this.http.put(`${API_URL_HERE}/${id_teacher}`, data);
  }

  updateClassService(id_classes:any, data:any) {
    const API_URL_HERE=API_URL+'admin/updateclasses';
    return this.http.put(`${API_URL_HERE}/${id_classes}`, data);
  }
}