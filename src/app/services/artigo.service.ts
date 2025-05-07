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
  getArtigos(page: number = 1, per_page: number = 10): Observable<ApiResponse<Artigo[]>> {
    return this.http
      .get<ApiResponse<Artigo[]>>(`${this.artigo_api_url}/?page=${page}&per_page=${per_page}`)
      .pipe(catchError(this.handleError)
      );
  }

  // Obter um artigo por ID
  getArtigo(id: number): Observable<ApiResponse<Artigo>> {
    return this.http
      .get<ApiResponse<Artigo>>(`${this.artigo_api_url}/${id}`)
      .pipe(catchError(this.handleError));
  }


  // Criar um novo artigo
  createArtigo(artigo: Artigo): Observable<ApiResponse<Artigo>> {
    return this.http
      .post<ApiResponse<Artigo>>(`${this.artigo_api_url}`, artigo)
      .pipe(catchError(this.handleError));
  }

  // Atualizar um artigo
  updateArtigo(id: number, artigo: Artigo): Observable<ApiResponse<Artigo>> {
    return this.http
      .put<ApiResponse<Artigo>>(`${this.artigo_api_url}/${id}`, artigo)
      .pipe(catchError(this.handleError));
  }


  // Deletar um artigo
  deleteArtigo(id: number): Observable<ApiResponse<void>> {
    return this.http
      .delete<ApiResponse<void>>(`${this.artigo_api_url}/${id}`)
      .pipe(catchError(this.handleError));
  }

   // Tratamento de erros
   private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro do cliente: ${error.error.message}`;
    } else {
      errorMessage = `Erro do servidor - Código: ${error.status}, Mensagem: ${error.error?.message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
