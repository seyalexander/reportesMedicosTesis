import { Component, inject } from '@angular/core';
import { HeaderListPatientsComponent } from '../../../../patients/components/header/header-list-patients/header-list-patients.component';
import { AuthService } from '../../../../../../../../infraestructure/driven-adapter/auth/auth.service';
import { Router } from '@angular/router';
import { TableListaTriageDeveloperComponent } from '../../components/tables/table-lista-triage-developer/table-lista-triage-developer.component';
import { TriageApiService } from '../../../../../../../../infraestructure/driven-adapter/triage/default/triage-api.service';
import { triageModel } from '../../../../../../../../domain/model/triage/triage.mode';
import { Subscription } from 'rxjs';
import { mensajeValidacionRegistroCorrecto } from '../../../../../../../../infraestructure/helpers/alerts/SweetAlert/SweetAlert.helper';
import { HeaderListaTriageComponent } from '../../components/header/header-lista-triage/header-lista-triage.component';
import { RegistrarTriagePageComponent } from '../registrar-triage-page/registrar-triage-page.component';
import { DetalleReporteTriajeComponent } from '../../components/detalle-reporte-triaje/detalle-reporte-triaje.component';

@Component({
  selector: 'app-lista-triage-page',
  standalone: true,
  imports: [
    HeaderListaTriageComponent,
    TableListaTriageDeveloperComponent,
    RegistrarTriagePageComponent,
    DetalleReporteTriajeComponent
  ],
  templateUrl: './lista-triage-page.component.html',
  styleUrl: './lista-triage-page.component.css'
})
export class ListaTriagePageComponent {
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
            this.listPatientsDeveloper()
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
  private _triageService = inject(TriageApiService);
  triageList$: Array<triageModel> = []
  private triageSubscription: Subscription | undefined;

  listPatientsDeveloper() {
    this.triageSubscription = this._triageService
      .getAllTriage().subscribe((triage: triageModel[]) => {
        this.triageList$ = triage
      })
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  showDetalle: boolean = false;
  mostrarComponenteDetalle(): void {
    this.showDetalle = !this.showDetalle;
  }




  ngOnDestroy(): void {
    if (this.triageSubscription) {
      this.triageSubscription.unsubscribe();
    }
  }
}
