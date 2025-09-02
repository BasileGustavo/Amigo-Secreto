Sorteador de Amigo Secreto
Este projeto é uma aplicação web simples e interativa para sortear amigos em um evento de amigo secreto. A interface permite que os usuários adicionem nomes a uma lista e, com um clique, realizem um sorteio que exibe um único nome aleatório da lista.

Funcionalidades
Adicionar Participantes: Um campo de texto e um botão permitem que os usuários insiram os nomes dos amigos um por um.

Listar Participantes: Os nomes adicionados são exibidos em uma lista dinâmica na página, para que o usuário possa visualizar quem está participando.

Sorteio Aleatório: Ao clicar no botão "Sortear", um nome é selecionado de forma aleatória entre todos os participantes.

Interface Limpa: Após o sorteio, a lista de nomes desaparece, deixando na tela apenas o nome da pessoa sorteada, proporcionando uma experiência de usuário clara e direta.

Tecnologias Utilizadas
HTML: Estrutura a página web, incluindo o formulário de entrada, a lista de participantes e os botões.

CSS: Estiliza a aplicação, garantindo um design agradável e intuitivo.

JavaScript: Responsável por toda a lógica da aplicação, incluindo:

Manipulação do DOM para adicionar e remover elementos da página.

Armazenamento dos nomes em um array.

Implementação do algoritmo de sorteio para escolher um nome aleatório.

Exibição do nome sorteado e limpeza da lista de participantes.

Como Usar
Abra o arquivo index.html em seu navegador.

Digite o nome de um amigo no campo de texto e clique no botão "Adicionar".

Repita o processo para incluir todos os participantes.

Quando todos os nomes estiverem na lista, clique no botão "Sortear amigo".

A lista de nomes irá sumir, e o nome do amigo sorteado aparecerá na tela.

Estrutura do Projeto
.
├── assets/
│   ├── amigo-secreto.png
│   └── play_circle_outline.png
├── app.js
├── index.html
└── style.css
index.html: O arquivo principal com a estrutura da página.

style.css: O arquivo de estilos para o layout da aplicação.

app.js: O arquivo JavaScript que contém toda a lógica do sorteio.

assets/: A pasta que armazena as imagens usadas no projeto.
