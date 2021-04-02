import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonInterface } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  public personForm: FormGroup;
  public person: PersonInterface = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private personService: PersonService) {
    this.person = this.route.snapshot.data.person as PersonInterface;
  }

  public ngOnInit(): void {
    this.createForm();
  }

  public savePerson(): void {
    if (this.personForm.valid) {
      const data: PersonInterface = this.personForm.getRawValue() as PersonInterface;
      this.personService.updatePerson(this.person.id, {...this.person, ...data})
        .subscribe(() => this.router.navigate(['/people', this.person.id]));
    }
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
