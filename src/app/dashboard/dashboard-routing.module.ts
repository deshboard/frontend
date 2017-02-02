import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        canActivate: [ AuthGuard ],
        children: [
            {
                path: '',
                canActivateChild: [ AuthGuard ],
                children: [
                    {
                        path: '',
                        redirectTo: '/home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home',
                        component: HomeComponent
                    }
                ]
            }
        ]
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
export class DashboardRoutingModule { }
