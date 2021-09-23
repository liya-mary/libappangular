import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  user={uname:'',
  password:''}
  
  constructor(public fb:FormBuilder, private _auth:AuthserviceService,private _router:Router) {
  }

  ngOnInit(): void {
    
  }
  loginUser () {
    console.log("hey gurll");
    this._auth.loginUser(this.user)
    .subscribe(
      (    res: any) => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/books'])
      },
      (    err: any) => {
        console.log(err);
        this._router.navigate(['/login'])
      }
    ) 
  }
   
    
}
