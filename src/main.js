import { renderItems } from "./view.js";

import data from "./data/dataset.js";

import dataFunctions from "./dataFunctions.js";

const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);

const selectores = document.querySelector("#epoca");
const selectoresOrden = document.querySelector("#nombre");
const botonborrar = document.getElementById("borrar");

const datoDuracion = document.querySelector("duracion");
const datoNota = document.querySelector("nota");
const datoGenero = document.querySelector("genero");

const datosEstadistica = document.getElementById("datos-estadisticas")
datosEstadistica.appendChild(renderDatosEstadistica());

function filtrarAño90() {
  const copyData =[...data];
  const filtrarAño90 = dataFunctions.filterByEpocaUno(copyData);
  const listaDePeliculas1 = renderItems(filtrarAño90);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas1);
}

function filtrarAño00() {
  const copyData =[...data];
  const filtrarAño00 = dataFunctions.filterByEpocaDos(copyData);
  const listaDePeliculas2 = renderItems(filtrarAño00);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas2);
}

function filtrarAño10() {
  const copyData =[...data];
  const filtrarAño10 = dataFunctions.filterByEpocaTres(copyData);
  const listaDePeliculas3 = renderItems(filtrarAño10);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas3);
}

function filtrarAño20() {
  const copyData =[...data];
  const filtrarAño20 = dataFunctions.filterByEpocaCuatro(copyData);
  const listaDePeliculas4 = renderItems(filtrarAño20);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas4);
}

function ordenarAZ() {
  const copyData =[...data];
  const ordenarAscendente = dataFunctions.sortByName(copyData);
  const listaNombre1 = renderItems(ordenarAscendente);
  elementos.innerHTML = "";
  elementos.appendChild(listaNombre1);
}

function ordenarZA() {
  const copyData =[...data];
  const ordenarDescendente = dataFunctions.reverseByName(copyData);
  const listaNombre2 = renderItems(ordenarDescendente);
  elementos.innerHTML = "";
  elementos.appendChild(listaNombre2);
}

function borrarFiltrosYOrden() {
  const listaOriginal = renderItems(data);
  elementos.innerHTML = "";
  elementos.appendChild(listaOriginal);
  selectores.selectedIndex=0;
  selectoresOrden.selectedIndex=0;
}

function renderDatosEstadistica() { 
  const ulDatos = document.createElement("ul");
  ulDatos.classList.add("datosDisneyPixar");

  const liDatos = document.createElement("li");
  liDatos.classList.add("datosEstadisticos")
  liDatos.innerHTML = ``
}
  
//const copyData = [...data];

/*const stats = dataFunctions.computeStats(copyData)
  const promedioDuracion = stats.sumaTotalDuracion/copyData.length;
  datoDuracion.innerHTML = "En promedio, las peliculas de disney duran: " + promedioDuracion;

  const promedioNota = stats.sumaTotalNota/copyData.length;
  datoNota.innerHTML ="El promedio de nota de las peliculas es: " + promedioNota;*/

//const porcentajeGenero = dataFunctions.computeStats(copyData);
//datoGenero.innerHTML = porcentajeGenero + "es el género que más abunda";


selectores.addEventListener("change", (event) => {
  const valor = event.target.value;
  switch (valor) {
  case "1990":
    filtrarAño90();
    break;
  case "2000":
    filtrarAño00();
    break;
  case "2010":
    filtrarAño10();
    break;
  case "2020":
    filtrarAño20();
    break;
  default:
    break;
  }
});

selectoresOrden.addEventListener("change", (e) => {
  const valor = e.target.value;
  switch (valor) {
  case "Asc":
    ordenarAZ();
    break;
  case "Desc":
    ordenarZA();
    break;
  default:
    break;
  }
});

botonborrar.addEventListener("click", borrarFiltrosYOrden);

