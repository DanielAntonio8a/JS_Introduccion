// ===== LÓGICA DE LAS PESTAÑAS (solo la usa con-js.html) =====

// 1. Buscar todos los botones y todos los paneles de la página
const botones = document.querySelectorAll('.pestanas button');
const paneles = document.querySelectorAll('.panel');

// 2. A cada botón le asignamos qué hacer cuando le den clic
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {

    // 3. Quitar el estado "activo/visible" de todos
    botones.forEach(function (b) { b.classList.remove('activa'); });
    paneles.forEach(function (p) { p.classList.remove('visible'); });

    // 4. Activar solo el botón clicado y su panel correspondiente
    boton.classList.add('activa');
    document.getElementById(boton.dataset.panel).classList.add('visible');
  });
});
