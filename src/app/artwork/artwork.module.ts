import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NxHeadlineModule } from '@aposin/ng-aquila/headline'
import { NxFormfieldModule } from '@aposin/ng-aquila/formfield';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxDropdownModule } from '@aposin/ng-aquila/dropdown';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxCardModule } from '@aposin/ng-aquila/card';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxPaginationModule } from '@aposin/ng-aquila/pagination';
import { NxSpinnerModule } from '@aposin/ng-aquila/spinner';
import { NxErrorModule } from '@aposin/ng-aquila/base';

import { ArtworkRoutingModule } from './artwork-routing.module';
import { ArtworkComponent } from './artwork.component';
import { ArtworkHeaderComponent } from './artwork-header/artwork-header.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { ArtworkFormComponent } from './artwork-form/artwork-form.component';


@NgModule({
  declarations: [
    ArtworkComponent,
    ArtworkHeaderComponent,
    ArtworkListComponent,
    ArtworkCardComponent,
    ArtworkFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArtworkRoutingModule,
    NxHeadlineModule,
    NxFormfieldModule,
    NxLinkModule,
    NxDropdownModule,
    NxGridModule,
    NxCardModule,
    NxImageModule,
    NxPaginationModule,
    NxSpinnerModule,
    NxErrorModule,
  ]
})
export class ArtworkModule { }
