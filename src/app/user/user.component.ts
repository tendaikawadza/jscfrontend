import { Component, OnInit } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../model/user';
import { NotificationService } from '../service/notification.service';
import { UserService } from '../service/user.service';
                                
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationType } from '../enum/notificaton-type.enum';

@Component({
  selector: 'app-user',
  templateUrl: 
  './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  private titleSubject =new BehaviorSubject<string>('Users');
  public titleAction$=this.titleSubject.asObservable();
  public users: User[]|any;
  public refreshing: boolean|any;
  private subscriptions: Subscription[] = [];
  public selectedUser:User;

  



  constructor(private userService:UserService, private notificationService:NotificationService) { }




  public changeTitle(title:string): void{

    this.titleSubject.next(title)
  }




  public getUsers(showNotification :boolean): void{
 this.refreshing=true;
 this.subscriptions.push(


  this.userService.getUsers().subscribe(
    
    
    
        
    (response:User[]|any)=>{
      

      this.userService.addUsersToLocalCache(response);
      this.users=response;
      this.refreshing=false;
      if(showNotification){

           this.sendNotification(NotificationType.SUCCESS,'${response.legnth}user (s) loaded successfully');

      }
    } ,
    (errorResponse:HttpErrorResponse)=>{

      this.sendNotification(NotificationType.ERROR,errorResponse.message);
    }
  
  
   )
 
  
  );  }
      
    public onSelectUser(selectedUser:User):void{


      this.selectedUser=selectedUser;
      document.getElementById('openUserInfor')?.click
    }

    private onProfileImageChange(event: any):void {


    }



    private sendNotification(notificationType: NotificationType, message: string): void {
      if (message) {
        this.notificationService.notify(notificationType, message);
      } else {
        this.notificationService.notify(notificationType, 'An error occurred. Please try again.');
      }
    }


  ngOnInit(): void {
  }

}
