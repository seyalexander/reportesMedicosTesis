import { Injectable } from "@angular/core";
import { patientsGateway } from "../../model/patients/gateway/patients-gateway";
import { Observable } from "rxjs";
import { patientsResponseModel } from "../../model/patients/patients-Response.model";
import { triageGateway } from "../../model/triage/gateway/triage-gateway";
import { triageModel } from "../../model/triage/triage.mode";


@Injectable({
  providedIn: 'root'
})

export class GetTriageUseCase {

  constructor( private _triageGateWay: triageGateway){}

  getAllTriage(): Observable<Array<triageModel>>{
    return this._triageGateWay.getAllTriage();
  }
}
