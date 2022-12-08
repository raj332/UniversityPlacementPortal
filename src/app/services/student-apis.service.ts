import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentApisService {
  url = 'https://localhost:7212/api/StudentRegs';
  constructor(private http: HttpClient) {}

  registerStudent(stu: any) {
    return this.http.post(this.url, stu);
  }
  loginStudent(user: any) {
    return this.http.post('https://localhost:7212/api/StudentLogin', user);
  }
}