import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ArtigoDetalheComponent } from './pages/artigo-detalhe/artigo-detalhe.component';
import { Page404Component } from './pages/page-404/page-404.component';
import { ArtigoCriarComponent } from './pages/artigo-criar/artigo-criar.component';
import { ArtigoAtualizarComponent } from './pages/artigo-atualizar/artigo-atualizar.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ArtigosPesquisaComponent } from './pages/artigos-pesquisa/artigos-pesquisa.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { ArtigosComponent } from './pages/artigos/artigos.component';
import { loginAuthGuard } from './auth/login-auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'sobre', component: SobreComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'artigos', component: ArtigosComponent },
  { path: 'artigo-detalhe/:id', component: ArtigoDetalheComponent },
  {
    path: 'artigo-criar',
    component: ArtigoCriarComponent,
    canActivate: [loginAuthGuard],
  },
  { path: 'artigo-atualizar-form/:id', component: ArtigoAtualizarComponent },
  { path: 'artigo-atualizar', component: ArtigoAtualizarComponent },
  { path: 'artigos-pesquisa', component: ArtigosPesquisaComponent },
  { path: '**', component: Page404Component },
];
