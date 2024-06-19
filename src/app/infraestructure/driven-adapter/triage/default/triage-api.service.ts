import { Injectable } from '@angular/core';
import { triageGateway } from '../../../../domain/model/triage/gateway/triage-gateway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { triageModel } from '../../../../domain/model/triage/triage.mode';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TriageApiService extends triageGateway{

  private URL = environment.api

  override getAllTriage(): Observable<triageModel[]> {
    return this.httpClient.get<triageModel[]>(`${this.URL}/MostrarTriaje`)
  }

  override getById(id: number): Observable<triageModel> {
    return this.httpClient.get<triageModel>(`${this.URL}/BuscarCliente/${id}`)
  }

  constructor(private httpClient: HttpClient) {
    super();
  }
}
