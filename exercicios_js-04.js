// Função para ativar o modo escuro
function ativarModoEscuro() {
    console.log("Ativando modo escuro");
    const container = document.getElementById('container');
    const modeIndicator = document.getElementById('modeIndicator');
    
    container.classList.add('dark-mode');
    modeIndicator.textContent = 'Modo Atual: Escuro';
    
    // Altera o fundo do body também para garantir transição suave
    document.body.style.backgroundColor = '#1a1a2e';
}

// Função para ativar o modo claro
function ativarModoClaro() {
    console.log("Ativando modo claro");
    const container = document.getElementById('container');
    const modeIndicator = document.getElementById('modeIndicator');
    
    container.classList.remove('dark-mode');
    modeIndicator.textContent = 'Modo Atual: Claro';
    
    // Restaura o fundo do body
    document.body.style.backgroundColor = '#f0f0f0';
}

// Verifica se as funções estão disponíveis globalmente
console.log("Script carregado. Funções disponíveis:");
console.log("ativarModoEscuro: " + typeof ativarModoEscuro);
console.log("ativarModoClaro: " + typeof ativarModoClaro);