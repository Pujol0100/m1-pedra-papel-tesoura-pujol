function playRockPaperScissor(player1, player2) {
    
    if (!["Pedra", "Papel", "Tesoura"].includes(player1) && !["Pedra", "Papel", "Tesoura"].includes(player2) ) {
    }

    const regras = {
      Pedra: {
        vence: "Tesoura",
        perde: "Papel",
      },
      Papel: {
        vence: "Pedra",
        perde: "Tesoura",
      },
      Tesoura: {
        vence: "Papel",
        perde: "Pedra",
      },
    };
  
    if (player1 === player2) {
      return "Empate!";
    }

    const vencedor = regras[player1].vence === player2 ? "Jogador 1 venceu!" : "Jogador 2 venceu!";
       
    
    return vencedor;

  }