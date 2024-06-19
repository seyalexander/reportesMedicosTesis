import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { patientsResponseModel } from '../../../../../../../../domain/model/patients/patients-Response.model';
import { PatientsApiService } from '../../../../../../../../infraestructure/driven-adapter/patients/default/patients-api.service';
import { PatientsApiUsersService } from '../../../../../../../../infraestructure/driven-adapter/patients/users/patients-api-users.service';
import { SearchPacienteComponent } from '../../components/inputs/search-paciente/search-paciente.component';
import { DetallePacienteComponent } from '../../components/detalle-paciente/detalle-paciente.component';

@Component({
  selector: 'app-registrar-triage-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchPacienteComponent,
    DetallePacienteComponent
  ],
  templateUrl: './registrar-triage-page.component.html',
  styleUrl: './registrar-triage-page.component.css'
})
export class RegistrarTriagePageComponent {
  userNombre: String = ''
  userLoginOn : boolean = false;
  userLoginId : number = 0;
  userData : any = ""


  //============================================================================
  // OCULTAR MODAL DESDE LA PANTALLA DE REGISTRO
  //============================================================================
  @Output() cerrarComponenteEvent = new EventEmitter<void>();
  cerrarComponente(): void {
    this.showRegistro = false;
    this.cerrarComponenteEvent.emit();
  }

  showRegistro: boolean = false;
  mostrarComponente(): void {
    this.showRegistro = !this.showRegistro;
  }

  //============================================================================
  // INYECCION DE SERVICIOS DESDE LOS CASOS DE USO
  //============================================================================
  // constructor(
  //   private _postAutoUseCase: GetAutosUseCases,
  //   private _getModeloAutoUseCase: GetModeloAutosUseCases,
  //   private _getClienteUseCase: GetClientesUseCases,
  //   private loginService: AuthService
  // ) { }

  // Auto: autosModel = new autosModel();
  // formularioRegistro: FormGroup = new FormGroup({});

  //============================================================================
  // FUNCIÓN PRINCIPAL
  //============================================================================

  ngOnInit(): void {


    //================================================================
    // MOSTRAR AUTOS DE CLIENTES POR PERMISOS DE LOGIN (TOKEN)
    //================================================================
    // this.loginService.currentUserLoginOn.subscribe({
    //   next:(userLoginOn) => {
    //     this.userLoginOn = userLoginOn;

    //     if(this.userLoginOn) {
    //       this.loginService.currentUserIdClient.subscribe({
    //         next: (userLoginId) => {
    //           console.log(userLoginId);
    //           this.userLoginId = userLoginId
    //         }
    //       })
    //     }
    //   }
    // })




  //   this.obtenerModeloAutosExito()
  //   this.obtenerClientesExito()

  //   this.formularioRegistro = new FormGroup({
  //     Auto: new FormControl('', [
  //       Validators.required,
  //       Validators.minLength(2)
  //     ]),
  //     AutoDb: new FormControl('', []),
  //     AutoDbC: new FormControl('', [])
  //   });
   }

  //================================================================
  // BUSCAR PACIENTES POR NOMBRE - DEVELOPERS
  //================================================================

  private searchPatientsSubscription: Subscription | undefined;

  searchPatients(name: string) {
    this.searchPatientsSubscription = this._patientsServiceUsers
      .getByName(name)
      .subscribe((response: patientsResponseModel[])=> {
        console.log(response);
        this.patientsList$ = response
      })
  }

  //================================================================
  // OBTENER LISTA DE PACIENTES - DEVELOPER
  //================================================================
  private _patientsService = inject(PatientsApiService);
  patientsList$: Array<patientsResponseModel> = []
  edadActual: number = 0
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

  //============================================================================
  // GUARDAR LO REGISTRADO
  //============================================================================

  // public sendModeloAuto(): void {
  //   const formValue = this.Auto
  //   this.Auto.idClienteFk.id_Cliente = this.userLoginId
  //   console.log(this.Auto.idClienteFk.id_Cliente);

  //   formValue.idClienteFk.id_Cliente = this.Auto.idClienteFk.id_Cliente
  //   this._postAutoUseCase
  //     .newAuto(this.Auto)
  //     .subscribe((response: any) => {
  //       this.cerrarComponenteAuto()
  //       this.mensajeValidacionRegistroCorrecto(response)
  //     });
  // }

  //============================================================================
  // SWEETALERT
  //============================================================================

  // tituloSwalCorrecto: String = 'CONFIRMACIÓN';
  // mensajeValidacionRegistroCorrecto(response: any) {
  //   const message = response && response.message ? response.message : 'Auto creado correctamente.';
  //   Swal.fire(`${this.tituloSwalCorrecto}`, message, 'success').then(() => {
  //     this.regresarListaTipoDocumento();
  //   });
  // }

  //============================================================================
  // RECARGAR PÁGINA
  //============================================================================

  regresarListaTipoDocumento() {
    window.location.reload();
  }

  //============================================================================
  // DESTRCUCCIÓN DEL CARGADO DE DATOS
  //============================================================================

  ngOnDestroy(): void {
    if (this.patientsSubscription) {
      this.patientsSubscription.unsubscribe();
    }
    if (this.patientsSubscriptionUsers) {
      this.patientsSubscriptionUsers.unsubscribe();
    }
  }
}
