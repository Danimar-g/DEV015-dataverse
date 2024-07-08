export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.classList.add("ulPelis");

  data.forEach((pelicula) => {
    const li = document.createElement("li");
    li.classList.add("tarjeta")
    li.innerHTML = `
    <div itemscope itemtype="peliculasDisneyPixar">
      <div class="titulo"><h3 itemprop="name"> ${pelicula.name} </h3> </div>
      <div class="contenedorContenido">
      <div class="contenedorImagen"><img class="imagenPeli" src="${pelicula.imageUrl}" alt="${pelicula.id}"></div>
      <div class="contenedorTextos">
      <div class="descripcion"> <span itemprop="descripcion"><b>Descripción:</b> ${pelicula.shortDescription}</span> </div>
      <div class="resumen"> <p itemprop= "resumen"><b>Resumen:</b> ${pelicula.description}</p> </div>
      <div class="hechos"> 
        <p itemprop="añoEstreno"><b>Año de estreno:</b> ${pelicula.facts.estreno}</p>
        <p itemprop="genero"><b>Género de pelicula:</b> ${pelicula.facts.generoPelicula}</p>
        <p itemprop="clasificacionPublico"><b>Clasificacion de publico:</b> ${pelicula.facts.clasificPublico}</p>
        <p itemprop="duracion"><b>Tiempo de duración:</b> ${pelicula.facts.tiempoDuracion}</p>
      </div>
      </div>
      </div>
    </div>
    `;
    ul.appendChild(li);
  });
  return ul;
};
