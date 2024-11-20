function startDayCounter() {
    // Define a data de início da contagem (27 de junho de 2024)
    const startDate = new Date(2024, 5, 27); // Mês é zero-indexado (5 = junho)
    const currentDate = new Date();

    // Calcula a diferença em dias entre a data atual e a data de início
    const diffTime = currentDate - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    // Mostra a contagem inicial
    document.getElementById('days').textContent = diffDays >= 0 ? diffDays : 0;

    // Incrementa a contagem progressivamente a cada 24 horas (86400000 ms)
    setInterval(() => {
        let currentDays = parseInt(document.getElementById('days').textContent);
        currentDays++;
        document.getElementById('days').textContent = currentDays;
    }, 86400000);
}

// Inicia a contagem quando a página carrega
window.onload = startDayCounter;
