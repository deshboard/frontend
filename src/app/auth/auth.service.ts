import { Injectable, Inject } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { LoginService } from './login/login.service';

@Injectable()
export class AuthService {
    isLoggedIn = false;

    redirectUrl: string;

    constructor(@Inject(LoginService) private loginService: LoginService) {
        this.isLoggedIn = !!localStorage.getItem('tokens');
    }

    login(username: string, password: string): Observable<boolean> {
        return this.loginService.login(username, password)
            .do(() =>  {
                this.isLoggedIn = true;

                localStorage.setItem('tokens', 'tokens');
            })
            .map(() => {
                return true;
            })
            .catch(() =>  {
                return Observable.of(false);
            })
        ;
    }

    logout() {
        localStorage.removeItem('tokens');

        this.isLoggedIn = false;
    }
}
