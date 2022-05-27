import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuleOneComponent } from './module-one.component';

const routes: Routes = [{ path: '', component: ModuleOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleOneRoutingModule { }
