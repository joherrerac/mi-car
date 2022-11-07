import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListReplacementPageRoutingModule } from './list-replacement-routing.module';

import { ListReplacementPage } from './list-replacement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListReplacementPageRoutingModule
  ],
  declarations: [ListReplacementPage]
})
export class ListReplacementPageModule {}
