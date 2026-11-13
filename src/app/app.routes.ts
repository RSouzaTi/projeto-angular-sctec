// app.routes.ts - MAPA DE ROTAS: "quando a URL for X, mostre o componente Y" dentro do <router-outlet>.
import { Routes } from '@angular/router';
import { CadastroAluno } from './pages/cadastro-aluno/cadastro-aluno';
import { Contato } from './pages/contato/contato';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
  { path: '', component: Inicio, title: 'Início | Projeto SCTEC' },
  { path: 'contato', component: Contato, title: 'Contato | Projeto SCTEC' },
  { path: 'cadastro', component: CadastroAluno, title: 'Cadastro | Projeto SCTEC' },
  { path: '**', redirectTo: '' },
];
