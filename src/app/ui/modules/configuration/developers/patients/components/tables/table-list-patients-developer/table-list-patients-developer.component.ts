import { Component, Input } from '@angular/core';
import { patientsResponseModel } from '../../../../../../../../domain/model/patients/patients-Response.model';

@Component({
  selector: 'app-table-list-patients-developer',
  standalone: true,
  imports: [],
  templateUrl: './table-list-patients-developer.component.html',
  styleUrl: './table-list-patients-developer.component.css'
})
export class TableListPatientsDeveloperComponent {
  @Input() patientsListDeveloper: Array<patientsResponseModel> = []
}
