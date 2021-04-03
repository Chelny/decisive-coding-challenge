import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faAddressCard, faEdit, faTimes, faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PersonInterface } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { PersonFormComponent } from 'src/app/components/person-form/person-form.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public faAdd: IconDefinition = faUserPlus;
  public faView: IconDefinition = faAddressCard;
  public faEdit: IconDefinition = faEdit;
  public faClear: IconDefinition = faTimes;
  public headerColumns: string[] = ['name', 'registered', 'isActive', 'actions'];
  public dataSource: MatTableDataSource<PersonInterface> = new MatTableDataSource<PersonInterface>([]);
  @ViewChild('filterInput') public filterInput: ElementRef;

  constructor(private dialog: MatDialog,
    private personService: PersonService) {
    this.personService.getPeople();
  }

  public ngOnInit(): void {
    this.personService.people$.subscribe((people: PersonInterface[]) => {
      this.dataSource = new MatTableDataSource(people);

      // Filtering specific column
      this.dataSource.filterPredicate = function(data, filter: string): boolean {
        return data.name.toLowerCase().includes(filter);
      };
    });
  }

  public openAddPersonModal(): void {
    this.dialog.open(PersonFormComponent);
  }

  public applyFilter(event: Event): void {
    const filterValue: string = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public clearFilterValue(): void {
    const filterValue: string = this.filterInput.nativeElement.value = '';
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
