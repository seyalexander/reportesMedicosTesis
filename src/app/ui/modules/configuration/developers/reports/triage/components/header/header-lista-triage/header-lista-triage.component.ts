import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-lista-triage',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header-lista-triage.component.html',
  styleUrl: './header-lista-triage.component.css'
})
export class HeaderListaTriageComponent {
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

   //================================================================
  // RESET
  //================================================================
  reload() {
    window.location.reload()
  }

  @Output() btnSearchPatientName = new EventEmitter<string>();
  getById (name: any) {
    this.btnSearchPatientName.emit(name)
  }
}
