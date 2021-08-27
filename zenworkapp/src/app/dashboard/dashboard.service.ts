import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly _getStore;
  private readonly _addStore;
  private readonly _updateStore;
  private readonly _getStoresByUser;

  constructor(
    private readonly router: Router,
    private readonly httpClient: HttpClient) {
    this._getStore = `${environment.rootPath}store/getStore`;
    this._addStore = `${environment.rootPath}store/addStore`;
    this._updateStore = `${environment.rootPath}store/updateStore`;
    this._getStoresByUser = `${environment.rootPath}store/getStoresByUser`;
  }

  addUser (store) {
    return this.httpClient.post(this._getStore, store);
  }

  updateStore (store) {
    return this.httpClient.put(this._addStore, store);
  }

  getStore (id) {
    return this.httpClient.get(`${this._updateStore}?storeId=${id}`);
  }
 
  getStoresByUser (userId) {
    return this.httpClient.get(`${this._getStoresByUser}?userId=${userId}`);
  }

}
