import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelsComponent } from './pages/models/models.component'
import { ColorsComponent } from './pages/colors/colors.component'
import { AccessoriesComponent } from './pages/accessories/accessories.component'
import { SummaryComponent } from './pages/summary/summary.component'

const routes: Routes = [
  { path: 'models', component: ModelsComponent},
  { path: 'colors', component: ColorsComponent},
  { path: 'accessories', component: AccessoriesComponent},
  { path: 'summary', component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
