"use strict"
let ndni=prompt("Introduzca su DNI");
const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
document.write("Vamos a comprobar la letra del DNI");
let numero = ndni.slice(0 , 8);
let letra = ndni.slice(8).toUpperCase();
let resto = numero % 23;
    if(letra===letrasDNI[resto]){
        alert("La letra es correcta");
    }else{
        alert("La letra es incorrecta");
    }
