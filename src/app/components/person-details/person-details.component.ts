import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonInterface } from 'src/app/models/person.interface';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
  public person: PersonInterface = null;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.person = this.route.snapshot.data as PersonInterface;
  }

  public ngOnInit(): void {
    // this.personService.person$
    //   .subscribe((person: PersonInterface) => console.log(person));
  }

  public backToPeopleList(): void {
    this.router.navigate(['/people']);
  }

}
