import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../model/patientModel';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url : string = `${environment.HOST}/patients`;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<Patient[]>(this.url);

  }
}