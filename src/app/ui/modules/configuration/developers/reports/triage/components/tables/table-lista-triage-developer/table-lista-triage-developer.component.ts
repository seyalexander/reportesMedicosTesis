import { Component, Input } from '@angular/core';
import { triageModel } from '../../../../../../../../../domain/model/triage/triage.mode';

@Component({
  selector: 'app-table-lista-triage-developer',
  standalone: true,
  imports: [],
  templateUrl: './table-lista-triage-developer.component.html',
  styleUrl: './table-lista-triage-developer.component.css'
})
export class TableListaTriageDeveloperComponent {
  @Input() triageListDeveloper: Array<triageModel> = []
}
