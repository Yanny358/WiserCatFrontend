import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  public readonly baseUrl = environment.backendUrl + '/api/pet';

  petCode: any;
  userId = sessionStorage.getItem('userId');
  pets: any;
  direction: number = 1;
  sortField: string = "";
      
    constructor(
       private httpClient: HttpClient) {
      
     }
  
    ngOnInit(): void {
      this.getUserPets();
    }

    getUserPets() {
      this.httpClient.get(this.baseUrl + '/userPet?userId=' + this.userId).subscribe(
        res => {
          this.pets = res;
        }
      );
    }

    editPet(petCode: string) {
      sessionStorage.setItem('singlePetCode', petCode);
    }

    order(field: string) {
      if (this.sortField !== field) {
        this.direction = 1;
      }
      if (this.sortField === field) {
        if (this.direction === 1) {
          this.direction = -1;
        } else if (this.direction === -1) {
          this.direction = 1;
        }
      }
      this.sortField = field;
  
      this.pets = this.pets.sort((a: any, b: any) => {
        if (a[this.sortField] < b[this.sortField]) {
          return this.direction * -1 ;
        }
        if (a[this.sortField] > b[this.sortField]) {
          return this.direction;
        }
        return 0;
      });
  
    }
}
