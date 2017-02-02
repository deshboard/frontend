import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginService } from './login/login.service';
import { ApiLoginService } from './login/login.api.service';
//import { MockLoginService } from './login/login.mock.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { LoggedInGuard } from './logged-in-guard.service';

import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        MaterialModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        { provide: LoginService, useClass: ApiLoginService },
        //{ provide: LoginService, useClass: MockLoginService },
        AuthGuard,
        AuthService,
        LoggedInGuard
    ]
})
export class AuthModule { }
