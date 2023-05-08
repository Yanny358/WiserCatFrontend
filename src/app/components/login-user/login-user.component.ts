import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginComponent {
  public readonly baseUrl = environment.backendUrl + '/api/user';

  username: string = "";
  password: string = "";


  userDtoOut: any = {
    id: 0,
    username: ""
  }

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    const url = this.baseUrl + '/login';
    this.http.post(url, {
      username: username,
      password: password
    }).subscribe({
      next: data => {
        this.userDtoOut = data;
        sessionStorage.setItem('userId', this.userDtoOut.id);
        console.log(this.userDtoOut);
      },
      error: error => {
        console.error('Error!', error);
      }
    });
  }
}
