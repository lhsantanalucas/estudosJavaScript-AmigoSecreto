let amigos = [];
function adicionar() {

    let nomeAmigo = document.getElementById('nome-amigo').value;

    if(amigos.includes(nomeAmigo)) {
        alert('Este nome já foi incluído na lista de Amigos. Digite um novo nome.');
    } else if(nomeAmigo == '') {
        alert('O nome do amigo não pode ser vazio.');
    } else {
        amigos.push(nomeAmigo);
        console.log(amigos);
    }   

    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';

    let amigosIncluidos = document.getElementById('lista-amigos');
    amigosIncluidos.innerHTML = `<p id="lista-amigos">${amigos}</p>`;
}

function sortear() {
    
    if(amigos.length < 4) {
        alert('O número de amigos deve ser no mínimo igual a 4. Adicione mais amigos.');
        return adicionar();
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }      
    }
}

function embaralha(lista) {
    
    for(let indice = lista.length; indice; indice--) {
        
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
        [lista[indiceAleatorio], lista[indice-1]];
    }
}

function reiniciar() {
    amigos = [];
    let amigosIncluidos = document.getElementById('lista-amigos');
    amigosIncluidos.innerHTML = `<p id="lista-amigos">${amigos}</p>`;
    nomeAmigo = document.querySelector('input');
    nomeAmigo.value = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}