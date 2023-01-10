import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class TestService {
  data: string = 'someData';
  constructor() {
    console.log('test service init');
  }
}
