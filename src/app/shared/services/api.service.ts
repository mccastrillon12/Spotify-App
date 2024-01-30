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
        'Bearer BQArIaIc_TDjS8CA4sTXx4N_2WQXvj6CtGwCwCIPLgIOZrNzMvCQcm8LqwBJWrDgHkqj6CK-6dwUENvGtyto5-XqaoyGWa4fE9MMwmPdPJjs5yjfqIQ',
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

