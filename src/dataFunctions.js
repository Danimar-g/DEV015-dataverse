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

  SortByName: (data) => {
    data.name.toSorted((a, b) => a.localeCompare(b, "es"));
  },

  ReversebyName: (data) => {
    const arregloOrdenado = data.name.toSorted((a, b) =>
      a.name.localeCompare(b.name, "es")
    );
    return arregloOrdenado.reverse();
  },
};
export default dataFunctions;
