const chatBot = document.querySelector(".div-elementos-conversa");
const button = document.querySelector("#enviar");

button.click = function(event) {
    console.log(event);
    criarChat()
}


function criarChat () {
    card = `
        <p>Pergunta dexapodajisaj</p>
      `;
    return card;
}

function texto(){
    chatBot.innerHTML += criarChat();
}
