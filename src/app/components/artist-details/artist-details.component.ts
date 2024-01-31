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
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

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

  displayedColumns: string[] = ['name','year'];
  displayedColumnsTracks: string[] = ['name','album', 'trackInAlbum'];
  formAlbum = new FormGroup({
    name: new FormControl(''),
    year: new FormControl(''),
    url: new FormControl(''),
  });
  dataSource = new MatTableDataSource<ReleasesInformation>();
  dataSourceTracks = new MatTableDataSource<ReleasesInformation>();


  constructor(
    private aRoute: ActivatedRoute,
    private spotify: ApiService,
    private sharedArtistService: SharedArtistService,
    private dialog: MatDialog,
    private localStorageService :LocalStorageService
  ) {
    this.id = '';

    this.aRoute.queryParams
      .pipe(filter((params) => params['id']))
      .subscribe((params) => {
        this.id = params['id'];
      });

      const validateLocalStorageInformation = this.localStorageService.getDataFromSessionStorage('ArtistInformation')

      if(!validateLocalStorageInformation){
        this.localStorageService.saveLocalStorage('ArtistInformation',JSON.stringify(this.sharedArtistService.artistInformation));
        this.artistDetails = this.sharedArtistService.artistInformation;
      }

      if(validateLocalStorageInformation){
        this.artistDetails = validateLocalStorageInformation;
      }



    this.getAlbumstDetails();
    this.getTracksDetails();
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
      this.dataSourceTracks.data = this.tracks;
    });
  }

  private mapTrackInformation(track: TrackInformation): TrackInformation {
    const trackInformation: TrackInformation = {
      name: track.name,
      type: track.type,
      track_number: track.track_number,
      album: track.album,
      artists: track.album.artists

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
      name: this.formAlbum.value.name,
      release_date:parseInt(this.formAlbum.value.year),
      images: [{url:this.formAlbum.value.url}]
    };
    this.dataSource.data = [...this.dataSource.data, {...addAlbum}];


  }
  sendAlbum(album: ReleasesInformation){

    this.dataSource.data = [...this.dataSource.data, {...album}];
  }



}

