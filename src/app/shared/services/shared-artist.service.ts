import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ArtistInformation } from 'src/app/models/artist-information';


@Injectable({
  providedIn: 'root'
})
export class SharedArtistService {

  artistInformation : ArtistInformation;

  sendArtistInformationSubject = new Subject<ArtistInformation>();
  sendArtistInformationObservable = this.sendArtistInformationSubject.asObservable();

  constructor() { }


  sendArtistInformation(artistInformationsended :ArtistInformation ){
    this.artistInformation = artistInformationsended;
    this.sendArtistInformationSubject.next(artistInformationsended)
  }
}
