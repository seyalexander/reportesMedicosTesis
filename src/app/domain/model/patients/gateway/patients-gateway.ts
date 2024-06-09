import { Observable } from "rxjs";
import { patientsResponseModel } from "../patients-Response.model";
import { patientsRequestModel } from "../patients-Request.model";

export abstract class patientsGateway {
  abstract getAllPatients(): Observable<Array<patientsResponseModel>>;
  abstract newPatients(patientsRequestModel: patientsRequestModel): Observable<object>
  abstract getByName(name: string): Observable<Array<patientsResponseModel>>
}
