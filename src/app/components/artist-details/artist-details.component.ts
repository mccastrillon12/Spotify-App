import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import {
  ArtistTracks,
  TrackInformation,
} from 'src/app/models/artist-details.model';

import { ArtistInformation } from 'src/app/models/artist-information';
import {
  ReleaseAlbumInformation,
  ReleasesInformation,
} from 'src/app/models/releases-information';
import { ApiService } from 'src/app/shared/services/api.service';
import { SharedArtistService } from 'src/app/shared/services/shared-artist.service';
import { MatDialog } from '@angular/material/dialog';
import { ModelArtistDetailsComponent } from '../model-artist-details/model-artist-details.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css'],
})
export class ArtistDetailsComponent {
  id: string;
  artistDetails: ArtistInformation;
  albums: ReleasesInformation[];
  tracks: TrackInformation[];

  displayedColumns: string[] = ['name'];
  formAlbum = new FormGroup({
    name: new FormControl(''),
    year: new FormControl(''),
    url: new FormControl(''),
  });
  dataSource = new MatTableDataSource<ReleasesInformation>();


  constructor(
    private aRoute: ActivatedRoute,
    private spotify: ApiService,
    private sharedArtistService: SharedArtistService,
    private dialog: MatDialog
  ) {
    this.id = '';

    this.aRoute.queryParams
      .pipe(filter((params) => params['id']))
      .subscribe((params) => {
        this.id = params['id'];
      });

    this.getAlbumstDetails();

    this.artistDetails = this.sharedArtistService.artistInformation;

    this.getTracksDetails();
    console.log( this.dataSource.data)
  }

  getAlbumstDetails() {
    this.spotify
      .getArtistDetails(this.id)
      .subscribe((res: ReleaseAlbumInformation) => {
        this.albums = res.items.map(this.mapAlbumInformation);
      });
  }

  private mapAlbumInformation(album: ReleasesInformation): ReleasesInformation {
    const albumInformation: ReleasesInformation = {
      id: album.id,
      name: album.name,
      artists: album.artists,
      images: album.images,
      type: album.type,
      total_tracks: album.total_tracks,
      release_date: album.release_date,
    };
    return albumInformation;
  }

  getTracksDetails() {
    this.spotify.getArtistTracks(this.id).subscribe((res: ArtistTracks) => {
      this.tracks = res.tracks.map(this.mapTrackInformation);
    });
  }

  private mapTrackInformation(track: TrackInformation): TrackInformation {
    const trackInformation: TrackInformation = {
      name: track.name,
      type: track.type,
      track_number: track.track_number,
      album: track.album,
    };
    return trackInformation;
  }

  openDialog(dataModel: ReleasesInformation | TrackInformation) {
    this.dialog.open(ModelArtistDetailsComponent, {
      data: dataModel,
    });
  }

  send() {
    const addAlbum: ReleasesInformation = {
      name: this.formAlbum.value.name
    };
    this.dataSource.data = [...this.dataSource.data, {...addAlbum}];
    console.log(this.dataSource.data)
  }



}

