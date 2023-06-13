import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//////////////guards////////
import { UserUnauthGuardService } from './core/guard/user/user-unauth-guard.service';
import { UserAuthGuardService } from './core/guard/user/user-auth-guard.service';
import { AdminUnauthGuardService } from './core/guard/admin/admin-unauth-guard.service';
import { AdminAuthGuardService } from './core/guard/admin/admin-auth-guard.service';

////////////////////////user///////////////////////////
/////components
import { LandingPageComponent } from './features/user-features/components/landing-page/landing-page.component';
import { LoginComponent } from './features/user-features/components/login/login.component';
import { SignupComponent } from './features/user-features/components/signup/signup.component';
import { UserSelectEducationComponent } from './features/user-features/components/user-select-education/user-select-education.component';
import { GlobalroomComponent } from './features/user-features/components/globalroom/globalroom.component';


import { UserSoloRoomComponent } from './features/user-features/components/user-solo-room/user-solo-room.component';
import { GlobalFeedComponent } from './features/user-features/components/global-feed/global-feed.component';
import { UserStatsProfileComponent } from './features/user-features/components/user-stats-profile/user-stats-profile.component';


////////////////////////admin//////////////////////////

/////components
import { AdminLoginComponent } from './features/admin-features/components/admin-login/admin-login.component';
import { ChatComponent } from './features/user-features/components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    canActivate: [UserUnauthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UserUnauthGuardService]
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [UserUnauthGuardService]
  },

  {
    path: 'selectEducation',
    component: UserSelectEducationComponent,
    canActivate: [UserAuthGuardService]
  },
  {
    path: 'global-study-room',
    component: GlobalroomComponent,
    canActivate: [UserAuthGuardService]
  },
  {
    path: 'solo-study-room',
    component: UserSoloRoomComponent,
    canActivate: [UserAuthGuardService]
  },
  {
    path: 'global-feed',
    component: GlobalFeedComponent,
    canActivate: [UserAuthGuardService]
  },
  {
    path: 'user-profile-and-stats',
    component: UserStatsProfileComponent,
    canActivate: [UserAuthGuardService]
  },
  {
    path: 'chat',
    component: ChatComponent,
    canActivate: [UserAuthGuardService]
  },
  ////////////////////////////////////////////////////////////admin routers////////////////////////////////////////////////////////////
  {
    path: 'admin-login',
    component: AdminLoginComponent,
    canActivate: [AdminUnauthGuardService]
  },
  {
    path: 'admin',
    loadChildren: () => import("./features/admin-features/components/dashboard/dashboard.module").then(m => m.DashboardModule),
    canActivate: [AdminAuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
