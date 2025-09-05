import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PatientComponent } from './pages/patient/patient.component';
@Component({
  selector: 'app-root',
  imports: [PatientComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mediapp-frontend';
}
