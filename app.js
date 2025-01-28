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

//Funcion para recorrer el Array
function recorrerLista(){
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = "";

    for(let i = 0; i < listaAmigos.length; i++){

        const li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaHtml.appendChild(li)
    }
}