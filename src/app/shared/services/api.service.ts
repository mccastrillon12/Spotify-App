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
        'Bearer BQBF_N9l7pWPkDck8eY20_f6jznlRsUM-l4JGFSIXDayhb1Luz6F6GnQ-4P9RRiT2XlaK8yrXXS222pXQizDnqI2TaofW9p0xExc8pbbhW-exDYgMZw',
    });
    return this.http.get(`${URL}/${query}`, { headers });
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=es&limit=20`
    )
  }
}
