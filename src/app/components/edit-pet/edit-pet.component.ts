import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Pet } from 'src/app/models/PetDtoOut';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent {
  public readonly baseUrl = environment.backendUrl + '/api/pet';

  types: any;
  colors: any;
  countries: any;
  petName: string = "";
  petCode: string = "";
  petType: number = 0;
  petColor: number = 0;
  petCountry: number = 0;
  petData?: Pet;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getColors();
    this.getCountries();
    this.getTypes();
    this.getSinglePet();
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

  code: any = sessionStorage.getItem('singlePetCode')

  getSinglePet() {
    this.httpClient.get(this.baseUrl + '/singlePet?petCode=' + this.code).subscribe(
      {
        next: (data) => {
          this.petData = data as Pet;
          this.petName = this.petData.name;
          this.petCode = this.petData.code;
          this.petType = this.petData.typeId;
          this.petColor = this.petData.colorId
          this.petCountry = this.petData.countryId
          console.log(this.petData)
        }
      }
    )
  }

  editPet() {
    this.httpClient.put(this.baseUrl + '/updatePet', {
      petColorId: this.petColor,
      petTypeId: this.petType,
      petCountryId: this.petCountry,
      name: this.petName,
      code: this.petCode
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
