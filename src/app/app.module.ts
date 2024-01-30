import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { ErrorComponent } from './components/error/error.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { ModelArtistDetailsComponent } from './components/model-artist-details/model-artist-details.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './shared/components/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    SearcherComponent,
    NewReleasesComponent,
    ErrorComponent,
    ArtistDetailsComponent,
    ModelArtistDetailsComponent,
    StarRatingComponent,
    LoadingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
