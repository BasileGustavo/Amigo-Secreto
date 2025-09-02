let amigos = [];
function adicionarAmigo() {
    const nomeAmigoInput = document.getElementById('amigo');
    const nomeAmigo = nomeAmigoInput.value.trim();
    const listaAmigos = document.getElementById('listaAmigos');
    amigos.push(nomeAmigo);
    const novoAmigoItem = document.createElement('li');
    novoAmigoItem.textContent = nomeAmigo;
    listaAmigos.appendChild(novoAmigoItem);
    nomeAmigoInput.value = '';
    nomeAmigoInput.focus();
}
function sortearAmigo() {
     const listaAmigos = document.getElementById('listaAmigos');
    const resultadoDiv = document.getElementById('resultado');
    listaAmigos.innerHTML = '';
    resultadoDiv.innerHTML = '';
    if (amigos.length < 1) {
        alert('Por favor, insira nomes válidos!');
        return;
    }    
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultadoItem = document.createElement('li');
    resultadoItem.textContent = amigoSorteado;
    resultadoDiv.appendChild(resultadoItem);
    resultadoItem.textContent = (`O amigo sorteado foi: ${amigoSorteado}`);
}



