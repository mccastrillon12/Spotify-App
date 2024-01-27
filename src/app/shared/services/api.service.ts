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
        'Bearer BQBjUxC5UIKPPnfiKNc6ekathsQjioXUObaGHxC9nhfeA6pf5fkjhJ_TGUJFG2FChvg6ZCFemOr79QXGrB8osEx1M_qr7HqJMS6CKgO9VMLIYoT9K-E',
    });
    return this.http.get(`${URL}/${query}`, { headers });
  }

  getArtist(termino: string) {
    return this.getQuery(
      `search?query=${termino}&type=artist&market=es&limit=20`
    )
  }
}
