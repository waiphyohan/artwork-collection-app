import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleOneRoutingModule } from './module-one-routing.module';
import { ModuleOneComponent } from './module-one.component';


@NgModule({
  declarations: [
    ModuleOneComponent
  ],
  imports: [
    CommonModule,
    ModuleOneRoutingModule
  ]
})
export class ModuleOneModule { }
