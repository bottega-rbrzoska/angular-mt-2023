import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TestService } from './test.service';

@Injectable()
export class TestResolver implements Resolve<boolean> {
  constructor(private testService: TestService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    console.log(id);
    return this.testService.getTestData();
  }
}
