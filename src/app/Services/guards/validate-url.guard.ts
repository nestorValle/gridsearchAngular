import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateURLGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const indexForIdinUrl = 1;
      const id = +next.url[indexForIdinUrl].path;
      if (isNaN(id) || id < 1) {
        alert('is not a valid number');
        this.router.navigate(['']);
        return false;
      }
    return true;
  }
}
