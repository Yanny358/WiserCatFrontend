import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { LoginComponent } from './components/login-user/login-user.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'pets', component: PetsListComponent},
  {path: 'newPet', component: AddPetComponent},
  {path: 'editPet', component: EditPetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
