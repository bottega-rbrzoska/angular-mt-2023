import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TestService {
  data: string = 'someData';

  private _dataSubj = new BehaviorSubject<number>(0);
  data$: Observable<number> = this._dataSubj.asObservable();
  constructor(private _httpClient: HttpClient) {
    console.log('test service init');
  }

  getTestData() {
    this._httpClient.get('http://localhost:3000/test').subscribe((data) => console.log(data));
  }

  changeData(newvalue: number) {
    this._dataSubj.next(newvalue);
  }

  increment() {
    this._dataSubj.next(this._dataSubj.value + 1);
  }
}
