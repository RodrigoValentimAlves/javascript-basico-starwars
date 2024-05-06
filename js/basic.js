console.log('Ola, JavaScript!')

var userName = 'Rodrigo Valentim'

document.getElementById('userName').innerHTML = userName

// Variáveis

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedai = true

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof jedai)

// Operadores Matemáticos
// var n1 = 5
// var n2 = 2.5

// console.log(typeof n1)
// console.log(typeof n2)

// var total = (n1 + n2)
// console.log(total)

// Operadores de comparação

// var v1 = 5
// var v2 = '5'

// var resultado = v1 !== v2
// console.log(resultado)

// funções

// function soma(n1, n2) {
//     console.log(n1 + n2)
// }
// soma(5, 5)

// function boasVindas(nome) {
//     alert(nome + ', seja bem vindo(a)')
// }

// boasVindas('Rodrigo')

// function soma(n1, n2) {
//     return(n1 + n2)
// }
// var resultado = soma(5, 5)
// console.log(resultado)

// Controle de fluxos

// Sendo um cliente correntista do banco 
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// var saldo = 1000

// function saque (valor) {
//     if (valor > saldo){
//         console.log('Saldo insuficiente')
//     } else if(valor > 700 ){
//         console.log('Valor do saque é superior ao máximo permitido por operação')
//     }
//     else {
//         saldo = saldo - valor
//     }
    
// }

// saque(701)
// console.log(saldo)

// Cenário 1: Saque com Sucesso
// Dado que eu tenho R$ 1000,00 na minha conta corrente
// Quando eu faço um saque de R$ 500,00
// Então o valor do saque deve ser deduzido do meu saldo total

// Cenário 1: Saque com valor superior ao saldo
// Dado que eu tenho R$ 1000,00 na minha conta corrente
// Quando eu faço um saque de R$ 1200,00
// Então a operação deverá ser negada sem dedução do valor da conta
// E deverá ser apresentada uma mensagem informativa

// Cenário 3: Saque com valor máximo
// Dado que eu tenho R$ 1000,00 na minha conta corrente
// E o valor máximo por operação é R$ 700
// Quando realizo um saque no valor de R$ 701
// Então a operação deverá ser negada sem dedução do valor da conta
// E deverá ser apresentada uma mensagem informativa

// Array

// var personagens = ['Yoda', 'Luke', 'Princesa', 'Han']
// console.log(personagens[1])

// personagens = personagens.filter(function (p){
//     return p !== 'Luke'
// })

// Controles de repetição ou loops

// var personagens = ['Yoda', 'Luke', 'Princesa', 'Han', 'Dart Vader']
// personagens.forEach(function(p) {
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
// }

// yoda.nome = 'Yoda'
// yoda.idade = 100
// yoda.jedi = true
// yoda.outro_campo = 'Alguma coisa'

// super variável
// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos` )
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

const nome = 'Yoda'
console.log(nome)

nome = 'Darth Vader'
console.log(nome)


