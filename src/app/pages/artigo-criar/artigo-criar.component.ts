import { Component } from '@angular/core';
import { Artigo } from '../../interfaces/artigo.interface';
import { ArtigoService } from '../../services/artigo.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-artigo-criar',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './artigo-criar.component.html',
  styleUrl: './artigo-criar.component.css',
})
export class ArtigoCriarComponent {
  artigo: Artigo = { titulo: '', conteudo: '' };
  sucesso = false;
  form!: FormGroup;

  constructor(private artigoService: ArtigoService, private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      conteudo: ['', [Validators.required]],
    });
  }

  createArtigo() {
    if (this.form.valid) {
      this.artigo = this.form.value;
      this.artigoService.createArtigo(this.artigo).subscribe({
        next: () => {
          this.sucesso = true;
          this.artigo = { titulo: '', conteudo: '' }; // limpa o form
        },
        error: (err) => {
          console.error('Erro ao salvar artigo:', err);
        },
      });
    }
    this.form.reset();
  }
}
