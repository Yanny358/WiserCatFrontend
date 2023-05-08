import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/models/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets$: Observable<Pet[]> | undefined
      
    constructor(
       private petService: PetService) {
      
     }
  
    ngOnInit(): void {
      this.pets$ = this.petService.getPets();
    }
}
