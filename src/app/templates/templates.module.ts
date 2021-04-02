import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GoToLinkButtonComponent } from 'src/app/templates/go-to-link-button/go-to-link-button.component';

@NgModule({
  declarations: [
    GoToLinkButtonComponent
  ],
  imports: [
    FontAwesomeModule
  ],
  exports: [
    GoToLinkButtonComponent
  ]
})
export class TemplatesModule { }
