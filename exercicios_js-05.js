document.write("<h3>Data e Moeda: Compra Internacional</h3>");
const dataAtual = new Date();
document.write(`<p>Data e hora atuais: ${dataAtual}</p>`);


const compraInternacional = 500.75;
const valorEmDolar = compraInternacional.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});
document.write(`<p>Valor da compra em dólar: ${valorEmDolar}</p>`);


const valorEmReal = compraInternacional.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
});
document.write(`<p>Valor da compra em reais: ${valorEmReal}</p>`);


const dataEntrega = new Date(dataAtual); 
dataEntrega.setDate(dataEntrega.getDate() + 12);


const dia = dataEntrega.getDate().toString().padStart(2, "0");
const mes = (dataEntrega.getMonth() + 1).toString().padStart(2, "0");
const ano = dataEntrega.getFullYear();


document.write(`<p>Data estimada de entrega: ${dia}/${mes}/${ano}</p>`);

