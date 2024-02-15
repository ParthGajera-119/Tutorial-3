import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileRegistrationComponent } from './profile-registration/profile-registration.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'profile-registration', component: ProfileRegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: '/profile-registration', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
