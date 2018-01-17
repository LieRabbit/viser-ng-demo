import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViserDemoComponent } from './viser-demo.component';
import {ViserDemoRouting} from './viser-demo-routing';
import { ViserModule } from 'viser-ng';

@NgModule({
  imports: [
    CommonModule,ViserDemoRouting,ViserModule
  ],
  declarations: [ViserDemoComponent]
})
export class ViserDemoModule { }
