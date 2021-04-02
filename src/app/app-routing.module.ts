import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from 'src/app/components/people/people.component';
import { PersonDetailsComponent } from 'src/app/components/person-details/person-details.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'people',
    component: PeopleComponent,
    children: [
      {
        path: ':id/edit',
        component: PersonDetailsComponent
      }
    ]
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
