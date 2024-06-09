import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-header-list-patients',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './header-list-patients.component.html',
  styleUrl: './header-list-patients.component.css'
})
export class HeaderListPatientsComponent {

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
