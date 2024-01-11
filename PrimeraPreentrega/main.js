//PRIMERA PREENTREGA

//Calcular costo total de un producto, seleccionado por el usuario.

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
