import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

import { GoToLinkButtonComponent } from 'src/app/templates/go-to-link-button/go-to-link-button.component';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    GoToLinkButtonComponent,
    AlertDialogComponent
  ],
  imports: [
    FontAwesomeModule,
    MatButtonModule
  ],
  exports: [
    GoToLinkButtonComponent
  ]
})
export class TemplatesModule { }
