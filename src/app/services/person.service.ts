import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PersonInterface } from 'src/app/models/person.interface';
import { ToastService } from 'src/app/services/toast.service';

const API_URL = 'http://localhost:4500';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private people: BehaviorSubject<PersonInterface[]> = new BehaviorSubject<PersonInterface[]>([]);
  public people$: Observable<PersonInterface[]> = this.people.asObservable();

  private peopleCache: Map<string, PersonInterface[]> = new Map<string, PersonInterface[]>();
  private personCache: Map<string, PersonInterface> = new Map<string, PersonInterface>();

  constructor(private http: HttpClient,
    private toastService: ToastService) { }

  public getPeople(): void {
    const URL: string = `${API_URL}/people`;
    const cachedPeople: PersonInterface[] = this.peopleCache.get(URL);
    let people: Observable<PersonInterface[]> = cachedPeople ? of(cachedPeople) : this.http.get<PersonInterface[]>(URL);

    people.pipe(
      map((people: PersonInterface[]) => {
        this.people.next(people);
        this.peopleCache.set(URL, people);
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err.message);
        return of(<PersonInterface[]>{});
      })
    ).subscribe();
  }

  public createPerson(person: PersonInterface): Observable<PersonInterface> {
    const URL: string = `${API_URL}/people`;

    return this.http.post<PersonInterface>(URL, person).pipe(
      map((person: PersonInterface) => {
        this.toastService.showToast(`${person.name} has been successfully created!`);
        this.personCache.set(`${URL}/${person.id}`, person);
        return person;
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err.message);
        return of(<PersonInterface>{});
      })
    );
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
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err.message);
        return of(<PersonInterface>{});
      })
    );
  }

  public updatePerson(id: string, person: PersonInterface): Observable<PersonInterface> {
    const URL: string = `${API_URL}/people/${id}`;

    return this.http.put<PersonInterface>(URL, person).pipe(
      map((person: PersonInterface) => {
        this.toastService.showToast(`${person.name}\'s info has been successfully updated!`);
        this.personCache.set(URL, person);
        return person;
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err.message);
        return of(<PersonInterface>{});
      })
    );
  }

  public deletePerson(person: PersonInterface): Observable<PersonInterface> {
    const URL: string = `${API_URL}/people/${person.id}`;

    return this.http.delete<PersonInterface>(URL).pipe(
      map(() => {
        this.toastService.showToast(`${person.name} has been successfully deleted!`);
        this.personCache.delete(URL);
        return <PersonInterface>{};
      }),
      catchError((err: HttpErrorResponse) => {
        console.error(err.message);
        return of(<PersonInterface>{});
      })
    );
  }

}
