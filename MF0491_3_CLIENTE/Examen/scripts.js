console.log("todo Funciona");

// --------------- Dos strings y mensaje en minuscula..---------------------------------------....

const funcion1 = (cadena1, cadena2) => {
  let mensaje = "";
  mensaje = cadena1 + " " + cadena2;
  console.log(mensaje.toLowerCase());
};
funcion1("Hola", "CamelCase");
funcion1("ENVIADO", "EN MAYUSCULAS");

// --------pedir dos numeros y decir si son iguales o cual es mayor. -----------------------------------------

const compararNumeros = () => {
  let num1 = parseInt(prompt("Introduce numero1"));
  let num2 = parseInt(prompt("Introduce numero2"));

  if (num1 === num2) {
    alert(`${num1} es igual a ${num2}`);
  } else if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
  } else {
    alert(`${num1} es menor que ${num2}`);
  }
};

// boton eventlistener----------------------------

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  compararNumeros();
});

// ---- array con deportes favoritos hacia console.log  ...............................

const arrayDeportes = () => {
  const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
  deportes.push("fronton");
  deportes.unshift("natacion");
  console.log(deportes);
  const arrayordenada = deportes.sort();
  console.log(arrayordenada);
};
arrayDeportes();

// ------- Lista ordenada.--------------------------

const rellenarUl = () => {
  //Declaro el array con los deportes
  const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
  // Creo un fragmento para añadir los LI que hago
  const fragment = document.createDocumentFragment();

  //Uso un bucle for porque es un numero limitado de elementos
  //Uso un bucleo for of porque iterar todo el array
  for (const deporte of deportes) {
    //Para cada item creo un LI
    const itemList = document.createElement("LI");
    //Igualo el contenido del LI a al deporte (String) correspondiente
    itemList.textContent = deporte;
    //Añado el LI al Fragmento
    fragment.appendChild(itemList);
  }

  // Obtengo el UL donde voy inserlar los LI
  const ulEjer4 = document.getElementById("ejercicio4");
  //Inserto el fragmento
  ulEjer4.appendChild(fragment);
};

rellenarUl();

//------- objeto con pelicula favorita------------

const divJS = document.getElementById("javascript");

const rellenarPeliFav = () => {
  const peliculaFav = {
    title: "Baby Driver",
    director: "Mustang",
    year: 1969,
    duration: 145,
    img: "https://www.nacionrex.com/__export/1513982279509/sites/debate/img/2017/12/22/baby_driver_poster.jpg_458947530.jpg",
    genre: "scifi",
  };

  const parrafoPelicula = document.createElement("P");
  parrafoPelicula.innerHTML = `Mi película favorita es <strong>${peliculaFav.title}</strong> cuyo director es <em>${peliculaFav.director}
</em> su duraccion es <span class="pelicula">${peliculaFav.duration}</span><br><br><br>
<img src="${peliculaFav.img}" alt="${peliculaFav.title}">
`;

  divJS.appendChild(parrafoPelicula);
};

rellenarPeliFav();

// -------- calcular area ---------------------------------

const divForma = document.getElementById("forma");

class Figura {
  constructor(tipo, altura, anchura) {
    this.tipo = tipo;
    this.altura = altura;
    this.anchura = anchura;
  }

  calcularArea() {
    return this.altura * this.anchura;
  }
  imprimir() {
    return `Soy un ${this.tipo} mi anchura es ${this.anchura} y mi altura es ${this.altura}.`;
  }
}

const rectangulo = new Figura("rectangulo", 12, 48);

const parrafoObjeto = document.createElement("P");

let mensajeObjeto = rectangulo.imprimir();
mensajeObjeto += ` mi area es igual a ${rectangulo.calcularArea()}`;
parrafoObjeto.textContent = mensajeObjeto;

divForma.appendChild(parrafoObjeto);

// --------- Delegación de eventos --------------------

const gallery = document.getElementById("gallery");
gallery.addEventListener("click", (e) => {
  e.target.classList.add("red");
});

// ----------------------------