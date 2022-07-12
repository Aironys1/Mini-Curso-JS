console.clear();
console.clear();
const pessoa = {
    nome: "Aironys",
    idade: 31,
    sexo: "Masculino",
    altura: 1.70,
    maiorDeIdade:"true",
    estudando:{
        curso1:"Java Script",
        curso2:"Node JS",
        curso3:"React JS"

    }
}

if (pessoa.idade >= 18){
    console.log("Maior de idade");
}else if(pessoa.idade <=17){
    console.log("Menor de idade");
}else {
    console.log("Valor inválido")
}
