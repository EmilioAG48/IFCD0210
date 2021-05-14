// Ejercicio 4

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