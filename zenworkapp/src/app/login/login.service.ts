import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly getAdminUser;
  private readonly createAdminUser;
  private readonly updateAdminUser;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient) {
    this.getAdminUser = `${environment.rootPath}adminUser/getAdminUser`;
    this.createAdminUser = `${environment.rootPath}adminUser/createAdminUser`;
    this.updateAdminUser = `${environment.rootPath}adminUser/updateAdminUser`;
  }

  registerUser (userDetails) {
    return this.httpClient.post(this.createAdminUser, userDetails);
  }

  changeUserPassword (userDetails) {
    return this.httpClient.put(this.updateAdminUser, userDetails);
  }

  getUserDetails ({email, password}) {
    return this.httpClient.get(`${this.getAdminUser}?email=${email}&pwd=${password}`);
  }

}
