import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//added angular material imports externally and imported it here//
import { AngularMaterialModule } from './shared/material.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';


//firebase
import { AngularFireModule } from '@angular/fire/compat';
import { enviornment } from './core/authentication/firebase.service'


//components//
import { UserSelectEducationComponent } from './features/user-features/components/user-select-education/user-select-education.component';
import { UserNavbarComponent } from './shared/components/user/user-navbar/user-navbar.component';
import { LandingPageComponent } from './features/user-features/components/landing-page/landing-page.component';
import { LoginComponent } from './features/user-features/components/login/login.component';
import { SignupComponent } from './features/user-features/components/signup/signup.component';
import { GlobalroomComponent } from './features/user-features/components/globalroom/globalroom.component';
import { AdminLoginComponent } from './features/admin-features/components/admin-login/admin-login.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { GlobalFeedComponent } from './features/user-features/components/global-feed/global-feed.component';
import { UserSoloRoomComponent } from './features/user-features/components/user-solo-room/user-solo-room.component';
import { UserStatsProfileComponent } from './features/user-features/components/user-stats-profile/user-stats-profile.component';
import { ChatComponent } from './features/user-features/components/chat/chat.component';
import { ChatContainerComponent } from './features/user-features/components/chat/chat-container/chat-container.component';
import { MessagesContainerComponent } from './features/user-features/components/chat/messages-container/messages-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSelectEducationComponent,
    UserNavbarComponent,
    LandingPageComponent,
    LoginComponent,
    SignupComponent,
    GlobalroomComponent,
    AdminLoginComponent,
    GlobalFeedComponent,
    UserSoloRoomComponent,
    UserStatsProfileComponent,
    ChatComponent,
    ChatContainerComponent,
    MessagesContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(enviornment.firebaseConfig),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
