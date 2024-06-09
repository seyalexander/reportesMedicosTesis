import { environment } from './../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { patientsGateway } from '../../../../domain/model/patients/gateway/patients-gateway';
import { Observable } from 'rxjs';
import { patientsResponseModel } from '../../../../domain/model/patients/patients-Response.model';
import { patientsRequestModel } from '../../../../domain/model/patients/patients-Request.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsApiService extends patientsGateway{


  private URL = environment.api

  override getAllPatients(): Observable<patientsResponseModel[]> {
    return this.httpClient.get<patientsResponseModel[]>(`${this.URL}/MostrarPaciente`)
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
