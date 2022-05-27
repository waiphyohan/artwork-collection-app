import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleTwoRoutingModule } from './module-two-routing.module';
import { ModuleTwoComponent } from './module-two.component';


@NgModule({
  declarations: [
    ModuleTwoComponent
  ],
  imports: [
    CommonModule,
    ModuleTwoRoutingModule
  ]
})
export class ModuleTwoModule { }
