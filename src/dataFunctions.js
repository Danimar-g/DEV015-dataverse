/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const dataFunctions = {

  filterByEpocaUno: (data) => {
    return data.filter(
      (data) => data.facts.estreno >= 1990 && data.facts.estreno <= 1999
    );
  },

  filterByEpocaDos: (data) => {
    return data.filter(
      (data) => data.facts.estreno >= 2000 && data.facts.estreno <= 2009
    );
  },

  filterByEpocaTres: (data) => {
    return data.filter(
      (data) => data.facts.estreno >= 2010 && data.facts.estreno <= 2019
    );
  },

  filterByEpocaCuatro: (data) => {
    return data.filter(
      (data) => data.facts.estreno >= 2020 && data.facts.estreno <= 2029
    );
  },

  sortByName: (data) => {
    const nombresOrdenados = data.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return nombresOrdenados;
  },

  reverseByName: (data) => {
    const arregloOrdenado = data.sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    return arregloOrdenado;
  },

  computeStats: (data) => {
    const sumaTotalDuracion = data.reduce((acumulador, pelicula) => acumulador + Number(pelicula.facts.tiempoDuracion.split(" ")[0]), 0);
    const sumaTotalNota = data.reduce((acumulador, pelicula) => acumulador + Number(pelicula.facts.clasificPublico.split("/")[0]), 0);
    return {sumaTotalDuracion, sumaTotalNota};
  },

  computeStatsGender: (data) => {
    /*
      arreglo de objetos donde el primer dato es el genero y segundo dato es la cantidad
      resultado esperado: [{genero: 'accion', cantidad: 10}, {genero: 'comedia', cantidad: 8}, {genero: 'drama', cantidad: 5}]
      arregloEstadisticaGenero = [];
      data.forEach(pelicula => {
        const generos = pelicula.facts.generoPelicula.split(', ');
        generos.forEach(genero => {
          const dato = arregloEstadisticaGenero.find(elem => elem.genero === genero)
          if (dato) {
            dato.cantidad = dato.cantidad + 1;
          } else {
            arregloEstadisticaGenero.push({genero: genero, cantidad: 1});
          }
        })
      })
    */
     
  },
};



export default dataFunctions;
