document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery-container');

  // Enlaces de ejemplo (puedes agregar más elementos siguiendo este formato)
  const items = [
    {
      type: 'iframe', // Tipo de contenido (Imagen)
      content: 'https://drive.google.com/file/d/1n6JYOr76hPJNH5Ajko3bHBKPb6pxHiXh/preview', // Enlace de la imagen
      buttonUrl: 'https://drive.google.com/file/d/1DhcIsComcWNaTRW2qOVN-Ij99DELcG5V/preview' // Enlace al PDF
    },
    {
      type: 'iframe', // Tipo de contenido (Imagen)
      content: 'https://drive.google.com/file/d/1n6JYOr76hPJNH5Ajko3bHBKPb6pxHiXh/preview', // Enlace de la imagen
      buttonUrl: 'https://drive.google.com/file/d/1DhcIsComcWNaTRW2qOVN-Ij99DELcG5V/preview' // Enlace al PDF
    },
    {
      type: 'iframe', // Tipo de contenido (Imagen)
      content: 'https://drive.google.com/file/d/1n6JYOr76hPJNH5Ajko3bHBKPb6pxHiXh/preview', // Enlace de la imagen
      buttonUrl: 'https://drive.google.com/file/d/1DhcIsComcWNaTRW2qOVN-Ij99DELcG5V/preview' // Enlace al PDF
    },
    {
      type: 'iframe', // Tipo de contenido (Imagen)
      content: 'https://drive.google.com/file/d/1n6JYOr76hPJNH5Ajko3bHBKPb6pxHiXh/preview', // Enlace de la imagen
      buttonUrl: 'https://drive.google.com/file/d/1DhcIsComcWNaTRW2qOVN-Ij99DELcG5V/preview' // Enlace al PDF
    },
    {
      type: 'iframe', // Tipo de contenido (Imagen)
      content: 'https://drive.google.com/file/d/1n6JYOr76hPJNH5Ajko3bHBKPb6pxHiXh/preview', // Enlace de la imagen
      buttonUrl: 'https://drive.google.com/file/d/1DhcIsComcWNaTRW2qOVN-Ij99DELcG5V/preview' // Enlace al PDF
    }
  ];

  // Función para mezclar aleatoriamente los elementos
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 20; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Mezclar los elementos aleatoriamente
  shuffleArray(items);

  // Crear los contenedores con los elementos (embed/iframe y botón)
  items.forEach(item => {
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');

    let element;

    // Si es un iframe (para imagen)
    if (item.type === 'iframe') {
      element = document.createElement('iframe');
      element.src = item.content;
      element.width = '100%';
      element.height = '250px';
    }

    // Crear el botón debajo del contenido (con el enlace del PDF)
    const button = document.createElement('button');
    button.classList.add('pdf-button');
    button.textContent = 'Ver PDF';
    button.onclick = () => window.open(item.buttonUrl, '_blank'); // Abrir el PDF en una nueva pestaña

    contentItem.appendChild(element);
    contentItem.appendChild(button);

    galleryContainer.appendChild(contentItem);
  });
});
