// MANIPULAÇÃO DE DATAS

document.write("<h3>Manipulando datas: </h3>")
// CRIAR UMA INSTÂNCIA DA CLASSE Date() do Javascript

const dataAtual = new Date();
document.write(dataAtual)

const dia = dataAtual.getDate();
document.write(`<p> hoje é dia: ${dia} </p>`)
const mes = dataAtual.getMonth()+1;
document.write(`<p> Estamos no mês : ${mes} </p>`)
const ano = dataAtual.getFullYear();
document.write(`<p> Ano atual : ${ano} </p>`)
const diaSemana = dataAtual.getDay()+1;
document.write(`<p> Dia da semana : ${diaSemana} </p>`)


//ADICIONANDO DIAS MESES E ANOS À DATA ATUAL

//ADICIONANDO 4 ANOS AO ANO ATUAL

//dataAtual.setFullYearFullYear(dataAtual.getFullYear() + 4);
//document.write(`<p>Daqui a 4 anos será : ${dataAtual.getFullYear()} </p>`)


//FORMATAÇÃO DE MOEDAS
//Real
document.write(`<h3> FORMATAÇÃO DE MOEDAS</h3>`)
const salario = 1512
const salarioReal = salario.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL",
});
document.write(`<p> O valor do salário mínimo atual é : ${salarioReal} </p>`)

//DOLAR
const salarioDolar = salario.toLocaleString("en",{
    style: "currency",
    currency: "USD",
});
document.write(`<p> Salário em dólar ${salarioDolar}. </p>`);


const salarioConvertido = salario* 0.176
document.write(`<p> Salário em dólar ${salarioConvertido}. </p>`);

//currency: EUR -> Euro

//FORMATAÇÃO DE STRING (textos)
document.write("<h3>Formatação de Strings: </h3>");
const nome = "Ricardo Nobuo Sugano";


//ALTERANDO PARA LETRAS MAIÚSCULAS - toUpperCase()
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p> `)

//ALTERANDO PARA LETRAS MINÚSCULAS - toUpperCase()
document.write(`<p>Nome em maiúsculas: ${nome.toLocaleLowerCase()}</p> `)

//REMOVENDO ESPAÇOS DA STRING
const novoNome = nome.replace(/\s/g, "")


// contando caractares de uma string - .length
document.write(`<p>Esse nome tem: ${novoNome.length} letras.</p> `)


