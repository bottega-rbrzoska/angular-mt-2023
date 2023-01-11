import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MULTI_PROVIDER_TOKEN } from '../tokens';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: MULTI_PROVIDER_TOKEN, useValue: { name: 'test1' }, multi: true },
    { provide: MULTI_PROVIDER_TOKEN, useValue: { name: 'test2' }, multi: true }
  ]
})
export class CoreModule {}
