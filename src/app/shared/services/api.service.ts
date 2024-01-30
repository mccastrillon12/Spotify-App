import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'https://api.spotify.com/v1';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getQuery(query: string) {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCoswd9j8msjqAtQxnazEEWJ9eVWww3e6Wzeba60QLUSxW5DJxNr_n_SFHubb8bbQZAyK6Tr_yfvYuEZpnmZrayiQyQuzJDVQL87jFXLlAVzWY-snI',
    });
    return this.http.get(`${URL}/${query}`, { headers });
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=es&limit=20`
    )
  }

  getNewReleases(){
    return this.getQuery(
      `browse/new-releases?limit=50&offset=8`
    )
  }

  getArtistDetails(id:string){
    return this.getQuery(
      `artists/${id}/albums?limit=10`
    )
  }

  getArtistTracks(id:string){
    return this.getQuery(
      `artists/${id}/top-tracks?market=es`
    )
  }

}

