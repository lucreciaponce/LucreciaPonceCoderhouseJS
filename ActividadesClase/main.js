//Clase "1. Conceptos generales: Sintaxis y variables"

//Actividad 1:
/*
//Ejemplo 1:
let dato1 = prompt("ingrese su nombre");
let dato2 = prompt("ingrese su apellido");
let dato3 = parseInt(prompt("ingrese su edad"));

let respuesta1 = dato1;
let respuesta2 = dato2;
let respuesta3 = dato3;

alert("Su nombre y apellido es" + " " + respuesta1 + " " + respuesta2 + ". " + "Además, usted tiene" + " " + respuesta3 + " " + "años.");

//Ejemplo 2:
let num = 20;

let dato = Number(prompt("ingrese un número"));
let resultado = num + dato;
console.log(resultado);

*/



//Clase "2. Control de flujos"

//Actividad 1:
/*
let edad = Number(prompt("ingrese la edad de su hijo"));
let profesora = prompt("ingrese el nombre de la profesora de su hijo");

if (edad < 3 && (profesora == "claudia" || profesora != "claudia")){
    console.log("su hijo está en Salita Azul, con la profe Claudia.");
}else if (edad < 5 && profesora == "marta"){
    console.log("su hijo está en Salita Celeste");
}else if (edad < 5 && profesora != "marta"){
    console.log("le informamos que la profe de su hijo será Marta y estará en Salita Celeste");
}else{
    console.log("debe comunicarse con Secretaría para tener más información.");
}
*/



//Clase "3. Ciclos e iteraciones"

//Actividad 1:

/*

NO LOGRO TERMINARLO.
let numero = prompt("ingrese un número");

for (let i = 0; i < 10; i++){
    let resultado = numero * i;
    console.log(`El resultado de tu número ${numero} es ${resultado}`);
}



*/


//PRIMERA PREENTREGA

/*
//Ej1: Verificar si el usuario es correcto, puede ingresar. En caso contrario, no podrá.

const admin = "Pedro Telmo";
const password = "ACCEDE123";

function verificar(){
   let usuario = prompt("Hola :) Ingrese su nombre de usuario, por favor.");
   let contrasena = prompt("Ahora, ingrese su contraseña, por favor.");

   if( usuario === admin && contrasena === password){
      alert("¡Datos correctos! Puede acceder correctamente");
   }else{
      alert("Datos incorrectos. Usted no podrá ingresar.");
   }
}
verificar();
FALTA APLICAR FOR O WHILE AQUÍ

//Ej2: Calcular costo total de un producto, seleccionado por el usuario.

const remera = 1500;
const pantalon = 2000;
const gorra = 800;
const descuento = 0.10;

function costo(){
    let producto = prompt("Ingrese el producto elegido").toLowerCase();
    for (let i = 0; i < 3; i++){
        if (producto === "remera"){
            let precioConDescuento = remera - (remera * descuento);
            alert(`El costo de la remera es de $ ${precioConDescuento} y ya le agregamos el 10% por ser cliente. ¡Gracias!`);
            break;
        }else if (producto === "pantalon"){
            let precioConDescuento = pantalon - (pantalon * descuento);
            alert(`El costo de la pantalon es de $ ${precioConDescuento} y ya le agregamos el 10% por ser cliente. ¡Gracias!`);
            break;
        }else if (producto === "gorra"){
            let precioConDescuento = gorra - (gorra * descuento);
            alert(`El costo de la gorra es de $ ${precioConDescuento} y ya le agregamos el 10% por ser cliente. ¡Gracias!`);
            break;
        }else if(producto === "esc"){
            prompt("producto ingresado incorrecto. Seleccione uno nuevo, sino indique: esc.")
            alert("producto ingresado incorrecto.");
            break;
        }else{
            alert("producto ingresado incorrecto.");
            break;
        }
    }
}
costo();


//Ej3: Indicar qué día debe trabajar según su nombre.

*/