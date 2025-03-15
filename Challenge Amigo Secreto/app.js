//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Array para armazenar os nomes

function adicionarAmigo() {
    // Captura o valor de entrada e o armazena em uma variável
    let inputAmigo = document.getElementById("amigo");

    // Obtém o valor de entrada e remove espaços extras
    let nomeAmigo = inputAmigo.value.trim();

    // Verifica se o nome contém apenas letras e espaços
    let nomeValido = /^[A-Za-zÀ-ÿ\s]+$/.test(nomeAmigo);

    // Se o campo estiver vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome."); // Alert pedindo para inserir um nome
        return; // Sai da função se o nome estiver vazio
    }

    // Se o nome conter caracteres inválidos (números ou símbolos)
    if (!nomeValido) {
        alert("Por favor, insira um nome válido."); // Alert pedindo para inserir um nome válido
        return; // Sai da função se o nome for inválido
    }

    // Verifica se o nome já foi listado
    if (amigos.includes(nomeAmigo)) {
        alert(`O nome ${nomeAmigo} já foi adicionado à lista anteriormente.`); // Alert avisando que o nome já foi inserido
        return;
    }

    // Se o nome for válido, adiciona o nome ao array amigos
    amigos.push(nomeAmigo);

    inputAmigo.value = ""; // Limpa o campo de entrada após adicionar o nome à lista

    atualizarListaAmigos(); // Chama a função para atualizar a lista na tela
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos"); // Captura a lista

    listaAmigos.innerHTML = ""; // Limpa a lista para evitar duplicação

    // Acessando os nomes para adicioná-los à lista
    for (let i = 0; i < amigos.length; i++) {
        let nomeAmigo = amigos[i]; // Acessa o nome do amigo no índice i
        let li = document.createElement("li"); // Cria um novo item de lista
        li.textContent = nomeAmigo; // Define o texto do item como o nome do amigo
        listaAmigos.appendChild(li); // Adiciona o item à lista
    }
}

function sortearAmigo() {
    // Verifica se a lista de amigos não está vazia
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório para sortear
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado]; // Acessa o nome do amigo sorteado

    amigos.splice(indiceSorteado, 1); // Remove o nome sorteado do array

    // Exibe o nome sorteado no elemento de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: ${amigoSorteado}!`;

    atualizarListaAmigos(); // Atualiza a lista após o sorteio
}