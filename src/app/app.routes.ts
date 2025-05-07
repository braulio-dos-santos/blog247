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
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { LogoutComponent } from './pages/logout/logout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], },
  { path: 'home', redirectTo: '' },
  { path: 'sobre', component: SobreComponent, canActivate: [AuthGuard], },
  { path: 'contato', component: ContatoComponent, canActivate: [AuthGuard], },
  { path: 'artigos', component: ArtigosComponent, canActivate: [AuthGuard], },
  { path: 'artigo-detalhe/:id', component: ArtigoDetalheComponent, canActivate: [AuthGuard], },
  {
    path: 'artigo-criar',
    component: ArtigoCriarComponent, canActivate: [AuthGuard],
  },
  { path: 'artigo-atualizar-form/:id', component: ArtigoAtualizarComponent, canActivate: [AuthGuard], },
  { path: 'artigo-atualizar', component: ArtigoAtualizarComponent, canActivate: [AuthGuard], },
  { path: 'artigos-pesquisa', component: ArtigosPesquisaComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent, },
  { path: '**', component: Page404Component },
];
