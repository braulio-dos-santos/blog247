export interface Artigo {
  id?: number;
  titulo: string;
  conteudo: string;
  imagem?: string;
}

export interface ApiResponse<T> {
  status: string;
  data: T;  
  message: string;
}
