import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getToken() {
    return localStorage.getItem('token')
  }

  setToken(data) {
    localStorage.setItem('token', data)
  }

  clearToken() {
    localStorage.removeItem('token')
  }

  clearLocalStorage() {
    localStorage.clear()
  }

  isActive() {
    return !!localStorage.getItem('token')
  }
}
