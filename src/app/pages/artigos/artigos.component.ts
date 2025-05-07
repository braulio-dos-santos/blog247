import { Component, OnInit } from '@angular/core';
import { Artigo } from '../../interfaces/artigo.interface';
import { ArtigoService } from '../../services/artigo.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigos',
  imports: [CommonModule],
  templateUrl: './artigos.component.html',
  styleUrl: './artigos.component.css',
})
export class ArtigosComponent implements OnInit {
  artigos: Artigo[] = [];
  sucesso = false;
  errorMessage: string | null = null;
  page: number = 1;
  perPage: number = 10;

  constructor(private artigoService: ArtigoService, private router: Router) { }

  ngOnInit(): void {
    this.getArtigos();
  }

  getArtigos() {
    this.artigoService.getArtigos(this.page, this.perPage).subscribe({
      next: (data) => {
        this.artigos = data.data
      },
      error: (error) => {
        this.errorMessage = error.message
      }
    });
  }

  getArtigo(id: number) {
    this.router.navigate(['artigo-detalhe', id]);
  }

  updateArtigo(id: number) {
    this.router.navigate(['artigo-atualizar-form', id]);
  }

  deleteArtigo(id: number) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
      this.artigoService.deleteArtigo(id).subscribe({
        next: () => {
          this.sucesso = true;
          this.getArtigos();
        },
        error: (error) => {
          this.errorMessage = error.message
        },
      });
      setTimeout(() => (this.sucesso = false), 3000);
    }
  }
}
