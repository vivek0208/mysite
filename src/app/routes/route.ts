import { Routes } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { RegisterComponent } from '../components/auth/register/register.component';
import { ProfileComponent } from '../components/home/profile/profile.component';
import {
    UserProfileFlowGuard, ViewProfileFlowGuard, HomeFlowGuard, ForgotFlowGuard,
    LoginFlowGuard, ProfileFlowGuard, RegisterFlowGuard
} from '../guards/flow.guard'
import { HomeComponent } from '../components/home/home.component';
import { UserProfileComponent } from '../components/view-profile/user-profile/user-profile.component';
import { ViewProfileComponent } from '../components/view-profile/view-profile.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { ForgotComponent } from '../components/auth/forgot/forgot.component';

export const routes: Routes = [
    {
        path: '', component: AuthComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                component: LoginComponent,
                canActivate: [LoginFlowGuard],
                data: { title: 'Login' }
            },
            {
                path: 'register',
                component: RegisterComponent,
                canActivate: [RegisterFlowGuard],
                data: { title: 'Register' }

            },
            {
                path: 'forgot',
                component: ForgotComponent,
                canActivate: [ForgotFlowGuard],
                data: { title: 'Forgot Password' }
            },

        ]
    },
    {
        path: 'viewProfile/:user-id', component: ViewProfileComponent,
        canActivate: [ViewProfileFlowGuard],
        data: { title: 'View Profile' },
        children: [
            {
                path: 'userProfile',
                component: UserProfileComponent,
                canActivate: [UserProfileFlowGuard],
                data: { title: 'User Profile' }
            },
        ]
    },
    {
        path: 'home/:user-id', component: HomeComponent,
        canActivate: [HomeFlowGuard],
        data: { title: 'Customers' },
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [ProfileFlowGuard],
                data: { title: 'Profile' }
            },
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page not Found' }

    }
]