/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class authService implements CanActivate {
    constructor(private route:Router) { }
    canActivate(route: ActivatedRouteSnapshot):boolean
       {
           let loggedIn = (sessionStorage.getItem('info') == 'undefined' || sessionStorage.getItem('info') == null) ? false : JSON.parse(sessionStorage.getItem('info')).loggedIn;
           if(loggedIn) {
               return true;
           }
           else {
               this.route.navigate(['/login']);
               return false;
           }
       }
}
