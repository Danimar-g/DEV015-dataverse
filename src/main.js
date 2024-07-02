import { renderItems } from "./view.js";

import data from "./data/dataset.js";

import dataFunctions from "./dataFunctions.js";

const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);

const selectores = document.querySelector("#epoca");
const selectoresOrden = document.querySelector("#nombre");

function filtrarAño90() {
  const copyData = data;
  const filtrarAño90 = dataFunctions.filterByEpocaUno(copyData);
  const listaDePeliculas1 = renderItems(filtrarAño90);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas1);
}

function filtrarAño00() {
  const copyData = data;
  const filtrarAño00 = dataFunctions.filterByEpocaDos(copyData);
  const listaDePeliculas2 = renderItems(filtrarAño00);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas2);
}

function filtrarAño10() {
  const copyData = data;
  const filtrarAño10 = dataFunctions.filterByEpocaTres(copyData);
  const listaDePeliculas3 = renderItems(filtrarAño10);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas3);
}

function filtrarAño20() {
  const copyData = data;
  const filtrarAño20 = dataFunctions.filterByEpocaCuatro(copyData);
  const listaDePeliculas4 = renderItems(filtrarAño20);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas4);
}

function ordenarAZ() {
  const copyData = data;
  const ordenarAscendente = data.dataFunctions.sortByName(copyData);
  const listaNombre1 = renderItems(ordenarAscendente);
  selectoresOrden.innerHTML = "";
  selectoresOrden.appendChild(listaNombre1);
}

function ordenarZA() {
  const copyData = data;
  const ordenarDescendente = data.dataFunctions.reverseByName(copyData);
  const listaNombre2 = renderItems(ordenarDescendente);
  selectoresOrden.innerHTML = "";
  selectoresOrden.appendChild(listaNombre2);
}

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