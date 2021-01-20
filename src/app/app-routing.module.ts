import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracklistComponent } from './tracklist/tracklist.component';

const routes: Routes = [
  { path: 'tracklist/:phase', component: TracklistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
