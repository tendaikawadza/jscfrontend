import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { User } from './model/user';
import { JwtHelperService } from '@auth0/angular-jwt';




describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
