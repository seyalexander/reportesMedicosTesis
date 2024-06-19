import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../../../../infraestructure/driven-adapter/auth/auth.service';
import { PatientsApiService } from '../../../../../../../infraestructure/driven-adapter/patients/default/patients-api.service';
import { patientsResponseModel } from '../../../../../../../domain/model/patients/patients-Response.model';
import { patientsRequestModel } from '../../../../../../../domain/model/patients/patients-Request.model';
import { Subscription } from 'rxjs';
import { TableListPatientsDeveloperComponent } from '../../components/tables/table-list-patients-developer/table-list-patients-developer.component';
import { PatientsApiUsersService } from '../../../../../../../infraestructure/driven-adapter/patients/users/patients-api-users.service';
import { TableListPatientsUsersComponent } from '../../components/tables/table-list-patients-users/table-list-patients-users.component';
import { Router } from '@angular/router';
import { FooterListPatientsComponent } from '../../components/footer/footer-list-patients/footer-list-patients.component';
import { HeaderListPatientsComponent } from '../../components/header/header-list-patients/header-list-patients.component';

@Component({
  selector: 'app-list-patients-page',
  standalone: true,
  imports: [
    TableListPatientsDeveloperComponent,
    TableListPatientsUsersComponent,
    FooterListPatientsComponent,
    HeaderListPatientsComponent
  ],
  templateUrl: './list-patients-page.component.html',
  styleUrl: './list-patients-page.component.css'
})
export class ListPatientsPageComponent {

  // ================================================>> Datos de login
  userNombre: String = ''
  userRole: String = ''
  userLoginOn: boolean = false;
  userLoginId: number = 0;
  userData: any = ""
  //================================================

  private loginService = inject(AuthService);
  private router= inject(Router);

  ngOnInit(): void {

    this.validationLogin()
  }

  validationLogin() {
    this.loginService.currentUserLoginOn.subscribe({
      next: (userLoginOn) => {
        this.userLoginOn = userLoginOn;

        if (this.userLoginOn) {

          this.loginService.currentUserRole.subscribe({
            next: (userRol) => {
              this.userRole = userRol;
              console.log(this.userRole);
                this.listPatientsDeveloper()
                this.listPatientsUser()
            }
          });

          this.loginService.currentUserIdEmpleado.subscribe({
            next: (userLoginId) => {
              this.userLoginId = userLoginId;
            }
          });

        } else {
          this.userLoginId = 0;
          this.userNombre = '';
          this.userData = '';
          this.router.navigateByUrl('/');

        }
      }
    });
  }

  //================================================================
  // OBTENER LISTA DE PACIENTES - DEVELOPER
  //================================================================
  private _patientsService = inject(PatientsApiService);
  patientsList$: Array<patientsResponseModel> = []
  private patientsSubscription: Subscription | undefined;

  listPatientsDeveloper() {
    this.patientsSubscription = this._patientsService
      .getAllPatients().subscribe((patients: patientsResponseModel[]) => {
        this.patientsList$ = patients
      })
  }

  //================================================================
  // OBTENER LISTA DE PACIENTES - USERS
  //================================================================
  private _patientsServiceUsers = inject(PatientsApiUsersService);
  patientsListUsers$: Array<patientsResponseModel> = []
  private patientsSubscriptionUsers: Subscription | undefined;

  listPatientsUser() {
    try {
      this.patientsSubscriptionUsers = this._patientsServiceUsers
      .getAllPatients().subscribe((patients: patientsResponseModel[]) => {
        this.patientsList$ = patients
      })
    }catch(error) {
      console.log(error);

    }


  }

  //================================================================
  // BUSCAR PACIENTES POR NOMBRE - DEVELOPERS
  //================================================================

  private searchPatientsSubscription: Subscription | undefined;

  searchPatients(name: string) {
    this.searchPatientsSubscription = this._patientsServiceUsers
      .getByName(name)
      .subscribe((response: patientsResponseModel[])=> {
        this.patientsList$ = response
      })
  }

  reload() {
    window.location.reload()
  }

  //================================================================
  // DESTRUIR PETICIÓN
  //================================================================

  ngOnDestroy(): void {
    if (this.patientsSubscription) {
      this.patientsSubscription.unsubscribe();
    }
    if (this.patientsSubscriptionUsers) {
      this.patientsSubscriptionUsers.unsubscribe();
    }
    if (this.searchPatientsSubscription) {
      this.searchPatientsSubscription.unsubscribe();
    }
  }
}
