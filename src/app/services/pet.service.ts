import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Pet } from "../models/pet";


@Injectable({
  providedIn: 'root'
})
export class PetService {
  public readonly baseUrl = environment.backendUrl + '/api/pet';
  

  constructor(private http: HttpClient) {

   }

  ngOnInit() {
  }

  getPets() {
    const url = this.baseUrl + '/getPets';
    return this.http.get<Pet[]>(url);
  }

}