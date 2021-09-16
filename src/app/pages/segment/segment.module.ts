import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegmentPageRoutingModule } from './segment-routing.module';

import { SegmentPage } from './segment.page';
// Importamos el modulo de Componentes
import { ComponentsModule } from '../../components/components.module';
// Importamos el modulo de Pipe's
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegmentPageRoutingModule,
    ComponentsModule,
    PipesModule
  ],
  declarations: [SegmentPage]
})
export class SegmentPageModule {}
