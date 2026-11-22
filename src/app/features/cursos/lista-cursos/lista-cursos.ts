// lista-cursos.ts - PÁGINA da feature cursos (rota /cursos).
// Aula 3: os cartões viraram <mat-card>; o SharedModule já traz os módulos do Material.
import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { PageHeader } from '../../../shared/components/page-header/page-header';
import { CursoService } from '../curso-service';

@Component({
  standalone: true,
  imports: [SharedModule, PageHeader],
  templateUrl: './lista-cursos.html',
  styleUrl: './lista-cursos.scss',
})
export class ListaCursos {
  private cursoService = inject(CursoService);
  protected readonly cursos = this.cursoService.cursos;
}
