import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Directive({
  selector: '[mtPermissions]'
})
export class PermissionsDirective {
  constructor(private _auth: AuthService, private _template: TemplateRef<any>, private _vcr: ViewContainerRef) {
    _auth.isLoggedIn$.subscribe((isLoggedIn) => {
      _vcr.clear();
      if (isLoggedIn) {
        _vcr.createEmbeddedView(_template);
      }
    });
  }
}
