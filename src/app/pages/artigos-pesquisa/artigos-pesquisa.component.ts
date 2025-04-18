import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-artigos-pesquisa',
  imports: [FormsModule, CommonModule],
  templateUrl: './artigos-pesquisa.component.html',
  styleUrl: './artigos-pesquisa.component.css',
})
export class ArtigosPesquisaComponent {
  constructor() {}
}
