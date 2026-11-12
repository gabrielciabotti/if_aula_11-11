const idade = +prompt('digite sua idade!');

if (idade >= 18) {
    console.log('Acesso liberado! divirta-se!');
}

if (idade < 18) {
    console.log('Acesso negado');
}

// ex:2
const senhaCorreta = 'front123';
const senhaDigitada = prompt('digite a senha de acesso');

if (senhaDigitada === senhaCorreta){
    console.log ('Login efetuado com sucesso')
}
if (senhaDigitada !== senhaCorreta){
    console.log('Senha incorreta')
}
// ex:3
let valorCompra = +prompt("Digite o valor da compra");
if (valorCompra > 100 ){
    valorCompra = valorCompra - 10
}
console.log ('total a pagar é:', + valorCompra);
// ex: 4

let quantidade = +prompt ('quantidade de produtos comprados')
let valorgasto = +prompt ('valor gasto')
pontos = 10

if (quantidade >= 5){
    pontos = pontos + 50
}
if (valorgasto >= 200){
    pontos = pontos + 100
}
console.log("total de pontos" + 100)

// Ex:5
let salario = +prompt('Salario base vendedor');
let toralVendas = +prompt ("Total de vendas");
let notaAvaliacao = +prompt ("nota de avaliação (de 0 a 10)")

let salarioFinal = salarioBase;
 if(totalVendas > 5000 && notaAvaliacao >=8);
 let bonus = salarioBase + bonus;
 salarioFinal.log("salario final" + salarioFinal)
 
 //ex6
 let valorPedido = +prompt ("valor do pedido")
 let distaciaKm = +prompt("distancia em KM:")

 let taxaEntrega = 10;

 if (valorPedido < 20 || distanciaKm >10){
    taxEntraga = taxaEntrega + 5
 }
 let valorToral = valorPedido + taxaEntrega;

 console.log ("valor total de pedido é:" + valorTotal);
 