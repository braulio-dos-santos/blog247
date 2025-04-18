import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo.service';
import { Artigo } from '../../interfaces/artigo.interface';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artigo-detalhe',
  imports: [CommonModule],
  templateUrl: './artigo-detalhe.component.html',
  styleUrl: './artigo-detalhe.component.css',
})
export class ArtigoDetalheComponent implements OnInit {
  artigo: any = null;
  artigoId!: number;

  constructor(
    private artigoService: ArtigoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getArtigo();
  }

  getArtigo() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.artigoId = id;

    this.artigoService.getArtigo(this.artigoId).subscribe((data) => {
      this.artigo = data;
    });
  }

  getProximoArtigo() {
    const proximoId = this.artigoId + 1;

    this.artigoService.getArtigo(proximoId).subscribe(
      (data) => {
        this.artigo = data;
        this.artigoId = proximoId; // Atualiza o ID após carregar
      },
      (error) => {
        console.error('Erro ao carregar o próximo artigo:', error);
        this.artigo = null;
      }
    );
  }
}
