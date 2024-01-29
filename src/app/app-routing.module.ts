import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';

const routes: Routes = [
  {
    path: '',
    component: SearcherComponent,
  },
  {
    path:'artist',
    component: ArtistDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
