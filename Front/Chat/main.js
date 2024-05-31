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
    card1 = `
        <p>NÃO</p>
    `
    return card1
}

function texto(){
    chatBot.innerHTML += criarChat(mensagem.value);

    intervalo = setInterval(function() {
        chatBot.innerHTML += criarResposta();
        clearInterval(intervalo)
    }, 2000);
    
}
