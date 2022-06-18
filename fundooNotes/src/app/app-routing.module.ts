import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPaswordComponent } from './components/forgot-pasword/forgot-pasword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes/get-all-notes.component';
import { ArchiveComponent } from './components/archive/archive/archive.component';
import { TrashComponent } from './components/trash/trash/trash.component';


const routes: Routes = [
  {path:`register`,component:RegisterComponent},
  {path:`login`,component:LoginComponent},
  {path:`forgetpassword`,component:ForgotPaswordComponent},
  {path:`ResetPassword`,component:ResetPasswordComponent},
  {path:`dashboard`,component:DashboardComponent,
  children:[
    {path:`notes`,component:GetAllNotesComponent},
    {path:`Archive`,component:ArchiveComponent},
    {path:`Trash`,component:TrashComponent}, 
  ]
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
