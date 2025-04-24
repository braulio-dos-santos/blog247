import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Artigo, ApiResponse } from '../interfaces/artigo.interface';

@Injectable({
  providedIn: 'root',
})
export class ArtigoService {
  private artigo_api_url = 'http://localhost:3333/api/v1/artigos';

  constructor(private http: HttpClient) { }

  // Obter lista de artigos (com paginação, se aplicável)
  getArtigos(page: number = 1, perpage: number = 10): Observable<Artigo[]> {
    return this.http
      .get<ApiResponse<Artigo[]>>(`${this.artigo_api_url}/?page=${page}&per_page=${perpage}`)
      .pipe(
        map(response => response.data),
        // catchError()
      )
  }

  // Obter um artigo por ID
  getArtigo(id: number): Observable<Artigo> {
    return this.http
      .get<ApiResponse<Artigo>>(`${this.artigo_api_url}/${id}`)
      .pipe(
        map(response => response.data),
        // catchError(this.handleError)
      );
  }

  // Criar um novo artigo
  createArtigo(artigo: Artigo): Observable<Artigo> {
    return this.http
      .post<ApiResponse<Artigo>>(`${this.artigo_api_url}`, artigo)
      .pipe(
        map(response => response.data),
        // catchError(this.handleError)
      );
  }

  // Atualizar um artigo
  updateArtigo(id: number, artigo: Artigo): Observable<Artigo> {
    return this.http
      .put<ApiResponse<Artigo>>(`${this.artigo_api_url}/${id}`, artigo)
      .pipe(
        map(response => response.data),
        // catchError(this.handlerError)
      )
  }

  // Deletar um artigo
  deleteArtigo(id: number): Observable<void> {
    return this.http
      .delete<ApiResponse<void>>(`${this.artigo_api_url}/${id}`)
      .pipe(
        map(() => undefined),
        // catchError(this.handleError)
      )
  }

  // Tratamento de erros
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`
    } else {
      // Erro do lado do servidor
      errorMessage = `Código: ${error.status}, Mensagem: ${error.error.message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage))
  }
}
