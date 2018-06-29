import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from "rxjs/Rx";
import { LocalStorageService } from 'angular-2-local-storage'
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    public localStorage:LocalStorageService, 
  ) { }

  //canActivate(): Observable<boolean> {

    // return Observable.from([])
    //   .take(1)
    //   .map(state => !!state)
    //   .do(authenticated => {

    //     if (!authenticated) {
    //       this.router.navigate(['/login']);
    //       //this.userLoggedEmitter.emit(false);
    //     } else {
    //       //this.userLoggedEmitter.emit(true);
    //     }
    //   })
  //}
  canActivate(){
    if(this.localStorage.get('isLogged'))
      return true
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
