import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Token } from "@angular/compiler";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, observable, Subscription } from "rxjs";
import { NotificationType } from "../enum/notificaton-type.enum";
import { CustomHttpRespone } from "../model/custom-http-response";
import { User } from "../model/user";
import { AuthenticationService } from "../service/authentication.service";
import { NotificationService } from "../service/notification.service";





import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Stock } from "../model/stock";


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private host=environment.apiUrl;

  constructor(private http:HttpClient) {}
   public getStock():Observable<Stock  [] |HttpErrorResponse>{

  return  this.http.get<Stock[]>('${this.host}/stock/list');

   }


   public addStock(formData: FormData): Observable<Stock|HttpErrorResponse>{
    return this.http.post<Stock>('${this.host}/stock/add',formData);

   }
   public updateStock(formData: FormData): Observable<Stock|HttpErrorResponse>{
    return this.http.post<Stock>('${this.host}/stock/update',formData);

   }


   public dleteStock(stockId: number): Observable<any|HttpErrorResponse>{
    return this.http.delete<Stock>('${this.host}/stock/delete/${userId}');

   }





   }

