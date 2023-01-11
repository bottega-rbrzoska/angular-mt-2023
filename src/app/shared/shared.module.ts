import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './pipes/test.pipe';
import { VatPipe } from './pipes/vat.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { PermissionsDirective } from './directives/permissions.directive';

@NgModule({
  declarations: [TestPipe, VatPipe, HighlightDirective, PermissionsDirective],
  exports: [TestPipe, VatPipe, HighlightDirective, PermissionsDirective],
  imports: [CommonModule]
})
export class SharedModule {}
