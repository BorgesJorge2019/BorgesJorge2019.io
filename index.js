/* === FUNCIONES JAVASCRIPT === */
/* Función para compartir el enlace en móviles */
function compartirEnlace() {
  const url = window.location.href;
  const title = document.title || "Business Card";
  if (navigator.share) {
    navigator.share({
      title: title,
      url: url
    }).catch(() => {
      alert("No se pudo compartir el enlace.");
    });
  } else {
    // Fallback para desktop o navegadores sin soporte
    navigator.clipboard.writeText(url);
    alert("Enlace copiado al portapapeles: " + url);
  }
}

/* Función que muestra la lista de servicios disponibles */
/* PARA EDITAR: Cambiar el texto dentro de alert() por tus servicios */
function mostrarServicios() {
  alert("Servicios disponibles:\n\n• Gympsum Board\n• Cristalería General\n• Puertas Ventanas\n• Cortinas de Interior\n• Toldos Retractables\n• Cortinas de Lona\n• Techos en Galvalum\n• Ebanistería\n• Tormenteras\n• Electricidad\n• Plomería\n• Cámaras de seguridad\n• Alarmas");
}

/* Función para agregar contacto - Compatible con móviles */
function agregarContacto() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Jorge Borges
N:Borges;Jorge;;;
ORG:Servicios de Handyman
TEL;TYPE=CELL:787-555-5555
EMAIL:correo@ejemplo.com
URL:https://borgesjorge2019.github.io/BorgesJorge2019.io/
ADR:;;Caguas;Puerto Rico;;;
NOTE:Tu solución rápida en casa - Reparaciones mantenimiento y mejoras con confianza y calidad
END:VCARD`;

  // Detectar si es un dispositivo móvil
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Para dispositivos móviles, crear un enlace temporal y hacer click
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jorge_Borges_Contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    
    // Limpiar después de un breve delay
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  } else {
    // Para desktop, usar el método tradicional
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jorge_borges_contacto.vcf';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
