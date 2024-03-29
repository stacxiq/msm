import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TablesPage } from './tables.page';
import { PinchZoomModule } from 'ngx-pinch-zoom';

const routes: Routes = [
  {
    path: '',
    component: TablesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinchZoomModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TablesPage]
})
export class TablesPageModule {}
