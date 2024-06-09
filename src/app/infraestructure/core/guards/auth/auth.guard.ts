import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../driven-adapter/auth/auth.service';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  return true
};
