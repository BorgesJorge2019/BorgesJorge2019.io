/* === FUNCIONES JAVASCRIPT === */

/* Función que muestra la lista de servicios disponibles */
/* PARA EDITAR: Cambiar el texto dentro de alert() por tus servicios */
function mostrarServicios() {
  alert("Servicios disponibles:\n\n• Gympsum Board\n• Cristalería General\n• Puertas Ventanas\n• Cortinas de Interior\n• Toldos Retractables\n• Cortinas de Lona\n• Techos en Galvalum\n• Ebanistería\n• Tormenteras\n• Electricidad\n• Plomería\n• Cámaras de seguridad\n• Alarmas");
}

/* Función para agregar contacto - Descarga un archivo vCard */
function agregarContacto() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jorge Borges
ORG:Servicios de Handyman
TEL:+7875555555
EMAIL:correo@ejemplo.com
URL:https://wa.me/7875555555
ADR:;;Caguas;Puerto Rico;;;
NOTE:Tu solución rápida en casa - Reparaciones, mantenimiento y mejoras con confianza y calidad
END:VCARD`;
  
  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'jorge_borges_contacto.vcf';
  a.click();
  window.URL.revokeObjectURL(url);
}
