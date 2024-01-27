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
        'Bearer BQAXenOo0cV1FcTtmfwfa-SFJL7BeEgoQElzXFqdTNOzCbqx3To9xw6zN5-KZahCEVTTVUKGUdoZWY4z9qcVGMkK_NZMWtxl_7ZdgcTSWWPjljOaCxk',
    });
    return this.http.get(`${URL}/${query}`, { headers });
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=es&limit=20`
    )
  }
}
