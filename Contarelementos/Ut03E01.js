"use strict"
/*Instrucciones
Escribe una función repetidos() que tome un array y devuelva otro array especificando 
el número de veces que se repite cada elemento del primer array.

Por ejemplo:
Si la entrada es [2, 3, 2, 2] la salida debe ser [3, 1]
Si la entrada es [1, 1, 1] la salida debe ser [3]
Si la entrada es [2, 3, 3, 2] la salida debe ser [2, 2]*/

let numeros = [5,5,4,4];
//5=2,4=2==>
function repetidos(arraynum){
       let arraycont=[];
       let ocurrecias=[];
      for(let i=0;i<arraynum.length;i++){
        let numero=0;
        numero = arraynum[i];
        if (ocurrecias.includes(numero)) {
        alert("Elemento repetido")
        }else{
          let contador=0;
          for(numero of arraynum){
            cont++;
          }
          ocurrecias.push(numeros[i]);
          arraycont.push(contador);

        }
       
        
    }
    return arraycont;
    }
  console.log(repetidos(numeros));