import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormBuilder } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { ForgotPaswordComponent } from './components/forgot-pasword/forgot-pasword.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ArchiveComponent } from './components/archive/archive/archive.component';
import { CreateNoteComponent } from './components/create-note/create-note/create-note.component';
import { DisplayComponent } from './components/display/display/display.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes/get-all-notes.component';
import { IconsComponent } from './components/icons/icons/icons.component';
import { TrashComponent } from './components/trash/trash/trash.component';
import {MatCardModule} from '@angular/material/card';
import { AddNoteComponent } from './components/add-note/add-note/add-note.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import { UpdateComponent } from './components/update/update/update.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {Routes, RouterModule } from '@angular/router'; 
import{ MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
   AppComponent,
   ForgotPaswordComponent,
   ResetPasswordComponent,
   RegisterComponent,
   LoginComponent,
   DashboardComponent,
   ArchiveComponent,
   CreateNoteComponent,
   DisplayComponent,
   GetAllNotesComponent,
   IconsComponent,
   TrashComponent,
   AddNoteComponent,
   UpdateComponent,
 
 


  ],
  imports: [
  
     FormsModule,
     MatIconModule,
     MatListModule,
     MatToolbarModule, 
     MatInputModule,
     MatFormFieldModule,
     BrowserModule,
     AppRoutingModule,
     BrowserAnimationsModule,
     FlexLayoutModule,
     ReactiveFormsModule,
     HttpClientModule,
     MatSidenavModule,
     MatCardModule,
     MatDialogModule,
     MatMenuModule,
     MatSnackBarModule,
     MatTooltipModule
   
     

    //  FormBuilder 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
