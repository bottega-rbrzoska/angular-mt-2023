import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MULTI_PROVIDER_TOKEN } from '../tokens';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: MULTI_PROVIDER_TOKEN, useValue: { name: 'test1' }, multi: true },
    { provide: MULTI_PROVIDER_TOKEN, useValue: { name: 'test2' }, multi: true }
  ]
})
export class CoreModule {}
