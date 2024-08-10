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

const meses = ['janeiro', 'fervereiro', 'março', 'abril', 'junho',
     'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

function PegarData(numero)
{
    if (numero < 1)
    {
        console.log('Digite um valor válido')
    } else {
        console.log(meses[numero - 1])
    }
}

PegarData()