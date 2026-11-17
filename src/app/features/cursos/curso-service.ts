import { Service } from '@angular/core';

@Service()
export class CursoService {
  readonly cursos = ['Angular', 'React', 'Java', 'Python', 'Banco de Dados'];
}
