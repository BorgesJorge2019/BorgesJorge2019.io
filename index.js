/* === FUNCIONES JAVASCRIPT === */

/* Función que muestra la lista de servicios disponibles */
/* PARA EDITAR: Cambiar el texto dentro de alert() por tus servicios */
function mostrarServicios() {
  alert("Servicios disponibles:\n\n• Gympsum Board\n• Cristalería General\n• Puertas Ventanas\n• Cortinas de Interior\n• Toldos Retractables\n• Cortinas de Lona\n• Techos en Galvalum\n• Ebanistería\n• Tormenteras\n• Electricidad\n• Plomería\n• Cámaras de seguridad\n• Alarmas");
}

/* Función para agregar contacto (actualmente simulada) */
/* PARA EDITAR: Aquí puedes integrar una función real para descargar vCard */
function agregarContacto() {
  alert("Función simulada: Aquí podrías descargar un archivo .vcf o integrar con tu app de contactos.");
  
  /* EJEMPLO DE CÓDIGO PARA DESCARGAR VCARD (descomenta para usar):
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Juan del Pueblo
ORG:Handyman Services
TEL:+1234567890
EMAIL:correo@ejemplo.com
URL:https://wa.me/1234567890
END:VCARD`;
  
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'contacto.vcf';
  a.click();
  window.URL.revokeObjectURL(url);
  */
}
