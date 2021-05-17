console.log("todo Funciona");

const divJS = document.getElementById("javascript");

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
// compararNumeros();

// array con deportes favoritos...............................
const arrayDeportes = () => {
  //Declaro el array con los deportes
  const deportes = ["baloncesto", "tenis", "volleyball", "futbol", "pingpong"];
  // console.log(deportes);
  deportes.push('fronton');
  deportes.unshift('natacion');
  console.log(deportes);
  const arrayordenada = deportes.sort();
  console.log(arrayordenada);
};
arrayDeportes();
// ---