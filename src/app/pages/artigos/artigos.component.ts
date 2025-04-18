import { Component } from '@angular/core';
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
export class ArtigosComponent {
  artigos: Artigo[] = [];
  sucesso = false;

  constructor(private artigoService: ArtigoService, private router: Router) {}

  ngOnInit() {
    this.getArtigos();
  }

  getArtigos() {
    this.artigoService.getArtigos().subscribe((data) => {
      this.artigos = data;
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
        error: (err) => {
          console.error('Erro ao salvar artigo:', err);
        },
      });
      setTimeout(() => (this.sucesso = false), 3000);
    }
  }
}
