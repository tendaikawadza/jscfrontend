import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, observable, Subscription } from "rxjs";
import { NotificationType } from "../enum/notificaton-type.enum";
import { CustomHttpRespone } from "../model/custom-http-response";
import { User } from "../model/user";
import { AuthenticationService } from "../service/authentication.service";
import { NotificationService } from "../service/notification.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{
  showLoading: boolean | undefined;
  private subscriptions: Subscription[] = [];
  Observable: any;




  constructor(private router:Router,private authenticationService:AuthenticationService ,
    private notificationService:NotificationService) { }
  
 

  ngOnInit(): void {
    if(this.authenticationService.isUserLoggedIn()){
      if (this.authenticationService.isUserLoggedIn()) {
        this.router.navigateByUrl('/user/management');
      } else {
        this.router.navigateByUrl('/login');
      }
    }
   
  }


 
  public onLogin(user: User): void {
    this.showLoading = true;
    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        
        (response: HttpResponse<User> |HttpErrorResponse ) => {
          const token = response.headers.get('JWT_TOKEN');
          this.authenticationService.saveToken(token);
        //  this.authenticationService.addUserToLocalCache(response.body);
          this.router.navigateByUrl('/user/management');
          this.showLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
          this.showLoading = false;
        }
      )
    );
  }
 
 




private sendErrorNotification(notificationType: NotificationType, message: string): void {
  if (message) {
    this.notificationService.notify(notificationType, message);
  } else {
    this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
  }
}

  

ngOnDestroy(): void {
  this.subscriptions.forEach(sub => sub.unsubscribe());
}

}




function Observer(_arg0: number) {
  throw new Error("Function not implemented.");
}

