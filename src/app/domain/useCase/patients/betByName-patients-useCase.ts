import { Injectable } from "@angular/core";
import { patientsGateway } from "../../model/patients/gateway/patients-gateway";
import { Observable } from "rxjs";
import { patientsResponseModel } from "../../model/patients/patients-Response.model";


@Injectable({
  providedIn: 'root'
})

export class GetPatientsUseCase {

  constructor( private _patientsGateWay: patientsGateway){}

  getByName(name: string): Observable<Array<patientsResponseModel>>{
    return this._patientsGateWay.getByName(name);
  }
}
