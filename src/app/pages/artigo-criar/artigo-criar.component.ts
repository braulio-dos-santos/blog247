import { Component } from '@angular/core';
import { Artigo } from '../../interfaces/artigo.interface';
import { ArtigoService } from '../../services/artigo.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artigo-criar',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './artigo-criar.component.html',
  styleUrl: './artigo-criar.component.css',
})
export class ArtigoCriarComponent {
  artigo: Artigo = {
    titulo: '',
    conteudo: '',
    imagem: '',
  };

  sucesso = false;
  form!: FormGroup;
  errorMessage: string | null = null

  constructor(private artigoService: ArtigoService, private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      conteudo: ['', [Validators.required]],
      imagem: [[Validators.required]],
    });
  }

  createArtigo() {
    if (this.form.valid) {
      this.artigo = this.form.value;
      this.artigoService.createArtigo(this.artigo).subscribe({
        next: () => {
          this.sucesso = true;
          // this.artigo = { titulo: '', conteudo: '', imagem: '' };
          this.router.navigate(['/artigos'])
        },
        error: (error) => {
          this.errorMessage = error.message
        },
      });
    }
    this.form.reset();
  }
}
