import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(public _auth:AuthserviceService,
    private _router:Router){

}
logoutUser()
{
localStorage.removeItem('token')
this._router.navigate(['/'])
}

loggedUser()
{
  this._router.navigate(['/addbook'])
}
loggedUser1()
{
  this._router.navigate(['/addauthor'])
}
}
