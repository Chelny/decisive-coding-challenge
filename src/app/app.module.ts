import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from 'src/app/app.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { PeopleComponent } from 'src/app/components/people/people.component';
import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';
import { PersonFormComponent } from 'src/app/components/person-form/person-form.component';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { TemplatesModule } from 'src/app/templates/templates.module';

import { ToastService } from 'src/app/services/toast.service';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PeopleComponent,
    PersonDetailsComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    TemplatesModule
  ],
  providers: [
    ToastService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
