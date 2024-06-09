import { Routes } from '@angular/router';
import { AuthComponent } from './ui/modules/auth/pages/auth/auth.component';
import { HomeComponent } from './ui/modules/home/home/home.component';
import { ListPatientsPageComponent } from './ui/modules/configuration/developers/patients/pages/list-patients-page/list-patients-page.component';
import { authGuard } from './infraestructure/core/guards/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ListPatientsPageComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];
