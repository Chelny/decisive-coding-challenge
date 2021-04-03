import { Component, OnInit } from '@angular/core';
import { PersonInterface } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { faAddressCard, faEdit, faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PersonFormComponent } from 'src/app/components/person-form/person-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public faAdd: IconDefinition = faUserPlus;
  public faView: IconDefinition = faAddressCard;
  public faEdit: IconDefinition = faEdit;
  public headerColumns: string[] = ['name', 'date-registered', 'active', 'actions'];
  public people: PersonInterface[] = [];

  constructor(public dialog: MatDialog,
    private personService: PersonService) {
    this.personService.getPeople();
  }

  public ngOnInit(): void {
    this.personService.people$
      .subscribe((people: PersonInterface[]) => this.people = people);
  }

  public openAddPersonModal(): void {
    const dialogRef = this.dialog.open(PersonFormComponent);

    // TODO: close dialog after successful POST
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
