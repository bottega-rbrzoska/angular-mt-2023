import { InjectionToken } from '@angular/core';

export const MULTI_PROVIDER_TOKEN = new InjectionToken<{ name: string }[]>('MULTI_PROVIDER_TOKEN');
