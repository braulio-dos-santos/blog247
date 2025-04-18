import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Artigo } from '../../interfaces/artigo.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artigo-atualizar',
  imports: [CommonModule, FormsModule],
  templateUrl: './artigo-atualizar.component.html',
  styleUrl: './artigo-atualizar.component.css',
})
export class ArtigoAtualizarComponent implements OnInit {
  artigo: Artigo = { titulo: '', conteudo: '' };
  sucesso = false;
  artigoId!: number;

  constructor(
    private artigoService: ArtigoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.artigoId = Number(this.route.snapshot.paramMap.get('id'));
    this.getArtigo(this.artigoId);
  }

  getArtigo(id: number) {
    this.artigoService.getArtigo(id).subscribe((data) => {
      this.artigo = data;
    });
  }

  updateArtigo() {
    const artigoId = Number(this.route.snapshot.paramMap.get('id'));
    this.artigoService.updateArtigo(artigoId, this.artigo).subscribe({
      next: () => {
        this.sucesso = true;
        this.artigo = { titulo: '', conteudo: '' }; // limpa o form
      },
      error: (err) => {
        console.error('Erro ao salvar artigo:', err);
      },
    });
  }
}
