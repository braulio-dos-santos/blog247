import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artigo } from '../interfaces/artigo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtigoService {
  private apiURL = 'http://localhost/aprendendo-angular-api/artigoAPI.php';

  constructor(private http: HttpClient) {}

  getArtigos(): Observable<Artigo[]> {
    return this.http.get<Artigo[]>(this.apiURL);
  }

  getArtigo(id: number): Observable<Artigo> {
    return this.http.get<Artigo>(`${this.apiURL}?id=${id}`);
  }

  createArtigo(artigo: Artigo): Observable<Artigo> {
    return this.http.post<Artigo>(this.apiURL, artigo);
  }

  updateArtigo(id: number, artigo: Artigo): Observable<Artigo> {
    return this.http.put<Artigo>(`${this.apiURL}?id=${id}`, artigo);
  }

  deleteArtigo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}?id=${id}`);
  }
}
