import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MdSnackBar } from '@angular/material';

import { AuthService } from '../auth.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public username: string;
    public password: string;
    public rememberMe: boolean;

    public loginInProgress = false;

    private loginFailureNotification;

    constructor(private authService: AuthService, private router: Router, private snackBar: MdSnackBar) { }

    login() {
        // Check if there is already a login in progress
        if (this.loginInProgress) {
            return;
        }

        this.loginInProgress = true;

        // Dismiss any previous failure notifications
        if (this.loginFailureNotification) {
            this.loginFailureNotification.dismiss();
        }

        // Try logging in
        this.authService.login(this.username, this.password).subscribe(val => {
            if (val) {
                const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';

                this.router.navigate([redirect]);
            } else {
                this.password = '';
                this.loginFailureNotification = this.snackBar.open('Login failed', 'Dismiss', {
                    duration: 5000
                });
            }

            this.loginInProgress = false;
        });
    }
}
