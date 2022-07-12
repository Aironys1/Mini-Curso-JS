console.clear();
let salario = 2100;
let desconto = 200;
let aumento = 150;
let comissao = 300
console.log("Salário: "+salario);
console.log("Desconto: "+desconto);
console.log("Comissão: "+comissao);
console.log("Aumento: "+aumento);
let total = console.log(salario + aumento + comissao -(desconto));

let adiantamento = (salario * 0.4)
console.log("Adiantamento: "+adiantamento);
let fgts = (salario * 0.08);
console.log("Fgts: "+fgts);
let transporte = (salario * 0.06);
console.log("Transporte: "+transporte);

desconto = (fgts + transporte + adiantamento);
console.log("Total de Desconto: "+desconto);

let ganhos = (comissao  + aumento + 500);
console.log("Seus ganhos totais: "+ganhos)


