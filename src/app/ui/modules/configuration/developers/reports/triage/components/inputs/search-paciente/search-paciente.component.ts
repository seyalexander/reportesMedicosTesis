import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-paciente',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-paciente.component.html',
  styleUrl: './search-paciente.component.css'
})
export class SearchPacienteComponent {
  namePatient = new FormControl('', {
    nonNullable: true,
    validators: [
     Validators.required
    ]
  })

  validacionDatos() {
    if (this.namePatient.valid && this.namePatient.value.trim()) {
      const value = this.namePatient.value
      this.getById(value);
      this.namePatient.setValue('')
    }
  }

  reload() {
    window.location.reload()
  }

  @Output() btnSearchPatientName = new EventEmitter<string>();
  getById (name: any) {
    this.btnSearchPatientName.emit(name)
  }
}
