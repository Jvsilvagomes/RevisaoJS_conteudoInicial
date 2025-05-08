
// IF/ELSE
let hora = 14;

if(hora < 12){
    console.log(`Bom Dia!`);
}else if(hora < 18){
    console.log(`Boa Tarde!`);
}else if(hora <= 24){
    console.log(`Boa Noite!`);
}else{
    console.log(`Hora inválida`);
}

console.log(`--------------------------`);

// SWITCH

let dia = "Segunda-Feira";

switch(dia){
    case("Domigo"):
        console.log(`Final de semana`);
        break
    case("Segunda-Feira"):
        console.log("Dia útil");
        break
    case("Terça-Feira"):
        console.log("Dia útil");
        break
    case("Quarta-Feira"):
        console.log("Dia útil");
        break
    case("Quinta-Feira"):
        console.log("Dia útil");
        break
    case("Sexta-Feira"):
        console.log("Dia útil");
        break
    case("Sábado"):
        console.log("Final de semana");
        break
    default:
    console.log("Outro dia")
}