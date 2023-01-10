import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPipe } from './test.pipe';
import { VatPipe } from './vat.pipe';

@NgModule({
  declarations: [TestPipe, VatPipe],
  exports: [TestPipe, VatPipe],
  imports: [CommonModule]
})
export class SharedModule {}
