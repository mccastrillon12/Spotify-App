import { Component } from '@angular/core';
import {
  ReleaseAlbumInformation,
  ReleaseResponse,
  ReleasesInformation,
} from 'src/app/models/releases-information';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css'],
})
export class NewReleasesComponent {
  newReleases: ReleasesInformation[];
  constructor(private spotify: ApiService) {
    this.getNewReleases();
  }

  getNewReleases() {
    this.spotify.getNewReleases().subscribe((res: ReleaseResponse) => {
      this.newReleases = res.albums.items.map(this.mapAlbumInformation);
      console.log(res)
    });
  }

  private mapAlbumInformation(album: ReleasesInformation):ReleasesInformation {
    const albumInformation: ReleasesInformation = {
      id: album.id,
      name: album.name,
      artists: album.artists,
      images: album.images,
      type: album.type

    };
    return albumInformation;
  }

}
