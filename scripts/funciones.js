console.log("Sesión JS02 funciones")
/**
 * Este es un ejemplo de función declarada
 * Realiza la multiplicación de dos numeros
 * @param {Number} a factor 2
 * @param {Number} b factor 1 
 * @returns resultado multiplicación
 */

function multiplica(a,b){
    return a*b;
}

console.log("Multiplica 5 * 6 =" + multiplica(5,6));

/**+++++++++++ Función expresada ++++++++++
 * las funciones expresadas (function expressions)
 * son declardas dentro de la asignación de una variable
 * 
 * Estas funciones pueden ser anónimas (no tienen nombre).
 * Las funciones expresadas no tienen hoisting.
 */

/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns suma de a + b
 */

const suma= function(a,b){ return a+b;}
console.log("La suma de 56 + 4 es " + suma(56,4));

/** ++++++++++++++++ Funciones Autoinvocadas +++++++++++
 *  Las funciones autoinvocadas (self-invoking functions)
 * Pueden ser anónimas y se autoejecutan en su declaración
 */

(function (){
    console.log("==========");
    console.log("Holi Crayoli")
    console.log("==========");
})();

// +++++++++++++++++ Funciones Flecha ++++++++++++++++++++

/**
 * Las funciones flecha (arrow fuction) funcionan similar
 * a las funciones declaradas pero no requieren la 
 * palabra "function" y si tienen una sola instrucción y es el retorno
 * no requiere la instrucción "return"
 */

const resta = (a,b) => a-b;
console.log("La resta de 10 y 5 es igual a: " + resta(10,5));


//función con parametro incializados

// ++++++++++++ Funciones recursivas +++++++++++++
function factorial(num){
    if(num<=0) return 1;
    return (num*factorial(num-1));

}