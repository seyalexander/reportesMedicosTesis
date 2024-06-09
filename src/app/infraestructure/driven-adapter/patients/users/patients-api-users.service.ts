import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { patientsGateway } from '../../../../domain/model/patients/gateway/patients-gateway';
import { patientsResponseModel } from '../../../../domain/model/patients/patients-Response.model';
import { environment } from '../../../../../environments/environment.development';
import { patientsRequestModel } from '../../../../domain/model/patients/patients-Request.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsApiUsersService extends patientsGateway{

  private URL = environment.api

  override getAllPatients(): Observable<patientsResponseModel[]> {
    const listado = this.httpClient.get<patientsResponseModel[]>(`${this.URL}/MostrarPaciente`)
    return listado.pipe(map((response) => this.transformPatients(response)))
  }

  private transformPatients(response: patientsResponseModel[]): any[] {
    return response.map( patients =>{
        nombre: patients.nombres
        apellidos: patients.apellidos
        fechaNacimeinto: patients.fecha_Nacimiento
      });
  }


  override newPatients(patientsRequestModel: patientsRequestModel): Observable<object> {
    return this.httpClient.post<patientsResponseModel[]>(`${this.URL}/InsertarPaciente`, patientsRequestModel)
  }


  override getByName(name: string): Observable<patientsResponseModel[]> {
    return this.httpClient.get<patientsResponseModel[]>(`${this.URL}/BuscarPacientePorNombre/${name}`)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
