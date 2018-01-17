import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ViserDemoComponent} from './viser-demo.component';

const heroesRoutes: Routes = [
  {path: '', component: ViserDemoComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViserDemoRouting {

}
