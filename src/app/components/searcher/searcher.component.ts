import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
})
export class SearcherComponent implements AfterViewInit {
  artistNames: any = [];
  displayedColumns: string[] = ['name'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  artist: any = [];

  constructor(private spotify: ApiService) {}

  search(term: string) {
    this.spotify.getArtist(term).subscribe((res) => {
      this.artist = res;
      this.artistNames = this.artist.artists.items.map((item: any) => ({
        name: item.name,
        image: item.images.length > 0 ? item.images[2].url : "https://static.vecteezy.com/system/resources/thumbnails/015/082/032/small/vinyl-disc-with-blank-cover-template-mockup-png.png" ,
      }));
      this.dataSource.data = this.artistNames;
      console.log(this.artist)
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
}
