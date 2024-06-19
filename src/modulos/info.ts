const info = document.getElementById('info') as HTMLDivElement;

export default {
  elemento: () => info,
  llenar: (contenido: [nombre: string, valor: string][]) => {
    let respuesta = '';

    contenido.forEach(([nombre, valor]) => {
      respuesta += `<span class="nombre">${nombre}: </span>`;
      respuesta += `<span class="valor">${valor}</span>`;
    });

    info.innerHTML = respuesta;
  },

  mostrar: () => {
    info.classList.add('visible');
  },
  esconder: () => {
    info.classList.remove('visible');
  },
};
