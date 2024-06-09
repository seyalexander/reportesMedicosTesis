import { Injectable } from "@angular/core";
import { patientsGateway } from "../../model/patients/gateway/patients-gateway";
import { patientsRequestModel } from "../../model/patients/patients-Request.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GetPatientsUseCase {

  constructor( private _patientsGateWay: patientsGateway){}

  newPatients(patientsRequestModel: patientsRequestModel): Observable<object> {
    return this._patientsGateWay.newPatients(patientsRequestModel);
  }
}
