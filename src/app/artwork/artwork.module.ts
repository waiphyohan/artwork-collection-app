import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtworkRoutingModule } from './artwork-routing.module';
import { ArtworkComponent } from './artwork.component';


@NgModule({
  declarations: [
    ArtworkComponent
  ],
  imports: [
    CommonModule,
    ArtworkRoutingModule
  ]
})
export class ArtworkModule { }
