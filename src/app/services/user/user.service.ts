import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private getAllUsersUrl = "http://localhost:8082/users/"
  constructor(private http: HttpClient) { }
  getAllUsers() {
    return this.http.get<any>(this.getAllUsersUrl + 'all');
  }

  //Register & Login

  registerAdmin(user : User){
    return this.http.post<any>(this.getAllUsersUrl + "register", user);
  }

  loginAdmin(user:User){
    return this.http.post<any>(this.getAllUsersUrl + "login", user);
  }

  isLoggedIn(){
    let token = localStorage.getItem("myToken");
    if (token) {
      return true ;
    } else {
      return false;
    }
  }
  isLoggedInAdmin(){
    let token = localStorage.getItem("myToken");  
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.data.role == "admin") {
        return true
      }else {
        return false
      }
    } else {
      return false;
    }
  }
  isLoggedInClient(){
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      if (decodedToken.data.role == "client") {
        return true
      }else {
        return false
      }
    } else {
      return false;
    }
  }

}
