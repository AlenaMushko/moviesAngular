import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<string | null>(sessionStorage.getItem('userName'));

  user$ = this.userSubject.asObservable();

  constructor(private router:Router) {
  }
  setUser(userName:string){
    sessionStorage.setItem('userName', userName);
    this.userSubject.next(userName);
  };

  removeUser(){
    sessionStorage.removeItem('userName');
    this.userSubject.next(null);
    this.router.navigate(['login']);
  };

}
