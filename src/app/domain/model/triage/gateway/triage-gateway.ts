import { Observable } from "rxjs";
import { triageModel } from "../triage.mode";

export abstract class triageGateway {
  abstract getAllTriage(): Observable<Array<triageModel>>;
  abstract getById(id: number): Observable<triageModel>;
}
