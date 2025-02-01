let ListaAmigos = [];

// usar o array para adicionar nomes de amigos utilizando o botao Adicionar
function adicionarAmigo() {
    let nomeDoAmigo = document.querySelector('input').value;
    if (nomeDoAmigo == '') {
        alert('Por favor, insira um Nome.'); 
        return false; 
    } else {
        limparLista();
        ListaAmigos.push(nomeDoAmigo);
        let lista = document.getElementById('listaAmigos');
        for (i = 0; i < ListaAmigos.length; ++i) {
            let li = document.createElement('li');
            li.innerText = ListaAmigos[i];
            lista.appendChild(li);
        }
        limparCampo();
    }
}

// realizar o sorteio de um dos amigos do array ListaAmigos[] se o campo estiver vazio
function sortearAmigo() {
    if (ListaAmigos =='') {
        alert('Por favor, insira um nome.');
    } else {
        let amigoSecreto = ListaAmigos[Math.floor(Math.random() * ListaAmigos.length)];
        let amigo = document.querySelector('resultado');
        resultado.innerHTML = amigoSecreto;
    }
    limparLista();
}

// limpar o campo de input após adicionar o nome do amigo
function limparCampo() {
    nomeDoamigo = document.querySelector('input');
    nomeDoamigo.value = '';
}
// limpeza da lista abaixo do campo input, com o intuito de nao haver duplicatas de listas 
function limparLista() {
    lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}