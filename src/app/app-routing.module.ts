import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from 'src/app/components/people/people.component';
import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';
import { PersonFormComponent } from 'src/app/components/person-form/person-form.component';
import { PageNotFoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { PersonResolver } from 'src/app/services/person.resolver';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent
  },
  {
    path: 'people/:id',
    component: PersonDetailsComponent,
    resolve: {
      person: PersonResolver
    }
  },
  {
    path: 'people/:id/edit',
    component: PersonFormComponent,
    resolve: {
      person: PersonResolver
    }
  },
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
