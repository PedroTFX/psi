# psi

Execução do projeto

As características deste projeto requerem uma equipa composta por 5 elementos, com competências e responsabilidades bem definidas e distintas, que serão avaliadas. Devido à importância do projeto, o processo de avaliação seguirá regras rigorosas. A constituição das equipas é realizada na atividade Grupos de PSI na página de PSI no Moodle. O projeto seguirá uma metodologia de desenvolvimento de software inspirada na metodologia Kanban, que possui papéis e atividades bem definidos, operacionalizada pela plataforma JIRA Agile.

Como parte da metodologia Kanban, o conjunto de funcionalidades a implementar durante cada sprint é definido no início do sprint. O backlog inicial é composto pelos itens abaixo (estes itens podem sofrer alterações a qualquer momento). Todos estes itens têm os seguintes critérios de aceitação em comum: (i) deve ser possível concluir o processo num browser desktop ou mobile; (ii) deve ser possível concluir o processo num browser desktop sem usar o rato.

US01 - alta		✅ Create account
	❌ Indicar qual ou quais os requisitos que não foram cumpridos
US02 - alta		✅ Login
US03 - alta		- Dashboard - listas de jogos, biblioteca (items comprados), seguidores e pessoas que me seguem
US04 - alta		- Perfil - username, profile photo, biblioteca (items comprados), wishlist, listas de jogos, seguidores e pessoas que me seguem
US05 - média	- Editar perfil - username deve ter mais de 2 chars alfanuméricos e deve ser único
US06 - alta		- Pesquisa - titulo do item (podemos também pesquisar descrição se não houverem resultados)
US07 - baixa	- Pesquisar users
US08 - baixa	- Ver perfil de outros users (a partir da pesquisa)
US09 - baixa	- Seguir utilizador
US10 - alta		- Ver items - imagem principal, 2 outras imagens opcionais, link para video opcional, tipo (jogo, DLC, subscrição), descrição, plataforma, idiomas, preço, classificação geral, avaliações
US11 - média	- Adicionar item ao carrinho de compras
US12 - média	- Visualizar e gerir items no carrinho de compras (ver nome, tipo, preço e quantidade, valor total, alterar quantidade e eliminar items)
US13 - média	- Fazer checkout (pedir NIF, morada opcional, duas opções de métodos de pagamento, 50% de probabilidade do pagamento ter sucesso, sucesso ? adicionar item à biblioteca e remover da wishlist)
US14 - alta		- Ver bilbioteca (data de aquisição, preço, ordenar por data de aquisição)
US15 - média	- Avaliar item adquirido (classificação 1-5 estrelas, comentário opcional com limite de 5000 chars)
US16 - baixa	- Interagir com avaliações de outros (gosto/like e opcionalmente uma resposta com limite de 5000 chars)
US17 - média	- Ver wishlist
US18 - baixa	- Ver wishlist de outros
US19 - média	- Adicionar item à wishlist
US20 - média	- Remover item da wishlist
US21 - baixa	- Criar listas de items (nome com 100 chars, pública ou privada)
US22 - baixa	- Ver listas de items
US23 - baixa	- Ver listas de items públicas de outros users
US24 - baixa	- Gerir listas de items (adicionar/remover items, editar nome)
US25 - baixa	- Comprar item como presente para outro utilizador (apenas items que o receptor não tenha e remover da sua wishlist)
US26 - baixa	- Aceitar item como presente (notificar quem enviou presente que foi aceite)
US27 - baixa	- Recusar item como presente (notificar quem enviou presente que não foi aceite)



As funcionalidades serão implementadas ao longo de 2 sprints de desenvolvimento de software, cada um com duas semanas de duração.

Em cada sprint pretende-se que seja construída uma versão completa de funcionalidades do sistema de informação na framework escolhida. No final de cada sprint é feita uma demonstração das funcionalidades.

Restrições

Quaisquer imagens e vídeos ilustrativos devem estar alojados externamente.

Entregas

No final de cada sprint deve ser entregue um vídeo com a demonstração das funcionalidades implementadas durante o sprint e um relatório que indique, das user stories no sprint backlog, o que foi completado no sprint e o estado do que ficou por completar.

Os vídeos, com um máximo de 2 minutos, que demonstram os resultados obtidos em cada sprint devem ser entregues através da atividade existente na página da disciplina no Moodle. O nome do ficheiro deve seguir o seguinte formato: psi_xxx_sprint_y, onde xxx é o número do grupo e y o número do sprint.

Os relatórios, com um máximo de 2 páginas, devem ser entregues através da mesma atividade. O nome do ficheiro deve seguir o seguinte formato: psi_xxx_sprint_y, onde xxx é o número do grupo e y o número do sprint.
Avaliações

A avaliação do projeto tem em consideração a qualidade do produto desenvolvido e a qualidade do processo de desenvolvimento. Os dois sprints têm o mesmo peso na avaliação.
Aspetos técnicos

Os projetos utilizarão servidores implementando o stack tecnológico MEAN (MongoDB, Express, Angular, NodeJS). Os clientes terão obrigatoriamente de ser browsers web. É ainda necessário estruturar o sistema de informação de acordo com as seguintes quatro camadas: 1) cliente browser; 2) servidor web com lógica de apresentação; 3) servidor aplicacional com regras de negócio; e 4) servidor de base de dados.
Plataforma de execução do projeto

O projeto deve ser executado no servidor appserver.alunos.di.fc.ul.pt

O acesso ao servidor é feito através de ssh sendo o username o número do grupo. A password inicial é também o número do grupo e deve ser alterada após o primeiro login

> ssh psi050@appserver.alunos.di.fc.ul.pt

O appserver tem instalados node, npm e mongo. Todos os módulos necessários para funcionamento do projeto devem ser instalados recorrendo ao npm.

Cada grupo tem uma base de dados criada no servidor mongo. O nome da base de dados é igual ao número do grupo (p.ex. o grupo psi050 deve usar a base de dados psi050).

Cada grupo tem um utilizador no servidor mongo. O nome do utilizador é igual ao número do grupo. A password também é igual ao número do grupo. Para acederem à consola do mongo usem o comando (substituindo psiXXX pelo número do grupo)

mongo --username psiXXX --password --authenticationDatabase psiXXX appserver.alunos.di.fc.ul.pt/psiXXX

Cada grupo tem dois portos abertos para acesso por http a servidores node. O primeiro porto no intervalo 3001 a 3035 e o segundo porto no intervalo 3051 a 3085. Por exemplo, o grupo psi003 deve usar os portos 3003 e 3053. É assim importante que configurem os servidores node (para o front-end e back-end) nesses portos.

A forma de executar o servidor node que serve o front-end Angular deve ser a seguinte (onde o XXXX que define o porto deve ser o específico de cada grupo)

ng serve --port XXXX --host 0.0.0.0 --disableHostCheck true

Para o servidor node que serve o back-end não é necessário mudar a forma de execução.

A connection string para acesso à base de dados mongo deve ser a seguinte (onde devem substituir psiXXX pelo número do grupo)

mongodb://psiXXX:psiXXX@localhost:27017/psiXXX?retryWrites=true&authSource=psiXXX
