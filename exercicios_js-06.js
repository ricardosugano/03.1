// Definição da classe Heroi
class Heroi {
    constructor(nome, vida, velocidade, forca) {
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

    correr() {
        return `${this.nome} está correndo a ${this.velocidade} km/h!`;
    }

    andar() {
        return `${this.nome} está andando calmamente.`;
    }

    atacar() {
        return `${this.nome} ataca com força de ${this.forca} pontos!`;
    }

    defender() {
        return `${this.nome} está se defendendo com ${this.vida} pontos de vida.`;
    }
}

// Array para armazenar os heróis
const herois = [];

// Função para adicionar um log no console
function addLog(mensagem) {
    const consoleOutput = document.getElementById('consoleOutput');
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = document.createElement('div');
    logEntry.className = 'log';
    logEntry.innerHTML = `<span class="timestamp">[${timestamp}]</span> ${mensagem}`;
    consoleOutput.appendChild(logEntry);
    consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

// Função para criar um herói a partir dos dados do formulário
function criarHeroi() {
    const nome = document.getElementById('nome').value;
    const vida = parseInt(document.getElementById('vida').value);
    const velocidade = parseInt(document.getElementById('velocidade').value);
    const forca = parseInt(document.getElementById('forca').value);
    
    if (!nome || isNaN(vida) || isNaN(velocidade) || isNaN(forca)) {
        addLog('Erro: Preencha todos os campos corretamente!');
        return;
    }
    
    const novoHeroi = new Heroi(nome, vida, velocidade, forca);
    herois.push(novoHeroi);
    renderizarHerois();
    addLog(`Herói "${nome}" criado com sucesso!`);
    
    // Limpar o formulário
    document.getElementById('nome').value = '';
    document.getElementById('vida').value = '100';
    document.getElementById('velocidade').value = '50';
    document.getElementById('forca').value = '80';
}

// Função para renderizar os heróis na tela
function renderizarHerois() {
    const heroisContainer = document.getElementById('heroisContainer');
    heroisContainer.innerHTML = '';
    
    herois.forEach((heroi, index) => {
        const card = document.createElement('div');
        card.className = 'heroi-card';
        
        card.innerHTML = `
            <h2 class="heroi-nome">${heroi.nome}</h2>
            <div class="heroi-atributo">
                <span>Vida:</span>
                <span class="atributo-valor">${heroi.vida}</span>
            </div>
            <div class="heroi-atributo">
                <span>Velocidade:</span>
                <span class="atributo-valor">${heroi.velocidade}</span>
            </div>
            <div class="heroi-atributo">
                <span>Força:</span>
                <span class="atributo-valor">${heroi.forca}</span>
            </div>
            <div class="acoes">
                <button class="btn" onclick="acaoHeroi(${index}, 'correr')">Correr</button>
                <button class="btn" onclick="acaoHeroi(${index}, 'andar')">Andar</button>
                <button class="btn" onclick="acaoHeroi(${index}, 'atacar')">Atacar</button>
                <button class="btn" onclick="acaoHeroi(${index}, 'defender')">Defender</button>
            </div>
        `;
        
        heroisContainer.appendChild(card);
    });
}

// Função para executar uma ação do herói
function acaoHeroi(index, acao) {
    const heroi = herois[index];
    let mensagem;
    
    switch(acao) {
        case 'correr':
            mensagem = heroi.correr();
            break;
        case 'andar':
            mensagem = heroi.andar();
            break;
        case 'atacar':
            mensagem = heroi.atacar();
            break;
        case 'defender':
            mensagem = heroi.defender();
            break;
    }
    
    addLog(mensagem);
}

// Criar alguns heróis iniciais
const superman = new Heroi("Superman", 1000, 800, 999);
const batman = new Heroi("Batman", 500, 35, 85);
const flash = new Heroi("Flash", 700, 2000, 75);

herois.push(superman, batman, flash);

// Renderizar os heróis iniciais
renderizarHerois();

// Mensagem inicial
addLog("Sistema de Heróis iniciado. Três heróis foram criados automaticamente!");