import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PetDtoIn } from 'src/app/models/petDtoIn';
import { PetService } from 'src/app/services/pet.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.css']
})
export class AddPetComponent implements OnInit {
  public readonly baseUrl = environment.backendUrl + '/api/pet';

  types: any;
  colors: any;
  countries: any;
  petName: string = "";
  petCode: string = "";
  petType: number = 0;
  petColor: number = 0;
  petCountry: number = 0;

  constructor(private petService: PetService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getColors();
    this.getCountries();
    this.getTypes();
  }

  getColors() {
    const url = this.baseUrl + '/getColors';
    this.httpClient.get(url).subscribe(response => {
      this.colors = response;
    });
  }

  getCountries() {
    const url = this.baseUrl + '/getCountries';
    this.httpClient.get(url).subscribe(response => {
      this.countries = response;
    });
  }

  getTypes() {
    const url = this.baseUrl + '/getTypes';
    this.httpClient.get(url).subscribe(response => {
      this.types = response;
    });
  }

  savePet() {
    this.httpClient.post<PetDtoIn>(this.petService.baseUrl + '/savePet', {
      code: this.petCode,
      name: this.petName,
      petColorId: this.petColor,
      petCountryId: this.petCountry,
      petTypeId: this.petType,

    }).subscribe({
      next: () => {
        console.log(this.petCode, this.petName, this.petColor, this.petCountry, this.petType);
      },
      error: err => {
        console.log('Error', err);
      }
    });
  }

}
