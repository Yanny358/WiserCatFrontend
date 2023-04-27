import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsListComponent } from './components/pets-list/pets-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'pets', pathMatch: 'full'},
  {path: 'pets', component: PetsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
