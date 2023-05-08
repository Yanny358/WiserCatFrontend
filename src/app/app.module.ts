import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PetsListComponent } from './components/pets-list/pets-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login-user/login-user.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';

@NgModule({
  declarations: [
    AppComponent,
    PetsListComponent,
    AddPetComponent,
    LoginComponent,
    EditPetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
