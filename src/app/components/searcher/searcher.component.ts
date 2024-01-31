import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import {
  ArtistInformation,
  ArtistResponse,
} from 'src/app/models/artist-information';

import { ApiService } from 'src/app/shared/services/api.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { SharedArtistService } from 'src/app/shared/services/shared-artist.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements AfterViewInit {
  artistList: ArtistInformation[];
  displayedColumns: string[] = ['name', 'followers', 'popularity'];
  dataSource = new MatTableDataSource<ArtistInformation>();
  searchTracking: string = '';
  isDataFound: boolean = true;
  isLoading: boolean = false;

  constructor(
    private spotify: ApiService,
    private router: Router,
    private sharedArtistService: SharedArtistService,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.deleteDataFromSessionStorage('ArtistInformation');
  }

  search(term: string) {
    if (term === '') {
      this.dataSource.data = [];
      return;
    }
    this.isLoading = true;
    this.spotify.getArtist(term).subscribe((res: ArtistResponse) => {
      this.artistList = res.artists.items.map(this.mapArtistInformation);
      this.dataSource.data = this.artistList;
      this.isLoading = false;
      this.artistList.length > 0
        ? (this.isDataFound = true)
        : (this.isDataFound = false);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  private mapArtistInformation(artist: ArtistInformation) {
    const artistInformation: ArtistInformation = {
      id: artist.id,
      followers: { ...artist.followers },
      genres: artist.genres,
      name: artist.name,
      popularity: artist.popularity,
      images:
        artist.images.length > 0
          ? artist.images
          : [
              {
                url: 'https://static.vecteezy.com/system/resources/thumbnails/015/082/032/small/vinyl-disc-with-blank-cover-template-mockup-png.png',
              },
            ],
    };
    return artistInformation;
  }

  sendId(artistInformation: ArtistInformation) {
    this.sharedArtistService.sendArtistInformation(artistInformation);
    this.router.navigate(['artist'], {
      queryParams: { id: artistInformation.id },
    });
  }
}
