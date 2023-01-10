import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  data: string = 'someData';
  constructor(private _httpClient: HttpClient) {
    console.log('test service init');
  }

  getTestData() {
    this._httpClient.get('http://localhost:3000/test').subscribe((data) => console.log(data));
  }
}
