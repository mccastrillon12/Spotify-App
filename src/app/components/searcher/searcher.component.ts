import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  ArtistInformation,
  ArtistResponse,
} from 'src/app/models/artist-information';
import { ApiService } from 'src/app/shared/services/api.service';

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

  constructor(private spotify: ApiService) {}

  search(term: string) {
    if (term === '') {
      this.dataSource.data = [];
      return;
    }
    this.spotify.getArtist(term).subscribe((res: ArtistResponse) => {
      this.artistList = res.artists.items.map(this.mapArtistInformation);
      this.dataSource.data = this.artistList;
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
}
