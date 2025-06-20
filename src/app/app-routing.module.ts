import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/login/login.component';
import { SplashComponent } from './home/splash/splash.component';
import { ProfileComponent } from './account/profile/profile.component';
import { UpdateProfileComponent } from './account/update-profile/update-profile.component';
import { PreInfieldAdminComponent } from './attedance-register/pre-infield-admin/pre-infield-admin.component';

const routes: Routes = [
  { path: '', component: SplashComponent },  // default route loads SplashComponent
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'pre-infield-admin', component: PreInfieldAdminComponent }
  // other routes...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: false }) // <-- Here you set useHash option

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
