//SEGUNDA PREENTREGA

//RECETARIO

let recetario=[{
    plato:"ñoquis caseros",
    receta:"Mezclar pure de papas, harina,queso y especias.Una vez unida la mezcla armar pequeñas tiras de masa y cortarlas en dados de 3cm.darle forma con el tenedor.",
},{
    plato:"humus",
    receta:"Procesar 100gr de garbanzos,un diente de ajo,aceite de oliva y jugo de limon hasta armar una pasta homogenea.Colocar en un pote ,decorar con aji molido .",
},{
    plato:"papas fritas",
    receta:"cortar las papas en forma de baston.Calentar el aceite y una vez caliente, tirar las mismas .Una vez doradas,sacar del fuego y escurrir en papel de rollo de cocina.",
}];
let boton = document.getElementById("boton");
boton.addEventListener("click", resultado);

function resultado(){
let usuarioValor = document.getElementById("recetario").value;
let recuadro = document.getElementById("recuadroVerde");
let encontrarReceta = recetario.find((item) => item.plato === usuarioValor);

if(usuarioValor === "ñoquis caseros"){
    recuadro.innerHTML= `${encontrarReceta.receta}`;
}else if(usuarioValor === "humus"){
    recuadro.innerHTML= `${encontrarReceta.receta}`;
}else if(usuarioValor === "papas fritas"){
    recuadro.innerHTML= `${encontrarReceta.receta}`;
}else{
    recuadro.innerHTML= "lo sentimos, nuestro recetario no dispone de la receta de este plato por el momento"
// no encuentro el recuadro celeste, por eso lo pongo dentro del verde
// también podría usarse: alert("lo sentimos, ... momento")
// si habría que crearle un cuadro celeste podría hacerse con un DOM =>
}
};
resultado()