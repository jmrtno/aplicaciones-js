// ejercicio edad conducir

// let edad = prompt('Introduce tu edad');

// if (edad >= 18) {
//     console.log("puedes conducir");
// } else {
//     console.log('no puedes conducir');
// }


// ejercicio calificacion

// do{

//     let nota = prompt('Introduce una calificación');

//     if( nota > 0 && nota <= 10 ) {

//         if (nota < 3) {
//             console.log('Nota muy deficiente');

//         } else if (nota < 5) {
//             console.log('Nota deficiente');

//         }else if (nota < 6) {
//             console.log('Nota suficiente');

//         }else if (nota < 7) {
//             console.log('Nota bien');

//         }else if (nota < 9) {
//             console.log('Nota notable');

//         }else if (nota >= 9) {
//             console.log('Nota sobresaliente');
//         }

//     } else {
//         console.log('Introduce un número entre 0 y 10');
//     }


// } while(nota != undefined);


// Ejercicio cadenas de texto

// let resultado = '';

// do {
//     let cadena = prompt('Introduce una cadena');

//     if (resultado == ''){
//         resultado=resultado+cadena;

//     } else {
//         resultado = resultado + '-' + cadena;
//     }
// }while (confirm('Desea seguir?'));

// document.write(resultado);

// Ejercicio numeros o letras

// let suma = 0;

// let numero;

// do {

//     numero = prompt('Introduce un número:')

//     if (Number(numero) == numero){

//         numero = Number(numero);

//         suma = suma + numero;

//     } else {

//         if(numero != undefined){
//             alert(numero + ' no es un número');
//         }
//     }

// }while (numero != undefined);

// document.write(suma);

// Ejercicio DNI

// let resto = 0;

// let letra = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 
//              'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

// let numero;

// do {

//     numero = prompt('Introduce tu DNI')

//     if(Number(numero) == numero){

//         if (numero >= 0 && numero <= 99999999){ 
//             resto = numero%23;

//             letra = letra[resto]
//             alert('Numero: ' + numero + ' Letra: '+ letra);

//         } else {
//             alert('Introduce un número válido')
//         }
//     } else if (numero != undefined) {

//         alert('No has introducido un número')
//     }

// } while (numero != undefined);

// Ejercicio pirámide números

for(let i = 0; i <= 9; i++){

    for(let j = 1; j <= i; j++){
        document.write(j);
    }
    document.write('<br>');
}

document.write('<br>');

for (let i = 1; i <= 9; i++) {

    for (let j = 0; j < i; j++) {
        document.write(i);
    }
    document.write("<br>");
}


document.write('<br>');

for(let i = 9; i >= 0 ; i--){

    for(let j = 0; j < i; j++){
        document.write(i);
    }
    document.write('<br>')
}