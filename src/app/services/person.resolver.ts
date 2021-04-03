import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { PersonInterface } from 'src/app/models/person.interface';
import { PersonService } from 'src/app/services/person.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<PersonInterface> {

  constructor(private router: Router, private personService: PersonService) {}

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.personService.getPerson(route.paramMap.get('id'))
      .pipe(catchError(() => {
        this.router.navigate(['/']);
        return EMPTY;
      }));
  }
}
