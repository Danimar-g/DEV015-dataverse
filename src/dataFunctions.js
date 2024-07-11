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
    
    return sumaTotalDuracion/data.length;
  },
  
  computeStatsNota: (data) => {
    const sumaTotalNota = data.reduce((acumulador, pelicula) => acumulador + Number(pelicula.facts.clasificPublico.split("/")[0]), 0);
     const promedioNota= sumaTotalNota/data.length;

    return promedioNota.toFixed(1);
  },

}
export default dataFunctions;
