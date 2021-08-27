import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfiniteScrollPageRoutingModule } from './infinite-scroll-routing.module';

import { InfiniteScrollPage } from './infinite-scroll.page';
// Importamos el modulo de Componentes
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfiniteScrollPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfiniteScrollPage]
})
export class InfiniteScrollPageModule {}
