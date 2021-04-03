import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PersonInterface } from 'src/app/models/person.interface';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {
  public editIcon: IconDefinition = faEdit;
  public person: PersonInterface = null;
  public lastViewedPage: string = '';
  public personalInfoPanelExpanded: boolean = true;
  public companyInfoPanelExpanded: boolean = false;
  public miscInfoPanelExpanded: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.person = this.route.snapshot.data.person as PersonInterface;
  }

}
