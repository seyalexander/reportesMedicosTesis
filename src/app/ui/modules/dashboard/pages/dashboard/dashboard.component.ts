import { Component, inject } from '@angular/core';
import { PatientsApiService } from '../../../../../infraestructure/driven-adapter/patients/default/patients-api.service';
import { patientsResponseModel } from '../../../../../domain/model/patients/patients-Response.model';
import { Subscription } from 'rxjs';
import { triageModel } from '../../../../../domain/model/triage/triage.mode';
import { TriageApiService } from '../../../../../infraestructure/driven-adapter/triage/default/triage-api.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  private _patientsService = inject(PatientsApiService);
  patientsList$: Array<patientsResponseModel> = []
  private patientsSubscription: Subscription | undefined;

  ngOnInit(): void {

    this.listPatientsDeveloper()
    this.listTriajeDeveloper()
  }

  listPatientsDeveloper() {
    this.patientsSubscription = this._patientsService
      .getAllPatients().subscribe((patients: patientsResponseModel[]) => {
        this.patientsList$ = patients
        console.log(this.patientsList$);

      })
  }

  private _triageService = inject(TriageApiService);
  triageList$: Array<triageModel> = []
  private triageSubscription: Subscription | undefined;

  listTriajeDeveloper() {
    this.triageSubscription = this._triageService
      .getAllTriage().subscribe((triage: triageModel[]) => {
        this.triageList$ = triage
      })
  }



  ngOnDestroy(): void {
    if (this.patientsSubscription) {
      this.patientsSubscription.unsubscribe();
    }
    if (this.triageSubscription) {
      this.triageSubscription.unsubscribe();
    }
  }

}
