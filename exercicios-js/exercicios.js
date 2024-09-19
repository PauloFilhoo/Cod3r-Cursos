// Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação no final

// function Ola(nome)
// {
//     console.log(`Olá ${nome}!`)
// }

// Ola('paulo')
// Ola('Leonardo')

// Escreva uma função que receba a idade de uma pessoa em anos e retorne em dias

// function ConveterIdade(idade)
// {
//     console.log(idade * 365)
// }

// ConveterIdade(25)
// ConveterIdade(16)

// Calcular o salário de um funcionário no mês com horas e quanto ele ganha por hora

// function CalcularSalario(horas, ganhoHora)
// {
//     console.log(`Salário igual a R$:`, horas * ganhoHora)
// }

// CalcularSalario(20, 40.5)

// const meses = ['janeiro', '', '', '', '',
//     '', '', '', '', '', '']

// function PegarData(numero) {
//     switch (numero) {
//         case 1:
//             return console.log('janeiro')
//         case 2:
//             return console.log('fervereiro')
//         case 3:
//             return console.log('março')
//             break
//         case 4:
//             return console.log('abril')
//             break
//         case 5:
//             return console.log('maio')
//             break
//         case 6:
//             return console.log('junho')
//             break
//         case 7:
//             return console.log('julho')
//             break
//         case 8:
//             return console.log('agosto')
//             break
//         case 9:
//             return console.log('setembro')
//             break
//         case 10:
//             return console.log('outubro')
//             break
//         case 11:
//             return console.log('novembro')
//             break
//         case 12:
//             return console.log('dezembro')
//             break
//         default:
//             return console.log('Não válido')

//     }
// }

// PegarData(8)

// Crie uma função que receba dois numeros e retorne se o primeiro é maior que o segundo

// function MaiorOuIgual(num1, num2)
// {
//     if (typeof(num1) != typeof(num2))
//         return console.log('false')
//     console.log(num1 >= num2)
// }

// MaiorOuIgual(0, 0)
// MaiorOuIgual(0, "0")
// MaiorOuIgual(5, 1)

// Crie uma função que retorne o inverso

// function Inverter(parametro)
// {
//     if (typeof parametro == 'string')
//     {
//         console.log("booleano ou números esperados, mas o parâmetro é do tipo", typeof(parametro))
//     } else if (typeof parametro == 'number')
//     {
//         console.log(parametro * -1)
//     } else {
//         console.log(!parametro)
//     }
// }

// Inverter(true)
// Inverter("6")
// Inverter(2000)
// Inverter("programação")

// Está entre

// function EstaEntre(num, min, max, inclusivo)
// {
//     if (!inclusivo)
//     {
//         num < max && num > min ? console.log('true') : console.log('false')
//     } else {
//         num <= max && num >= min ? console.log('true') : console.log('false')
//     }
// }

// EstaEntre(10, 50, 100)
// EstaEntre(16, 100, 160)
// EstaEntre(51, 50, 100)
// EstaEntre(50, 50, 100, true)

// Não negativos e maiores ou iguais a 0 e realizar multiplcação

// function Multiplicar(num1, num2)
// {
//     let resultado = 0

//     for (let i = 0; i < Math.abs(num2); i++)
//     {
//         resultado += num1
//     }

//     if (num2 < 0)
//         resultado = -resultado

//     console.log(resultado)
// }

// Multiplicar(2, 2)
// Multiplicar(5, 5)
// Multiplicar(0, 0)
// Multiplicar(5, -4)