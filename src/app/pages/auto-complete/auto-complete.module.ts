import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutoCompletePageRoutingModule } from './auto-complete-routing.module';

import { AutoCompletePage } from './auto-complete.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutoCompletePageRoutingModule,
    ComponentsModule
  ],
  declarations: [AutoCompletePage]
})
export class AutoCompletePageModule {}
