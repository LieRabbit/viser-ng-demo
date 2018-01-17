import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HelloComponent} from './hello/hello.component';

const heroesRoutes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'viser', loadChildren: 'app/viser-demo/viser-demo.module#ViserDemoModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
