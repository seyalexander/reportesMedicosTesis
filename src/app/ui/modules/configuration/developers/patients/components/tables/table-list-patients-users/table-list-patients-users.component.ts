import { Component, Input } from '@angular/core';
import { patientsResponseModel } from '../../../../../../../../domain/model/patients/patients-Response.model';

@Component({
  selector: 'app-table-list-patients-users',
  standalone: true,
  imports: [],
  templateUrl: './table-list-patients-users.component.html',
  styleUrl: './table-list-patients-users.component.css'
})
export class TableListPatientsUsersComponent {
  @Input() patientsListUsers: Array<patientsResponseModel> = []
}
