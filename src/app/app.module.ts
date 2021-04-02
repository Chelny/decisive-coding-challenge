import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PeopleComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatTableModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
