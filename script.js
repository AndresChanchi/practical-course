const searchInput = document.getElementById('input-duck');
const searchButton = document.getElementById('input-search');

// Event listener para el botón de búsqueda
searchButton.addEventListener('click', function() {
  search();
});

// Event listener para la tecla "Enter" en el input de búsqueda
searchInput.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    search();
  }
});

// Función de búsqueda
function search() {
const query = searchInput.value;
  if (query.trim() !== '')
  {
    const encodedQuery = encodeURIComponent(query);
    const searchUrl = `https://duckduckgo.com/?q=${encodedQuery}`;
    window.location.href = searchUrl;
  } 
  else 
  {
    // Redirigir a una página predeterminada si no se ha ingresado ninguna búsqueda
    window.location.href = 'https://andreschanchi.github.io/practical-course/';
  }
}

