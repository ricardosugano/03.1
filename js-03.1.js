// CLASSES NO JAVASCRIPT

//CRIANDO UMA CLASSE

// nomes de classes devem iniciar com a primeira letra maiúscula
class Carro {
// Para criar os Atributos da Classe deve-se utilzar o método "constructor"
constructor(marca, modelo, ano){
    // this representa a instância (objeto)
    // o valor que for enviado a classe será atribuído a instancia
    // atributos
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}
// métodos
buzinar(){
    return "Beep! Beep!";
}
}
//criando instâncias (objetos) derivadas da classe carro

const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(`<p> O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano de ${carroPopular.ano}. Quando buzina faz ${carroPopular.buzinar()}</p>`)

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet"
carroEsportivo.modelo = "Camaro"
carroEsportivo.ano = 2024
carroEsportivo.turbo = () => {
    return "Vruuuuummm! O carro está acelerando muito!!!";
};
document.write(`<p> O carro ${carroEsportivo.marca} modelo ${carroEsportivo.modelo} é do ano de ${carroEsportivo.ano}. Quando buzina faz ${carroEsportivo.turbo()}</p>`)



//adicionando um novo atributo
carroEsportivo.corNeon = "Azul";



// adicionando um novo método


document.write(`<p> O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa turbo ${carroEsportivo.turbo()}</p>`)