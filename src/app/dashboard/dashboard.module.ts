import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
    imports: [
        MaterialModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        HomeComponent
    ],
})
export class DashboardModule { }
