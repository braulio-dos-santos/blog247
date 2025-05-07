export interface Artigo {
  id?: number;
  titulo: string;
  conteudo: string;
  imagem?: string;
}

export interface ApiResponse<T> {
  status: string;
  data: T;
  links?: string
  message?: string;
}

export interface ArtigoResponse {
  status: string;
  data: Artigo;
  links?: { self: string; artigos: string };
  message?: string;
}
