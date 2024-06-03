const chatBot = document.querySelector(".div-elementos-conversa");
const button = document.querySelector("#enviar");
const mensagem = document.getElementById("mensagem");

function criarChat(msg) {
    card = `
        <p id="mensagem_user">${msg}</p>
      `;
    return card;
}

function criarResposta(){
    if (mensagem.value.includes("me ajuda")){
        card1 = `
        <p>Toma no teu então</p>
        `
        return card1
    }
    else{
        card1 = `
        <p>Não</p>
        `
        return card1
    }
    
}

function texto(){
    chatBot.innerHTML += criarChat(mensagem.value);

    intervalo = setInterval(function() {
        chatBot.innerHTML += criarResposta();
        clearInterval(intervalo)
    }, 2000);
    
}
