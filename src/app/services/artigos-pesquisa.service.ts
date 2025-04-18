import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artigo } from '../interfaces/artigo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtigosPesquisaService {
  private apiURL = 'http://localhost/aprendendo-angular-api/artigoAPI.php';

  constructor(private http: HttpClient) {}

  searchArtigos(query: string): Observable<Artigo[]> {
    const params = new HttpParams().set('q', query);
    return this.http.get<Artigo[]>(this.apiURL, { params });
  }
}
