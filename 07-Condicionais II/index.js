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

if (pessoa.idade >= 18 && pessoa.idade <=59){
    console.log(pessoa.nome +" é maior de idade");
}else if(pessoa.idade <=17){
    console.log("Menor de idade");

}else if (pessoa.idade >=60) {
    console.log("A pessoa é idosa")
}else {
    console.log("Valor inválido")
}
console.log(`${pessoa.nome} tem ${pessoa.idade} anos, e no momento ele está estudando ${pessoa.estudando.curso1} `)

