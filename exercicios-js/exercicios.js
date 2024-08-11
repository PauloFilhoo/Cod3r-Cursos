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

const meses = ['janeiro', '', '', '', '',
    '', '', '', '', '', '']

function PegarData(numero) {
    switch (numero) {
        case 1:
            return console.log('janeiro')
        case 2:
            return console.log('fervereiro')
        case 3:
            return console.log('março')
            break
        case 4:
            return console.log('abril')
            break
        case 5:
            return console.log('maio')
            break
        case 6:
            return console.log('junho')
            break
        case 7:
            return console.log('julho')
            break
        case 8:
            return console.log('agosto')
            break
        case 9:
            return console.log('setembro')
            break
        case 10:
            return console.log('outubro')
            break
        case 11:
            return console.log('novembro')
            break
        case 12:
            return console.log('dezembro')
            break
        default:
            return console.log('Não válido')

    }
}

PegarData(8)