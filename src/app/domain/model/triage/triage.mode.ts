import { patientsResponseModel } from "../patients/patients-Response.model"

export class triageModel {
  edad: number = 0
  peso: string = ''
  talla: string = ''
  tc: string = ''
  fr: string = ''
  pulso: string = ''
  pc: string = ''
  noliquidos: boolean = true
  convulsiones: boolean = true
  sonoliento: boolean = true
  traumatismo: boolean = true
  envenenamiento: boolean = true
  fiebre: boolean = true
  dificultadrespiratoria: boolean = true
  sibilancias: boolean = true
  otros: string = ''
  id_Paciente_Fk: patientsResponseModel= {} as patientsResponseModel
  fecha_Registro: string = ''
  id_Triaje: number = 0
}
