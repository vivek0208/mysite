import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes/route';
import {
  UserProfileFlowGuard, ViewProfileFlowGuard, HomeFlowGuard, ForgotFlowGuard,
  LoginFlowGuard, ProfileFlowGuard, RegisterFlowGuard, ResetPasswordFlowGuard
} from './guards/flow.guard'
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/home/content/content.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { UserProfileComponent } from './components/view-profile/user-profile/user-profile.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { SharedService } from './services/shared.service';
import { LoaderService } from './Services/loader.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaintenanceComponent } from './components/common/maintenance/maintenance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotComponent } from './components/auth/forgot/forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    ContentComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    RegisterComponent,
    ViewProfileComponent,
    UserProfileComponent,
    FooterComponent,
    PageNotFoundComponent,
    MaintenanceComponent,
    ForgotComponent,
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    UserProfileFlowGuard,
    ViewProfileFlowGuard,
    HomeFlowGuard,
    ForgotFlowGuard,
    LoginFlowGuard,
    ProfileFlowGuard,
    RegisterFlowGuard,
    ResetPasswordFlowGuard,
    SharedService,
    LoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
