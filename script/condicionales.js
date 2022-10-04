console.log("Sesión JS03 Condicionles");

//+++++++++++ Declaración de Bloque ++++++++++++++++++

let nombre = "Rafa";
let ciudad = "Guadalajara";

{
    let nombre = "Fer";
    let ciudad = "CDMX"
    let apellido = "Palapa";
    console.log(`Mi nombre es ${nombre} ${apellido}, vive en ${ciudad}`);
}

console.log(`Participante: ${nombre} que vive en ${ciudad}`);

//  ++++++++++++ Condicional IF +++++++++
let edad = 22;

console.log("***Declaración antes del if ------>");
if (edad > 24) console.log("La edad es mayor a 25");
else{
    console.log("La edad es menor a 25");
    console.log("Seguiremos evaluando");
}
console.log("<-------- Declaración después del if***")

//  ++++++++++++ Operador Ternario +++++++++

console.log(`La edad es ${edad === 25 ? "igual":edad>24? "mayor": "menor"} a 25`);

edad = "25";
