let button = document.getElementById("handleSubmit");

button.onclick = async function(){
    let nome     = document.getElementById("nome").value;
    let email    = document.getElementById("email").value;
    let senha    = document.getElementById("senha").value;

    let data     = {nome,email,senha}

    const response = await fetch('http://localhost:3000/api/aluno/create', {
        method: "POST",

        headers: {"Content-type": "application/json;charset=UTF-8"},
        body: JSON.stringify(data),
    });

    let content = await response.json();

    if(content.success){
        alert("Sucesso")
    } else {
        alert("Não");
    }
}