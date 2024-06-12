import Swal from "sweetalert2";

export function mensajeValidacionRegistroCorrecto(response: any, titulo: string) {
  const message = response && response.message ? response.message : `${titulo} creado correctamente.`;
  return Swal.fire('CONFIRMACIÓN', message, 'success')
}

// =======================================================================>> En el componente
// showConfirmacionAlert(response: any, titulo: string) {
//   mensajeValidacionRegistroCorrecto(response, titulo).then(() => {
//     window.location.reload();
//   });
// }
