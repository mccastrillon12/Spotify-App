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
        'Bearer BQCxNjvcHaaLJQIC6MN4H4oNSZVCvMNsQ68C_WWZy6agcgddESi3XaTiSKU4azfEZeyYjkavgDMl2PSFYMcJqGIotyFVBzEfbC3q5TqbVtNI794KtM8',
    });
    return this.http.get(`${URL}/${query}`, { headers });
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=es&limit=20`
    )
  }
}
