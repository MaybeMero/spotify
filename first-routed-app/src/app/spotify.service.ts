import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBsU1zUn8sPzaiRKX5RX5Phggz3UnHpQ9yQ7Fk892X-KjBSrmR_WW9tQAa3sM_w0aYaeR90TZbCSfi9ctOGCKlDvh6eEhWbiKmY67KZlDqMOwM9k2qvIFg8ezAUjjxVRAGh5U0DfTtet6e6vlBDepswlTvgBNQ'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
