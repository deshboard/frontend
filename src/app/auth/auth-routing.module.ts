import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './logged-in-guard.service';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [ LoggedInGuard ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule { }
