import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: 'test', loadChildren: () => import('./test/test.module').then((m) => m.TestModule), canActivate: [AuthGuard] },
  { path: 'products', loadChildren: () => import('./products/products.module').then((m) => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
