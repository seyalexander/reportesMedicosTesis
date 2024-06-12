import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ErrorInterceptorService } from './infraestructure/driven-adapter/auth/error-interceptor.service';
import { ClienteInterceptorService } from './infraestructure/core/interceptores/cliente-interceptor.service';
import { patientsGateway } from './domain/model/patients/gateway/patients-gateway';
import { PatientsApiService } from './infraestructure/driven-adapter/patients/default/patients-api.service';
import { PatientsApiUsersService } from './infraestructure/driven-adapter/patients/users/patients-api-users.service';
import { triageGateway } from './domain/model/triage/gateway/triage-gateway';
import { TriageApiService } from './infraestructure/driven-adapter/triage/default/triage-api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    //Patients
    { provide: patientsGateway, useClass: PatientsApiService },
    { provide: patientsGateway, useClass: PatientsApiUsersService },
    { provide: triageGateway, useClass: TriageApiService },
    {provide:HTTP_INTERCEPTORS,useClass:ClienteInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true},
    provideHttpClient(withInterceptorsFromDi())
  ]
};
