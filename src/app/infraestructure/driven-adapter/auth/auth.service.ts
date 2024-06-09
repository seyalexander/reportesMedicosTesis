import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { LoginRequest } from '../../../domain/model/auth/auth.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUserLoginOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUserData: BehaviorSubject<String> = new BehaviorSubject<String>("");
  currentUserNombre: BehaviorSubject<String> = new BehaviorSubject<String>("");
  currentUserIdClient: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentUserIdEmpleado: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  currentUserRole: BehaviorSubject<String> = new BehaviorSubject<String>("");

  constructor(private http: HttpClient) {
    const token = sessionStorage.getItem("jwt");
    const empleadoId = sessionStorage.getItem("empleado");
    const userNombre = sessionStorage.getItem("username");
    const role = sessionStorage.getItem("role");
    this.currentUserLoginOn = new BehaviorSubject<boolean>(sessionStorage.getItem("jwt") != null);
    this.currentUserData = new BehaviorSubject<String>(sessionStorage.getItem("jwt") || "");
    this.currentUserRole = new BehaviorSubject<String>(role || "");
    this.currentUserNombre = new BehaviorSubject<String>(userNombre || "");


    if (token) {
      this.currentUserLoginOn.next(true);
      this.currentUserData.next(token);
      if (empleadoId) {
        this.currentUserIdEmpleado.next(Number(empleadoId));
      }
      if (role) {
        this.currentUserRole.next(String(role));
      }
      if (userNombre) {
        this.currentUserNombre.next(userNombre);
      }
    }
  }

  login(credentials: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.api + "/Login", credentials).pipe(
      tap((userData) => {
        console.log("SERVICIO LOGIN:", userData);
        sessionStorage.setItem("jwt", userData.jwt);
        sessionStorage.setItem("role",userData.role);
        sessionStorage.setItem("username",userData.username);
        this.currentUserData.next(userData.jwt);
        this.currentUserIdClient.next(userData.cliente);
        this.currentUserIdEmpleado.next(userData.empleado)
        this.currentUserNombre.next(userData.username);
        this.currentUserLoginOn.next(true);
        this.currentUserRole.next(userData.role)
        console.log("SERVICIO LOGIN:", userData.role);
      }),
      map((userData) => userData.token),
      catchError(this.handleError)
    );
  }

  logout(): void {
    sessionStorage.removeItem("jwt");
    sessionStorage.removeItem("clienteId");
    sessionStorage.removeItem("username");
    this.currentUserData.next("");
    this.currentUserIdClient.next(0);
    this.currentUserNombre.next("");
    this.currentUserLoginOn.next(false);
    console.log("Logout completed. Current state:");
    console.log("currentUserData:", this.currentUserData.value);
    console.log("currentUserIdClient:", this.currentUserIdClient.value);
    console.log("currentUserNombre:", this.currentUserNombre.value);
    console.log("currentUserLoginOn:", this.currentUserLoginOn.value);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Se ha producio un error ', error.error);
    }
    else {
      console.error('Backend retornó el código de estado ', error);
    }
    return throwError(() => new Error('Algo falló. Por favor intente nuevamente.'));
  }

  get userData(): Observable<String> {
    return this.currentUserData.asObservable();
  }

  get userRole(): Observable<String> {
    return this.currentUserRole.asObservable();
  }

  get useRole(): String {
    return this.currentUserRole.value;
  }

  get userLoginOn(): Observable<boolean> {
    return this.currentUserLoginOn.asObservable();
  }

  get userToken(): String {
    return this.currentUserData.value;
  }
}
