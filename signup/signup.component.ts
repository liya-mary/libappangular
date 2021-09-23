import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { bookservice } from '../bookservice.service';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  /*userForm: FormGroup;*/
  
  user={uname:'',
  email:'',
  password:'',
  repeatpassword:''
  }

  constructor(private bookservice:bookservice,private router:Router,private auth:AuthserviceService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  
  }
  signupuser(){
    this.bookservice.newuser(this.user);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/login']);
    /*this.bookservice.newuser(this.user);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/login']);*/
   /* this.auth.signupUser(this.user)
    .subscribe(
      (    res: any) => {
        localStorage.setItem('token', res.token)
        //this.bookservice.newuser(this.user);
        this.router.navigate(['/books'])
      },
      (    err: any) => {
        console.log(err);
        this.router.navigate(['/signup'])
      }
    ) 
  }*/

   }
}

