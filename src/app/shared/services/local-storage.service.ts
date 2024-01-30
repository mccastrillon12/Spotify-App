import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveLocalStorage(key: string, value: string) {
    localStorage.setItem(`${key}`, value);
  }

  getDataFromSessionStorage(searchingKey: string) {
    const localStorageData = localStorage.getItem(`${searchingKey}`)
    return localStorageData !== undefined && localStorageData !== null ?JSON.parse(localStorageData):localStorageData
  }
  deleteDataFromSessionStorage(searchingKey: string) {
    localStorage.removeItem(`${searchingKey}`)
  }
}
