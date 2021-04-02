import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PersonInterface } from 'src/app/models/person.interface';

const API_URL = 'http://localhost:4500';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: BehaviorSubject<PersonInterface[]> = new BehaviorSubject<PersonInterface[]>([]);
  public people$: Observable<PersonInterface[]> = this.people.asObservable();

  private peopleCache: Map<string, PersonInterface[]> = new Map<string, PersonInterface[]>();
  private personCache: Map<string, PersonInterface> = new Map<string, PersonInterface>();

  constructor(private http: HttpClient) { }

  public getPeople(): void {
    const URL: string = `${API_URL}/people`;
    const cachedPeople: PersonInterface[] = this.peopleCache.get(URL);
    let people: Observable<PersonInterface[]> = cachedPeople ? of(cachedPeople) : this.http.get<PersonInterface[]>(URL);

    people.pipe(
      map((people: PersonInterface[]) => {
        this.people.next(people);
        this.peopleCache.set(URL, people);
      })
    ).subscribe();
  }

  public getPerson(id: string): Observable<PersonInterface> {
    const URL: string = `${API_URL}/people/${id}`;
    const cachedPerson: PersonInterface = this.personCache.get(URL);

    if (cachedPerson) {
      return of(cachedPerson);
    }

    return this.http.get<PersonInterface>(URL).pipe(
      map((person: PersonInterface) => {
        this.personCache.set(URL, person);
        return person;
      })
    );
  }
}
