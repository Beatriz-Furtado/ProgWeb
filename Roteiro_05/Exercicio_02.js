function verificarTCC(E, D) {
    if (E > D) {
        console.log("Eu odeio o prof. Florovsky!");
        return;
    }
    
    if (D - E >= 3) {
        console.log("Muito bem! O aluno está apto a apresentar até o natal!");
    } else {
        console.log("O trabalho está muito ruim!");
        
        E += 2;
        
        if (E < 24) {
            console.log("TCC Apresentado!");
        } else {
            console.log("Não deu! Só no próximo ano agora.");
        }
    }
}

verificarTCC(13, 19);
verificarTCC(22, 23);
verificarTCC(21, 22);
