---
layout: post
title: "Introdução aos Tipos Abstratos de Dados em C"
description: "Ao dar início aos estudos em alguma linguagem de programação, nos deparamos com uma série de conceitos. Um desses conceitos é o de tipo de dados..."
author: "Mateus Almeida"
image: /assets/thumbnails/img12.jpg
tags: [Estrutura de Dados]
---

![Boat](/assets/thumbnails/img12.jpg)

<br>

Ao dar início aos estudos em alguma linguagem de programação, nos deparamos com uma série de conceitos. Um desses conceitos é o de **tipo de dados**. Um tipo de dado nada mais é do que um conjunto de valores e operações que uma variável pode assumir, por exemplo, **float**, **int**, **char** e **double** são alguns dos tipos de dados da linguagem C. Cada tipo aceita determinado valor, ou seja, o tipo **int** aceita somente números inteiros (pertencente ao conjunto dos inteiros) variando de -2.147.483.648 a 2.147.483.647.

Se você começou já faz um tempinho nos estudos, sabe (ou deveria saber) que os tipos de dados descritos acima não possuem nenhum tipo de estrutura sobre seus valores. No entanto, o que seria essa estrutura? Bem, uma estrutura, ou melhor, uma **estrutura de dados** é uma forma de armazenar e organizar os dados na máquina de modo que eles possam ser usados de forma eficiente.

Alguns exemplos de estrutura de dados na linguagem C são os **arrays**, **struct**, **union** e **enum**, todas criadas a partir dos tipos de dados básicos e que você provavelmente já ouviu falar delas caso conheça o básico da linguagem C.

<br>

## A abstração dos tipos

Dependendo do projeto, os tipos de dados básicos e as estruturas de dados presentes na linguagem em questão podem não ser suficientes para a aplicação, ou seja, haveria uma necessidade de uma melhor estruturação dos dados. Sendo assim, o ideal é a criação de um **tipo abstrato de dados**, também conhecido como **TAD**. Um TAD é um novo tipo de dados implementado pelo programador, no qual será responsável por definir tanto as estruturas de dados quanto as operações para a manipulação desses dados a fim de resolver determinado problema.

Por exemplo, podemos criar um TAD para representar matrizes alocadas de forma dinâmica na memória. Para isso, podemos criar nosso próprio tipo ```Matriz```, ou seja, um novo tipo de dados definido pelo programador que neste caso representa matrizes, da seguinte forma:

<script src="https://gist.github.com/imsouza/f9fdf4cf19ba1f2cafee4bd8da63d9ca.js"></script>

> Obs.: não se preocupe em entender a estrutura de um TAD agora, nos próximos tópicos irei me aprofundar mais nessa parte. Vale ressaltar também que você precisará ter um certo conhecimento sobre ponteiros, pois, eles são fundamentais para a criação dos TADs.

Neste caso, só foi criada apenas uma estrutura e uma única função, a ```Matriz *criarMatriz(...)```, porém, um TAD não se limita somente a isso, podemos ter inúmeras estruturas assim como podemos ter inúmeras funções. Para essa representação de matrizes, podemos ter outras funções como: ```Matriz *excluirMatriz(...)```, ```Matriz *calcularMatrizes(...)```, entre outras funções.

Ao criar um TAD, podemos "esconder" aquilo que implementamos. Ou seja, quem usar o TAD não precisa conhecer como ele foi implementado, mas sim, apenas conhecer as funcionalidades que ele implementa. O TAD pode ser discutido pela perspectiva do implementador (programador) e do usuário do tipo. 

O programador cria as estruturas de dados e implementa as respectivas funções para manipulá-las. Já o usuário utiliza o TAD criado pelo programador como se fosse um tipo de dados fornecido pela linguagem de programação.

Desse modo, o usuário só deve manipular os atributos do TAD através das funções definidas pelo implementador do tipo. Assim, o TAD funciona como uma "caixa-preta" para o usuário, do qual nunca tem acesso direto às informações lá armazenadas. A implementação de um TAD está desvinculada da sua utilização, ou seja, quando definimos um TAD, estamos preocupados com o que ele faz e não como ele faz.

<br>

## A anatomia de um tipo abstrato de dados

Um TAD é, muitas vezes, implementado na fórmula de dois módulos: **implementação** e **interface**. Já os programas que usam determinado tipo abstrato de dados são chamados de **clientes**. 

<div align="center">
  <img src="https://user-images.githubusercontent.com/39147407/124182614-77cb7b00-da8d-11eb-8938-64a8b3db1bb5.png" alt="módulos" width="70%">
</div>

O módulo de interface declara as funções que correspondem às operações do TAD e é visível pelo usuário. A implementação é o conjunto de algoritmos que realizam as operações e é o único "lugar" que uma variável é acessada diretamente.

A estratégia de ocultação de informações permite a implementação e manutenção de módulos sem afetar os programas do usuário. A figura abaixo exemplifica esse esquema:

<div align="center">
  <img src="https://user-images.githubusercontent.com/39147407/124054163-de9e5500-d9f7-11eb-969c-8f4a255e7c15.png" alt="estrutura" width="70%">
</div>

Na linguagem C, um TAD é declarado como uma ```struct``` e a interface é um conjunto de protótipos de funções que manipula a ```struct```.

<br>

## Operações básicas de um TAD

Tipos abstratos de dados possuem operações para a manipulação de seus dados. Essas operações variam de acordo com o TAD criado, porém, as seguintes operações são as mais comuns:

- Criação do TAD;
- Inserção de um novo elemento no TAD;
- Remoção de um elemento do TAD;
- Acesso/consulta a um elemento do TAD;
- Destruição do TAD.

<br>

## Modularizando o programa

Quando trabalhamos com TAD, é uma boa prática da linguagem C utilizarmos dois arquivos para implementá-lo. Assim, podemos garantir uma melhor organização dos códigos do nosso projeto além de separar o "conceito" (definição do tipo) de sua "implementação". No projeto, deverá ser criado um arquivo com a extensão ".h" e um ".c" a fim de manter tal padrão.

- Arquivo ".h": onde será declarado os protótipos das funções, ou seja, as funções que ficarão visíveis para o usuário. Também é o onde será declarado os tipos de ponteiro e os dados de acesso global no programa. O arquivo com essa extensão define a **interface** visível pelo usuário;

- Arquivo ".c": declaração do tipo de dados que ficarão ocultos do usuário do TAD e implementação das suas funções. O arquivo com essa extensão define tudo que ficará **oculto** do usuário.

Esse processo de separar o código do programa em vários arquivos e funções se chama **modularização**. A modularização visa à criação de **módulos**. Um módulo é uma unidade com propósito único e bem definido que pode ser compilado separadamente do restante do programa. Desse modo, um modulo pode ser facilmente reutilizado e modificado independente do programa do usuário. A utilização de módulos se torna necessária a medida que a aplicação se torna maior devido a exigências de manutenção no código, reutilização e modificação que exija recompilação de todo código.

<br>

## Vantagens de usar um TAD

- **Encapsulamento**: ao ocultarmos a implementação, fornecemos um conjunto de operações possíveis para o TAD. O usuário não precisa de nenhum conhecimento técnico sobre como foi implementado o TAD, apenas como usá-lo de fato, facilitando bastante o seu uso.

- **Manutenibilidade**: uma das maiores vantagens de se usar TADs é o fato de que podemos alterar o tipo usado sem alterar a aplicação. Por exemplo, pode-se incluir novos atributos ou funções sem que o código que utiliza o tipo sofra alguma alteração, ou apresente alguma inconsistência.

- **Reutilização**: um TAD bem definido pode ser utilizado em diversas aplicações sem efeito colaterais.

- **Abstração**: separar o código de implementação do código de uso do TAD, que funciona como um tipo de dados fornecido pela linguagem.

- **Legibilidade**: a abstração de informações através do TAD permite melhor compreensão dos algoritmos e maior facilidade de programação.

- **Integridade**: a manipulação dos atributos por operações definidas sobre o tipo impede a ocorrência de inconsistências. O usuário não tem acesso direto aos dados, isso evita que ele manipule os dados de uma maneira inadequada.

<br>

## Programando um TAD

Chegou o momento de colocar a mão na massa, ou melhor, no código e criarmos um TAD como exemplo. Vamos considerar a criação de um tipo de dado para representar um ponto no plano cartesiano. Para isso, iremos definir um tipo abstrato chamado ```Ponto``` e em seguida o conjunto de funções que irão operar sobre esse tipo. As operações para o nosso TAD Ponto são as seguintes:

- criarPonto: cria um ponto com coordenadas x e y;
- acessarPonto: retorna as coordenadas de um ponto;
- atribuirPonto: atribui novos valores às coordenadas de um ponto;
- distanciaPonto: calcula a distância entre dois pontos;
- liberarPonto: libera a memória alocada por um ponto.


Como já foi dito, nosso TAD deve seguir as boas práticas de modularização de código. Para isso, iremos definir nossa interface, implementação e cliente em arquivos separados. A estruturação geral do nosso projeto ficará da seguinte forma:

![Screenshot](https://user-images.githubusercontent.com/39147407/124140572-f826b780-da5e-11eb-9456-336e2e245271.png)

Observe que tanto o nome do arquivo **.h** quanto o **.c** possuem o mesmo nome **Ponto**. Isso não é por acaso, é uma excelente prática definir um mesmo nome para cada TAD individualmente a fim de evitar conflitos e melhorar a compreensão e organização do projeto principalmente quando lidamos com vários tipos abstratos simultâneos.

#### Interface Ponto.h

A interface desse TAD pode ser dada pelo arquivo **Ponto.h** da seguinte forma:

<script src="https://gist.github.com/imsouza/34d38927df87da65c2c4b6038f1e1e0f.js"></script>

> As diretivas ```#ifndef _PONTO_H```, ```#define _PONTO_H``` e ```#endif``` são chamadas de Guardas de Inclusão ou no inglês [*Include Guards*](https://pt.wikipedia.org/wiki/Include_guard){:target="_blank"}. O seu uso na interface é para evitar problemas de dupla inclusão de um arquivo indesejado.

Perceba que a estrutura Ponto (```struct ponto```) não é exportada pelo módulo, isto é, não faz parte da interface do módulo e, portanto, não é visível para outros módulos. Ao analisar apenas esse módulo, não é possível dizer como a estrutura foi definida, quais campos está sendo armazenado, qual o nome da variável associada a cada campo, etc. Dessa forma, os demais módulos que usarem esse TAD só terão acesso às informações obtidas através das funções exportadas pelo arquivo **Ponto.h**. Essa é uma forma de proteger a implementação do nosso código, deixando disponível para o usuário apenas as funções que queremos que sejam usadas.

#### Implementação Ponto.c

A implementação desse TAD pode ser dada pelo arquivo **Ponto.c**. O código deve sempre incluir o arquivo de interface do módulo, ou seja, o **Ponto.h**. No entanto, por que isso é necessário? Bem, pode haver definições na interface que podem ser necessárias na implementação. No caso da criação do nosso TAD, precisaremos da definição do tipo **Ponto**. Outra razão para realizar a inclusão da interface é garantir que as funções implementadas correspondem às funções da interface. Como os protótipos das funções exportadas são incluídos, o compilador verifica, por exemplo, se os parâmetros das funções implementadas equivalem aos parâmetros dos protótipos. Obviamente que além da inclusão da própria interface, é preciso incluir as interfaces das funções que usamos da biblioteca padrão do C. O código das importações é o seguinte:

<script src="https://gist.github.com/imsouza/2a3cbe0ccf817ef73ea463205f150114.js"></script>

A seguir, mostrarei a definição de cada uma das funções do TAD em questão. Pouparei a explicação sobre ponteiros, afinal, como já foi dito no começo do artigo, ao trabalhar com TADs o único pré-requisito que se espera é que você saiba manipular ponteiros.

Iniciaremos definindo nossa estrutura Ponto. Como só precisamos guardar as coordenadas de um ponto, podemos definir da seguinte forma:

<script src="https://gist.github.com/imsouza/ea5af24dc20e489713719cbf6815eb72.js"></script>

A função que cria um ponto dinamicamente deve alocar a estrutura que representa o ponto e inicializar os seus campos:

<script src="https://gist.github.com/imsouza/f07f0c01de30b465aaa04647fb268b56.js"></script>

As funções de atribuir e acessar valores às coordenadas de um ponto permitem que o módulo cliente, ou seja, o programa do usuário de fato, tenha acesso às coordenadas do ponto sem conhecer sua implementação. Existem inúmeras formas de se programar esse mesmo TAD e, para essas funções em específico, essa seria uma das possíveis soluções:

<script src="https://gist.github.com/imsouza/31c395a481c99e5dcaf24356319bd9e9.js"></script>

<script src="https://gist.github.com/imsouza/d0e6742f4804577e15dcc2c486cdb449.js"></script>

Criaremos agora a operação de calcular a distância entre dois pontos, lembrando que a fórmula para o cálculo é a seguinte: 

<div align="center">
  <img src="https://user-images.githubusercontent.com/39147407/124147104-c7498100-da64-11eb-9bae-88feb72570f2.png" alt="fórmula">
</div>

A implementação pode ser dada da seguinte forma:

<script src="https://gist.github.com/imsouza/bd4a575389f9c51b5edff2815824e976.js"></script>

Por fim, definiremos a função para liberar o ponto alocado na memória:

<script src="https://gist.github.com/imsouza/1380e5b68f8f3fb941911a374335cf40.js"></script>

O código final da implementação do módulo é o seguinte:

<script src="https://gist.github.com/imsouza/d1884704b1978bc3860ec52bdc17f3fd.js"></script>

#### Cliente main.c

Para finalizar, precisaremos de algum cliente para usarmos esse TAD. Como você já sabe, sempre que formos usar o TAD em questão, precisaremos incluir o arquivo que define sua interface. Um exemplo de cliente pode ser esse:

<script src="https://gist.github.com/imsouza/6a1e1fb780727b83874e77c2bd8ecf3c.js"></script>

Sempre que alocamos um novo ponto, no final, precisaremos liberar ele da memória para que nosso programa não apresente vazamentos de memória ou *memory leaks*.

<br>

## Compilando o projeto

#### Manual

Nosso TAD é composto por três arquivos, sendo eles: Ponto.h (interface), Ponto.c (implementação) e main.c (cliente). Para fazer a compilação, precisamos primeiramente "juntar" (linkar) esses módulos. 

Um *linker* é uma ferramenta usada para juntar todos os arquivos objetos em um único executável. É também na ligação dos objetos que os códigos das funções da biblioteca padrão do C são incluídos no código objeto. Para compilar cada módulo usamos o comando ```gcc <flag-de-compilação> -c <nome-do-módulo>.c```. Para o nosso projeto, iremos linkar da seguinte forma:

```gcc -c Ponto.c main.c```

Se não ocorreu nenhum erro, serão gerados dois arquivos com a extensão ".o" (objeto), sendo eles: main.o e Ponto.o, agora é preciso fazer a linkagem de fato desses objetos:

```gcc main.o Ponto.o -lm -o TADPonto```

E, por fim, executar o TADPonto, caso tudo tenha dado certo. O "-lm" é para informar ao compilador **gcc** para incluir os códigos objetos da biblioteca matemática.

#### Makefile

Utilizar a forma manual pode ser um pouco cansativo, concorda? Ficar repetindo aquele mesmo processo para diferentes testes é um pouco maçante. Para isso, existe uma ferramenta chamada **Make** que nos ajuda a automatizar o processo de compilação. Neste artigo não irei introduzir essa ferramenta, para isso, irei indicar o [seguinte post](https://www.embarcados.com.br/introducao-ao-makefile/){:target="_blank"} que faz uma breve introdução ao Makefile.

Nosso projeto pode ser compilado utilizando o seguinte arquivo Makefile simples criado na pasta do próprio projeto:

<script src="https://gist.github.com/imsouza/e0ce0e40db50a2ab4585e88b37ba1ef7.js"></script>

Há inúmeras maneiras de se programar um Makefile, podemos fazer da forma mais simples como mostrado acima, como também podemos fazer de uma forma um pouco melhor, como esta:

<script src="https://gist.github.com/imsouza/f028b7ad4121f7c248b3740ecf796bab.js"></script>

Ambos arquivos têm o mesmo propósito, apesar de suas implementações serem diferentes. Para utilizar o Makefile no Linux é bem simples, basta seguir o seguinte comando: ```make && make run```.

Se tudo deu certo, a seguinte mensagem será exibida:
```
gcc  Ponto.o  main.o -lm -o TADPonto
./TADPonto
Distância: 1.581139
```

Caso queira limpar os arquivos objetos, execute o comando: ```make clean```.

<br>

## Conclusão

Neste artigo foi introduzido, de forma teórica e prática os conceitos dos **Tipos Abstratos de Dados (TADs)** utilizando a Linguagem C. Também foi discutido as inúmeras vantagens em usar um TAD, além de sua importância no desenvolvimento de programas modularizados em C. Os tipos abstratos são a essência das estruturas de dados e dominar seu entendimento é um ponto fundamental para aqueles que buscam criar aplicações mais robustas e eficientes.

<br>

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

[Introdução a Estruturas de Dados - Com Técnicas de Programação em C ,  Waldemar Waldemar Celes](https://www.amazon.com.br/Introdu%C3%A7%C3%A3o-Estruturas-Dados-Waldemar-Celes/dp/8535283455){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>


