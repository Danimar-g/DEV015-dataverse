import { renderItems } from "./view.js";

import data from "./data/dataset.js";

import dataFunctions from "./dataFunctions.js";

const elementos = document.getElementById("disneyinfo");
const listaDePeliculas = renderItems(data);
elementos.appendChild(listaDePeliculas);

const selectores = document.querySelector("#epoca");

function filtrarAño90() {
  const copyData = data;
  const filtrarAño90 = dataFunctions.filterByEpocaUno(copyData);
  const listaDePeliculas1 = renderItems(filtrarAño90);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas1);
}
selectores.addEventListener("change", filtrarAño90);

function filtrarAño00() {
  const copyData = data;
  const filtrarAño00 = dataFunctions.filterByEpocaDos(copyData);
  const listaDePeliculas2 = renderItems(filtrarAño00);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas2);
}
selectores.addEventListener("change", filtrarAño00);

function filtrarAño10() {
  const copyData = data;
  const filtrarAño10 = dataFunctions.filterByEpocaTres(copyData);
  const listaDePeliculas3 = renderItems(filtrarAño10);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas3);
}
selectores.addEventListener("change", filtrarAño10);

function filtrarAño20() {
  const copyData = data;
  const filtrarAño20 = dataFunctions.filterByEpocaCuatro(copyData);
  const listaDePeliculas4 = renderItems(filtrarAño20);
  elementos.innerHTML = "";
  elementos.appendChild(listaDePeliculas4);
}
selectores.addEventListener("change", filtrarAño20);

