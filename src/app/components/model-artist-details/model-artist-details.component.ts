import { Component, Inject, OnInit } from '@angular/core';
import { ReleasesInformation } from 'src/app/models/releases-information';
import { TrackInformation } from '../../models/artist-details.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-model-artist-details',
  templateUrl: './model-artist-details.component.html',
  styleUrls: ['./model-artist-details.component.css'],
})
export class ModelArtistDetailsComponent implements OnInit  {
  dataModelAlbum: ReleasesInformation;
  dataModelTrack: TrackInformation;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ReleasesInformation | TrackInformation
  ) {


  }
  ngOnInit() {
    if (this.data.type === 'album' ) {
      this.dataModelAlbum = this.data as ReleasesInformation;

    } else if (this.data.type === 'track') {
      this.dataModelTrack = this.data as TrackInformation;
      console.log('TrackInformation' ,this.dataModelTrack)
    }
  }

}
