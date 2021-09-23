import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService} from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth:AuthserviceService,private _router:Router)
  {

  }
  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
}*/
canActivate():boolean{
  if (this._auth.loggedIn())
  {
    console.log('true')
    return true

  }
  else{
    this._router.navigate(['/products'])
    return false

  }
}
}