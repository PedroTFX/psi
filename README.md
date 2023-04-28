# psi

Execução do projeto

As características deste projeto requerem uma equipa composta por 5 elementos, com competências e responsabilidades bem definidas e distintas, que serão avaliadas. Devido à importância do projeto, o processo de avaliação seguirá regras rigorosas. A constituição das equipas é realizada na atividade Grupos de PSI na página de PSI no Moodle. O projeto seguirá uma metodologia de desenvolvimento de software inspirada na metodologia Kanban, que possui papéis e atividades bem definidos, operacionalizada pela plataforma JIRA Agile.

Como parte da metodologia Kanban, o conjunto de funcionalidades a implementar durante cada sprint é definido no início do sprint. O backlog inicial é composto pelos itens abaixo (estes itens podem sofrer alterações a qualquer momento). Todos estes itens têm os seguintes critérios de aceitação em comum: (i) deve ser possível concluir o processo num browser desktop ou mobile; (ii) deve ser possível concluir o processo num browser desktop sem usar o rato.

    US1 - Como utilizador da plataforma quero criar uma conta de utilizador para ter acesso à plataforma
        Prioridade: alta
        Critérios de aceitação
            Para criar uma conta de utilizador, o utilizador deve fornecer um nome de utilizador e uma senha
            O nome de utilizador só pode ter caracteres alfanuméricos e deve ter três caracteres no mínimo
            O nome de utilizador deve ser único na plataforma
            A senha deve ter oito ou mais caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula e um algarismo
            Os requisitos de construção da senha devem ser apresentados no ecrã de criação de conta
            Em caso de sucesso, uma mensagem de confirmação adequada deve ser exibida no ecrã
            Se a senha e/ou o nome de utilizador não cumprirem os requisitos, uma mensagem de erro deve indicar qual ou quais os requisitos que não foram cumpridos
    US2 - Como utilizador da plataforma quero poder autenticar-me na plataforma para ter acesso à mesma
        Prioridade: alta
        Critérios de aceitação
            Para se autenticar o utilizador deve usar o nome de utilizador e senha que definiu aquando da criação de conta
            Em caso de falha na autenticação, uma mensagem de erro deve ser exibida (esta mensagem de erro não deve permitir saber se o nome de utilizador existe)
            Em caso de sucesso na autenticação o utilizador deve ser levado para a sua dashboard
    US3 - Como utilizador da plataforma quero poder aceder à minha dashboard, para ter uma visão geral da plataforma
        Prioridade: alta
        Critérios de aceitação
            A dashboard deve permitir ao utilizador aceder às suas listas, biblioteca de itens, utilizadores que segue e seguidores
    US4 - Como utilizador da plataforma quero poder aceder ao meu perfil de utilizador para visualizar as minhas informações
        Prioridade: alta
        Critérios de aceitação
            O perfil do utilizador deve exibir o seu nome de utilizador, imagem de perfil, e ligações de acesso à sua biblioteca, wishlist, listas personalizadas, e listas de seguidores/utilizadores a seguir
    US5 - Como utilizador da plataforma quero poder gerir o meu perfil de utilizador para editar as minhas informações registadas na plataforma
        Prioridade: média
        Critérios de aceitação
            Cada utilizador pode alterar o seu nome de utilizador e definir uma imagem de perfil
            O nome de utilizador só pode ter caracteres alfanuméricos e deve ter três caracteres no mínimo
            O nome de utilizador deve ser único na plataforma
            Se o novo nome de utilizador não cumprir os requisitos, a mensagem de erro deve indicar qual ou quais os requisitos que não foram cumpridos
            Em caso de sucesso, uma mensagem de confirmação adequada deve ser exibida no ecrã
    US6 - Como utilizador da plataforma quero poder pesquisar itens para poder aceder-lhes e/ou adquiri-los
        Prioridade: alta
        Critérios de aceitação
            Quando o utilizador pesquisa um nome, devem ser sugeridos os itens cujo nome corresponde ao nome pesquisado
            Caso a pesquisa realizada não retorne nenhum resultado, uma mensagem apropriada deve ser exibida
    US7 - Como utilizador da plataforma quero poder pesquisar outros utilizadores na plataforma para poder visualizar o perfil dos mesmos
        Prioridade: baixa
        Critérios de aceitação
            Quando o utilizador pesquisa um nome, devem ser sugeridos os utilizadores cujo nome corresponde ao nome pesquisado
            Caso a pesquisa realizada não retorne nenhum resultado, uma mensagem apropriada deve ser exibida
    US8 - Como utilizador da plataforma quero poder visualizar o perfil de outros utilizadores da plataforma para poder consultar a sua informação (ex: consultar a sua wishlist)
        Prioridade: baixa
        Critérios de aceitação
            Um utilizador pode visualizar o perfil de outro utilizador
            O perfil do utilizador deve incluir o nome desse utilizador, imagem de perfil, e ligações de acesso à sua biblioteca, wishlist, listas personalizadas públicas, e listas de seguidores/utilizadores a seguir
    US9 - Como utilizador da plataforma quero poder seguir outros utilizadores da plataforma para poder interagir com estes
        Prioridade: baixa
        Critérios de aceitação
            Quando o utilizador segue outro, este último deve passar a constar da sua lista de utilizadores a seguir
    US10 - Como utilizador da plataforma, quero poder visualizar mais detalhes dos itens a comprar na loja para poder consultar a informação do item e decidir se vou comprar
        Prioridade: alta
        Critérios de aceitação
            Cada item deve conter o seu tipo (ex: jogo, DLC, subscrição), uma descrição, plataforma, idiomas, preço, classificação geral, avaliações, preço
            A descrição do item deve ter um limite de 1000 caracteres
            Cada item deve possuir uma imagem principal e, opcionalmente, um conjunto de no máximo 2 outras imagens ilustrativas e/ou link para um vídeo, caso aplicável (ex: trailer, gameplay)
    US11 - Como utilizador da plataforma, quero poder adicionar um item ao carrinho para iniciar o processo da sua compra
        Prioridade: média
        Critérios de aceitação
            Quando o utilizador adiciona um item ao carrinho, o contador de itens no carrinho deve ser incrementado
    US12 - Como utilizador da plataforma, quero poder visualizar e gerir os itens no meu carrinho para poder modificar a quantidade de cada item ou cancelar itens que já não quero comprar
        Prioridade: média
        Critérios de aceitação
            Cada utilizador deve poder visualizar o nome, tipo, preço e quantidade de cada um dos itens presentes no carrinho
            Cada utilizador deve poder visualizar o valor total dos itens presentes no carrinho
            Cada utilizador deve poder eliminar os itens presentes no carrinho
            Cada utilizador deve poder aumentar ou diminuir as quantidades de um certo item no carrinho
    US13 - Como utilizador da plataforma, quero poder fazer checkout do carrinho para finalizar a compra
        Prioridade: média
        Critérios de aceitação
            No processo de checkout, deve ser pedido o NIF e a morada do utilizador (sendo esta última opcional)
            No processo de checkout, devem ser apresentadas no mínimo duas opções de métodos de pagamento
            Quando um método de pagamento é seleccionado pelo utilizador, deve haver 50% de probabilidade de o pagamento ser bem sucedido
            Em caso de erro, uma mensagem de erro adequada deve ser exibida no ecrã
            Em caso de sucesso, uma mensagem de confirmação adequada deve ser exibida no ecrã
            Quando uma compra é finalizada com sucesso, os itens que fazem parte do carrinho devem ser removidos do mesmo e adicionados à biblioteca do utilizador
            Quando uma compra é finalizada com sucesso, os itens que fazem parte da wishlist do utilizador devem ser removidos da mesma
    US14 - Como utilizador da plataforma, quero poder visualizar a minha biblioteca de itens adquiridos para consultar mais informações sobre os mesmos
        Prioridade: alta
        Critérios de aceitação
            A biblioteca de itens adquiridos deve listar os títulos dos itens adquiridos ou recebidos pelo utilizador, bem como ligações para as páginas dos itens e a data de aquisição/recepção
            Deve ser possível ordenar os itens por título ou por data de aquisição/recepção
            Caso não existam itens na biblioteca, deve ser apresentada uma mensagem apropriada
    US15 - Como utilizador da plataforma, quero poder avaliar um item adquirido ou já jogado para partilhar a minha experiência com outros utilizadores
        Prioridade: média
        Critérios de aceitação
            Uma avaliação de um item possui uma classificação e, opcionalmente, um comentário
            A classificação deve ser um valor entre 1 a 5 estrelas (mau a muito bom, respectivamente)
            O comentário deve ter um limite de 5000 caracteres
    US16 - Como utilizador da plataforma, quero poder interagir com as avaliações de outros utilizadores para expressar a minha opinião sobre as mesmas ou colocar dúvidas
        Prioridade: baixa
        Critérios de aceitação
            A interacção com a avaliação pode ser feita através de um “gosto/like” ou de uma resposta à avaliação
            A resposta deve ter um limite de 5000 caracteres
    US17 - Como utilizador da plataforma, quero poder visualizar o conteúdo da minha wishlist para visualizar quais jogos ainda estão registados
        Prioridade: média
        Critérios de aceitação
            A wishlist deve listar os títulos dos itens adicionados pelo utilizador, bem como ligações para as páginas dos itens
            Caso não existam itens na wishlist, deve ser apresentada uma mensagem apropriada
    US18 - Como utilizador da plataforma, quero poder visualizar o conteúdo da wishlist de outros utilizadores para saber que itens estes gostariam de ter
        Prioridade: baixa
        Critérios de aceitação
            A wishlist deve listar os títulos dos itens adicionados pelo utilizador a que pertence, bem como ligações para as páginas dos itens
            Caso não existam itens na wishlist, deve ser apresentada uma mensagem apropriada
    US19 - Como utilizador da plataforma, quero poder adicionar um item à minha wishlist para manter registo de e mostrar que itens gostaria de ter
        Prioridade: média
        Critérios de aceitação
            Ao adicionar um item à wishlist com sucesso, o mesmo deve surgir na wishlist e uma mensagem de confirmação adequada deve ser exibida no ecrã
            Em caso de erro, uma mensagem de erro adequada deve ser exibida no ecrã
    US20 - Como utilizador da plataforma, quero poder remover um item da minha wishlist para indicar que já não estou interessado em ter esse item
        Prioridade: média
        Critérios de aceitação
            Ao remover um item da wishlist com sucesso, o mesmo deve desaparecer da wishlist, e uma mensagem de confirmação adequada deve ser exibida no ecrã
            Em caso de erro, uma mensagem de erro adequada deve ser exibida no ecrã
    US21 - Como utilizador da plataforma, quero poder criar listas de itens personalizadas para organizar os meus itens como me for conveniente (ex: listas temáticas, listas de progresso nos jogos: playing / shelved / dropped / beaten / completed, etc.)
        Prioridade: baixa
        Critérios de aceitação
            Ao criar uma lista, o utilizador deve indicar o seu nome e o nível de privacidade da mesma (pública ou privada)
            O nome de uma lista personalizada deve ter um limite de 100 caracteres
    US22 - Como utilizador da plataforma, quero poder visualizar as minhas listas de itens personalizadas para geri-las
        Prioridade: baixa
        Critérios de aceitação
            Cada lista personalizada deve indicar o seu nível de privacidade (pública ou privada) e listar os títulos dos itens adicionados pelo utilizador, bem como ligações para as páginas dos itens
            Caso não existam itens na lista personalizada, deve ser apresentada uma mensagem apropriada
    US23 - Como utilizador da plataforma, quero poder visualizar as listas de itens personalizadas públicas de outros utilizadores para descobrir novos jogos
        Prioridade: baixa
        Critérios de aceitação
            Cada lista personalizada deve indicar o seu nível de privacidade (pública ou privada) e listar os títulos dos itens adicionados pelo utilizador, bem como ligações para as páginas dos itens
            Caso não existam itens na lista personalizada, deve ser apresentada uma mensagem apropriada
    US24 - Como utilizador da plataforma, quero poder gerir as minhas listas de itens personalizadas para mantê-las actualizadas
        Prioridade: baixa
        Critérios de aceitação
            Cada utilizador deve poder adicionar ou remover itens das suas listas personalizadas
            Ao adicionar um item à lista com sucesso, o mesmo deve surgir na lista e uma mensagem de confirmação adequada deve ser exibida no ecrã
            Em caso de erro, uma mensagem de erro adequada deve ser exibida no ecrã
            Ao remover um item da lista com sucesso, o mesmo deve desaparecer da lista, e uma mensagem de confirmação adequada deve ser exibida no ecrã
            Em caso de erro, uma mensagem de erro adequada deve ser exibida no ecrã
    US25 - Como utilizador da plataforma, quero poder comprar um item como presente para oferecer a outro utilizador
        Prioridade: baixa
        Critérios de aceitação
            Apenas deve ser possível enviar como presente um jogo que o receptor não tenha na sua biblioteca
            Ao enviar um item como presente com sucesso, uma mensagem de confirmação adequada deve ser exibida no ecrã, e o receptor deverá receber uma notificação do envio
    US26 - Como utilizador da plataforma, quero poder aceitar um item enviado como presente para este passar a fazer parte da minha biblioteca
        Prioridade: baixa
        Critérios de aceitação
            Quando um presente é aceite com sucesso, o item correspondente deve ser removido da wishlist do receptor (caso lá esteja) e adicionado à biblioteca do receptor
            Quando um presente é aceite com sucesso, o utilizador que enviou o mesmo deverá receber uma notificação da aceitação
    US27 - Como utilizador da plataforma, quero poder recusar um item enviado como presente por não desejar ter esse item
        Prioridade: baixa
        Critérios de aceitação
            Quando um presente é recusado com sucesso, o utilizador que enviou o mesmo deverá receber uma notificação da recusa

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
