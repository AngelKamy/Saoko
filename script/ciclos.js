//################### Ciclo While ###########################
console.log("\n ##########Ciclo While###########")

let findNumber= true;
let number = 1;

while(findNumber){
    if(confirm(`¿El número es ${number}?`) ){
        findNumber= false;
        alert (`Fantastico, tu número es el ${number++}`)
    }
    else if(number>10){
        findNumber= false;
        alert("Humano, ya vete, no sabes jugar");

    }
}