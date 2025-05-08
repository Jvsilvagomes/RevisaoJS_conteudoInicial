// Exercício 1: while para mostrar números de 1 a 5 no console.
// Exercício 2: for para mostrar os números pares de 0 a 10.
// Exercício 3: array de frutas do exercício anterior usando for.
let i = 1;

while(i < 6){
    console.log(i);
    i++;
}

console.log(`----------------------`);
for(let p = 0; p <= 10; p++){
    if(p % 2 == 0){
        console.log(p);
    }
}
console.log(`----------------------`);

let frutas = ["maça", "banana", "uva", "tomate"];

frutas.push("morango"); 
frutas.unshift("uva");  

for(i = 0; i < frutas.length; i++){
    console.log(`Fruta ${i+1}: ${frutas[i]}`);
  console.log("Eu gosto de " + frutas[i]);
}
