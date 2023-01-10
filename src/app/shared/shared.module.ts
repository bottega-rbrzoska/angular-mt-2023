import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './pipes/test.pipe';
import { VatPipe } from './pipes/vat.pipe';

@NgModule({
  declarations: [TestPipe, VatPipe],
  exports: [TestPipe, VatPipe],
  imports: [CommonModule]
})
export class SharedModule {}
