import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { PersonInterface } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';
import { AlertDialogComponent, matDialogAction } from 'src/app/templates/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  public faDelete: IconDefinition = faTrash;
  public person: PersonInterface = null;
  public lastViewedPage: string = '';
  public personForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private dialog: MatDialog,
    private personService: PersonService) {
    this.person = this.route.snapshot.data.person as PersonInterface || <PersonInterface>{};
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public savePerson(): void {
    if (this.personForm.valid) {
      const data: PersonInterface = this.personForm.getRawValue() as PersonInterface;
      
      if (this.person.id) {
        this.personService.updatePerson(this.person.id, {...this.person, ...data})
          .subscribe(() => this.router.navigate(['/people', this.person.id]));
      } else {
        this.personService.createPerson(data).subscribe((person: PersonInterface) => {
          this.router.navigate(['/people', person.id]);
          this.closeDialog();
        });
      }
    }
  }

  public deletePerson(person: PersonInterface): void {
    const dialogRef: MatDialogRef<AlertDialogComponent, any> = this.dialog
      .open(AlertDialogComponent, {
        data: {
          title: 'Delete Person',
          message: `Would you like to remove <b>${person.name}</b> from the records?`
        }
      });

    dialogRef.afterClosed().subscribe((action: matDialogAction) => {
      if (action === 'confirm') {
        this.personService.deletePerson(person)
          .subscribe(() => this.router.navigate(['/people']));
      }
    });
  }

  public closeDialog(): void {
    this.dialog.closeAll();
  }

  private createForm(): void {
    this.personForm = this.fb.group({
      name: this.fb.control(this.person.name, [
        Validators.required,
        Validators.maxLength(70)
      ]),
      isActive: this.fb.control(this.person.isActive, [
        Validators.required
      ]),
      age: this.fb.control(this.person.age, [
        Validators.required,
        Validators.min(18),
        Validators.max(110)
      ]),
      about: this.fb.control(this.person.about, [
        Validators.maxLength(250)
      ]),
      gender: this.fb.control(this.person.gender, [
        Validators.required
      ])
    });
  }

}
