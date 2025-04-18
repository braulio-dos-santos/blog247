import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { LoginAuthService } from '../services/login-auth.service';

export const loginAuthGuard: CanActivateFn = () => {
  const auth = inject(LoginAuthService);
  const router = inject(Router);

  if (auth.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};