import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, fromEvent, map, Observable, of, Subject, tap } from 'rxjs';

@Component({
  selector: 'mt-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {
  @ViewChild('myInput', { static: true }) myInput!: ElementRef;
  obs$!: Observable<number>;
  private _dataSubj = new Subject();
  data$ = this._dataSubj.asObservable();
  constructor() {
    // const promise = new Promise((resolve, reject) => {
    //   reject('Error');
    //   setTimeout(() => resolve('hello!'), 2000);
    // });
    // promise.then(console.log).catch(console.error);
    console.log(this.myInput);
    const obs = new Observable<number>((obs) => {
      obs.next(2);
      obs.error('ERR');
      obs.next(3);
      obs.complete();
    });
    console.log(obs);

    of(1, 2, 3, 4)
      .pipe(
        filter((v) => v > 2),
        map((v) => v * 2)
      )
      .subscribe(console.log);

    const subj = new Subject();

    subj.next('zero');
    subj.subscribe(console.log);
    subj.next('jeden');
    subj.error('Error');

    const bSubj = new BehaviorSubject('init value');

    bSubj.subscribe(console.info);
    bSubj.next('b1');
    bSubj.next('b2');
    bSubj.next('b3');
    bSubj.subscribe(console.log);

    bSubj.next('b4');
    console.log(bSubj.value);
  }

  ngOnInit(): void {
    fromEvent<InputEvent>(this.myInput.nativeElement, 'input').pipe(
      tap((v) => console.log(v)),
      map((v: InputEvent) => v.data),
      tap((v) => console.log(v))
    );
    console.log(this.myInput);
  }
}
