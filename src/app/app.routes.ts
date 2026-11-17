import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/inicio/inicio').then((m) => m.Inicio),
    title: 'Início | Projeto SCTEC',
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/contato/contato').then((m) => m.Contato),
    title: 'Contato | Projeto SCTEC',
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro-aluno/cadastro-aluno').then((m) => m.CadastroAluno),
    title: 'Cadastro | Projeto SCTEC',
  },
  {
    path: 'cursos',
    loadChildren: () => import('./features/cursos.routes').then((m) => m.CURSOS_ROUTES),
    title: 'Cursos | Projeto SCTEC',
  },
  { path: '**', redirectTo: '' },
];