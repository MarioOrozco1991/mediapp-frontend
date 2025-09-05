import { Routes } from '@angular/router';
import { PatientComponent } from './pages/patient/patient.component';
import { MedicComponent } from './pages/medic/medic.component';
import { ExamComponent } from './pages/exam/exam.component';
import { SpecialtyComponent } from './pages/specialty/specialty.component';

export const routes: Routes = [
    {path: 'pages/patient', component: PatientComponent},
    {path: 'pages/medic', component: MedicComponent},
    {path: 'pages/exam', component: ExamComponent},
    {path: 'pages/specialty', component: SpecialtyComponent}
];
