import { Component, OnInit } from '@angular/core';
import { PersonInterface } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { faAddressCard, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public faEdit: IconDefinition = faEdit;
  public faView: IconDefinition = faAddressCard;
  public headerColumns: string[] = ['name', 'date-registered', 'active', 'actions'];
  public people: PersonInterface[] = [];

  constructor(private personService: PersonService) {
    this.personService.getPeople();
  }

  public ngOnInit(): void {
    this.personService.people$
      .subscribe((people: PersonInterface[]) => this.people = people);
  }

}
