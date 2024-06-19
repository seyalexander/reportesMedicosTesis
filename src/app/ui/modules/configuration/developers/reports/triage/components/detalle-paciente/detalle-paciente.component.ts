import { Component, Input } from '@angular/core';
import { patientsResponseModel } from '../../../../../../../../domain/model/patients/patients-Response.model';

@Component({
  selector: 'app-detalle-paciente',
  standalone: true,
  imports: [],
  templateUrl: './detalle-paciente.component.html',
  styleUrl: './detalle-paciente.component.css'
})
export class DetallePacienteComponent {
  @Input() detallePaciente: Array<patientsResponseModel> = []
  fechaActual: Date = new Date();
  fechaFormateada: string = '';
  obtenerFechaActual(): void {
    this.fechaActual = new Date();
    this.fechaFormateada = this.fechaActual.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  ngOnInit(): void {
    this.obtenerFechaActual();
  }

}
