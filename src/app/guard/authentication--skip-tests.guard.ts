import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NotificationType } from '../enum/notification-type.enum';
import { AuthenticationService } from '../service/authentication.service';
import { NotificationService } from '../service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationSkipTestsGuard implements CanActivate {
  constructor(private  authenticationSerice:AuthenticationService,private router:Router,
    private notificationService: NotificationService 
    
    ){


  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    return this.isUserLoggedIn();
  }


 
  private isUserLoggedIn():boolean{

  if(this.authenticationSerice.isUserLoggedIn()){

  return true;
  }

  this.router.navigate(['/login']);
  
   this.notificationService.notify(NotificationType.ERROR,'You ned to log in to access the page'.toUpperCase());
   
  
  return true;}}
