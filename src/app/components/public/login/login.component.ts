import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8)
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }


  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/home']);
    } 
  }

  login(){
    let data = this.loginForm.value;
    let user = new User(undefined,undefined,data.email,data.password);

    this.userService.loginAdmin(user).subscribe(
      res=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/home']);
      },
      err=>{
        console.log(err);
        
      }
    )
  }
}
