# pokemon-web-game

// pokemon.js

Desenvolvi uma classe pokemon para guardar de forma pratica as informacoes de cada pokemon que é buscado na api externa. Usei uma api externa que basta procurar pelo nome do pokemon ou id da pokedex que me retorna diversos dados valiosos que usei para desenvolver essa aplicacao. https://pokeapi.co/

Alguns fatores, como o nivel, sexo e se é shiny, eu mesmo fiz funcoes para gerar aleatoridade e ter respostas diferentes.

Enfrentei um problema sobre o servidor raw.githubusercontent.com recusar algumas requisições. Eu conseguia acessar o valor na api e guarda-lo, a questao era que para alguns pokemons a foto pixelizada dele (icone) nao aparecia. Tentei varias coisas, como usar um delay, mas mesmo assim me deparava com o mesmo problema. Ate que eu decidi instalar todas as imagens localmente.



O documento pokedex.js serve para exibir todos os pokemons e é nele onde gero uma variavel global "pokedex" que servira como banco de dados de todos os pokemons. Fiz isso para nao estar tendo que fazer fetch toda hora.

O documento pokemon.js é onde crio a classe pokemon, onde tem todas as informacoes necessarias para o jogo. neste ficheiro tem a funcao fecth para buscar na api e onde eu guardo esses dados numa instancia da classe pokemon.

O documento temporizador.js serve para criar uma classe de tempo onde tem horas minutos e segundos. tambem tem como iniciar, pausar e obter o tempo. Essa classe é usada na classe Jogador para marcar o tempo que o que o jogador começou o jogo.

O documento jogador.js tem nele uma classe jogador. Serve para criar uma nova instacia de jogador, nele tem todas as informaçoes do jogador.

O documento inventario.js tem todos os itens dentro do jogo. Utilizado no armazenamentos de itens do jogador e da loja. Utilizei um dicionario para guardar os itens pois fica mais facil fazer busca de chave e valor, assim sendo, fica facil para adicionar ou diminuir os itens.

O documento loja.js tem a classe loja, onde podemos comprar os itens.

No app.js é o coracao do projeto. Nele eu começo por rodar na seguinte ordem, pegar todos os movimentos e suas informacoes guardando numa variavel global com todos os movimentos, depois pego todos os pokemons. Faço fectch tanto para buscar movimento como para pokemon. Depois eu conecto os movimentos da variavel global pelos movimentos dos pokemons, faço essa coneccao a partir do id de cada movimento.  