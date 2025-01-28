let listaAmigos = [];

//funcion para agregar amigos a la lista
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value; 
    if (amigo != ""){
        listaAmigos.push(amigo);
        recorrerLista();
    }

    else{
        alert("Por favor, inserte un nombre.");
    }

    limpiarEntrada("amigo");
}

//Limpiar entrada
function limpiarEntrada(texto){
    document.getElementById(texto).value = "";
}

//Recorrer el Array
function recorrerLista(){
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";

    for(let i = 0; i < listaAmigos.length; i++){

        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaHtml.appendChild(li)
    }
}

//Amigo aleatorio
function sortearAmigo(){
    if (listaAmigos.length > 0){
        let amigoSecreto = Math.floor(Math.random() * listaAmigos.length);
        document.getElementById("resultado").innerText = `El amigo secreto es: \n${listaAmigos[amigoSecreto]}`;
    }
    else{
        alert("Ingresa primero los participantes del juego")
    }
}