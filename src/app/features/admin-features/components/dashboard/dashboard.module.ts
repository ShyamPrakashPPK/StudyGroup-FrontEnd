import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftnavComponent } from './leftnav/leftnav.component';
import { RouterModule,Routes } from '@angular/router';
import { AngularMaterialModule } from '../../../../shared/material.module';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { RoomManagementComponent } from './components/room-management/room-management.component';
import { PostManagementComponent } from './components/post-management/post-management.component';



const routes: Routes = [
  {
    path: "admin-dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "user-management",
        component: UserManagementComponent
      },
      {
        path: "room-management",
        component: RoomManagementComponent
      },
      {
        path: "post-management",
        component: PostManagementComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    DashboardComponent,
    LeftnavComponent,
    UserManagementComponent,
    RoomManagementComponent,
    PostManagementComponent,
  
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
