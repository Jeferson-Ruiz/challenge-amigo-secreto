let listaAmigos = [];

//funcion para agregar amigos a la lista
function agregarAmigo(){
    let amigo = document.getElementById("amigo").value; 
    if (amigo != ""){
        listaAmigos.push(amigo);
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

