import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationType } from '../enum/notificaton-type.enum';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router,
    private notificationService: NotificationService
    ) {}

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
return this.isUserLoggedIn();
}


private isUserLoggedIn(): boolean {
  if (this.authenticationService.isUserLoggedIn()) {
    return true;
  }
  this.router.navigate(['/login']);
  this.notificationService.notify(NotificationType.ERROR,'yyou need to log in first'.toUpperCase());
  return false;
}



  
}
