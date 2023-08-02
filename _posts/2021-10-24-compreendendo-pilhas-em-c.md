---
layout: post
title: "Compreendendo Pilhas em C"
description: "Uma pilha é uma estrutura de dados linear que pode ser acessada somente por uma de suas extremidades para armazenar e recuperar dados em um computador..."
author: "Mateus Almeida"
image: /assets/thumbnails/img16.jpeg
tags: [Estrutura de Dados]
---

![Img](/assets/thumbnails/img16.jpeg)

Uma pilha é uma estrutura de dados linear que pode ser acessada somente por uma de suas extremidades para armazenar e recuperar dados em um computador. É uma estrutura de dados do tipo *LIFO* (*Last in, First out*), que em português significa "o último que entra, é o primeiro que sai". Objetos podem ser inseridos na estrutura a qualquer momento, mas apenas o objeto mais recente, ou seja, o último a ser inserido no topo da pilha, pode ser acessado ou removido a qualquer momento. Assim, a pilha só permite acesso a apenas um objeto — o último inserido.

Diferente das listas, os elementos de uma pilha se encontram dipostos uns sobre os outros e uma forma intuitiva de imaginar isso é uma pilha de livros, sendo conveniente retirar ou adicionar os livros na parte superior.

&nbsp;

## Operações fundamentais de uma pilha

Independente do tipo de alocação usada na implementação de uma pilha, sendo ela estática com acesso sequencial ou dinâmica com acesso encadeado, as seguintes operações são sempre possíveis:

- Criação da pilha;
- Inserção de um elemento no topo da pilha;
- Remoção de um elemento do topo da pilha;
- Acesso ao elemento do início da pilha;
- Retornar o tamanho da pilha;
- Verificar se a pilha está vazia ou não;
- Destruição da pilha.

As principais operações de uma pilha e as mais importantes dentre todas outras são de: **empilhar** um novo elemento, inserindo-o no topo; **desempilhar** um elemento, removendo-o do topo e a operação de retornar o elemento do **topo**, neste caso, o último elemento inserido. É comum nos referirmos as três operações pelos termos em inglês: *push* (empilhar), *pop* (desempilhar) e *top* (topo).

![img](https://user-images.githubusercontent.com/39147407/138580783-e17c9af6-fc79-43b5-94fc-e5815d976b00.png)

> Para implementar a pilha, utilizaremos listas encadeadas. Para isso, será necessário um ponteiro para o início, que indica o elemento do topo da estrutura e um campo que irá armazenar o número de elementos da pilha a medida em que forem inseridos.

![img](https://user-images.githubusercontent.com/39147407/138576233-117d6e4e-dd74-4fdb-9151-f71eb0f00dc9.png)

<br>

## Criando uma pilha

Antes de implementarmos a função de criação da pilha, devemos lembrar que estamos trabalhando também com listas encadeadas, logo, temos que inicialmente definir a estrutura de **No** e **Pilha** (lista) que ficarão responsáveis por armazenar as informações passadas.

> A estrutura de **No** será definida na interface do TAD Pilha.

Assim, a estrutura pode ser implementada da seguinte forma:

<script src="https://gist.github.com/imsouza/f535b7031a280b1dcc04e4dc3db66e99.js"></script>

<script src="https://gist.github.com/imsouza/ff2767b0fee4115c5fb6502bad1574e0.js"></script>

A função de criação da pilha inicializa a lista como sendo vazia, uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/3bf7b20b4eaf61695ff7dc6774a736e8.js"></script>

Basicamente, o que a função faz é a alocação de uma área de memória para a pilha. Em seguida, inicializa o ponteiro **inicio** com **NULL** e o campo **n** com o valor **0**, indicando que nenhum elemento foi inserido até o momento. Por fim, retorna o ponteiro da estrutura.

&nbsp;

## Inserindo um elemento na pilha

Uma vez criada a pilha, podemos começar guardar elementos em seu topo. Como estamos utilizando uma pilha com alocação dinâmica, ela somente será considerada cheia quando não tivermos mais memória disponível no computador para alocar novos elementos. Logo, enquanto houver memória disponível poderemos inserir elementos na estrutura. O primeiro elemento da lista representa o topo da pilha. Cada novo elemento é inserido no início da lista e, sempre que solicitado, retiramos o elemento também do início da lista (topo da pilha).

> A inserção no topo de uma **pilha dinâmica encadeada** é equivalente a inserção no início de uma **lista dinâmica encadeada**.

Abaixo será ilustrado o processo de inserção de um elemento na pilha:

&nbsp;

### Passo 1:

Cria a pilha vazia apontando para **NULL**.

![img](https://user-images.githubusercontent.com/39147407/138576216-0c8d11a6-1729-4240-a153-d567e74e4ccf.png)

&nbsp;

### Passo 2:

Aloca o espaço para o novo elemento (**no**) e o insere no topo da pilha vazia.

![img](https://user-images.githubusercontent.com/39147407/138576533-27fd1477-2e02-43d1-8e28-f8f6eb41621d.png)

&nbsp;

### Passo 3:

Aloca o espaço para um novo elemento (**no**) e o insere no topo da pilha.

![img](https://user-images.githubusercontent.com/39147407/138576513-8f491df9-4d45-4079-9adb-429d77af1687.png)

Inserindo mais um elemento:

![img](https://user-images.githubusercontent.com/39147407/138576617-9a72b735-07e2-4048-b243-f00135f5103d.png)

A implementação da função de inserção pode ser dada por:

<script src="https://gist.github.com/imsouza/ad501f2a6a256d977e39726394ae480d.js"></script>

&nbsp;

## Removendo um elemento da pilha

Como já foi dito anteriormente, para remover um elemento da pilha devemos remover pelo seu topo. Inicialmente, precisamos verificar se a pilha está vazia. Caso ela esteja, retornaremos uma mensagem de erro, caso contrário, daremos continuidade ao processo de remoção.

> Vale ressaltar que, caso a pilha esteja vazia, não necessáriamente uma mensagem de erro deve aparecer na tela. Para essa implementação usaremos uma função do tipo void, mas, ela pode ser do tipo inteiro ou até de outro tipo. Portanto, o valor de retorno passa ser relativo ao que o programador definir.

Caso a pilha não esteja vazia, é necessário criar uma cópia do início em um ponteiro auxiliar (**no**) e, em seguida, fazemos com que o início da pilha, ou seja, o topo da pilha (**pilha->inicio**) aponte para o elemento seguinte a ele. Após isso, é preciso liberar a memória associada ao antigo ponteiro de início da pilha (**no**). Por fim, decrementamos o tamanho da pilha em um.

Abaixo será ilustrado o processo de remoção de um elemento na pilha:

&nbsp;

#### Passo 1:

Fazer com que o ponteiro de início da pilha (**pilha->inicio**), aponte para o elemento seguinte a ele.

![img](https://user-images.githubusercontent.com/39147407/138576838-3a29cc9f-89b0-4b94-9c8e-5fc29a61a0d4.png)

&nbsp;

#### Passo 2:

Em seguida, liberamos a memória do antigo ponteiro de início da pilha, neste caso, o nó cujo dado é 3 e atualizamos a quantidade de elementos da pilha decrementando em uma unidade por remoção.

![img](https://user-images.githubusercontent.com/39147407/138576937-2f8eaec4-ef5a-47a7-a10f-72eb832a752b.png)

> Esse processo pode ser executado quantas vezes forem necessárias até que a pilha se encontre vazia e o ponteiro **inicio** aponte para **NULL**.

O código abaixo é uma possível implementação para essa função:

<script src="https://gist.github.com/imsouza/f05c445b052191242386ba77ea40eb8b.js"></script>

&nbsp;

## Consultando o elemento do topo da pilha

Para recuperar o primeiro elemento é uma tarefa quase que imediata, basta fazermos:
<script src="https://gist.github.com/imsouza/ce147f0a37dbda60fd68afbe96d375b5.js"></script>

&nbsp;

## Retornando o número de elementos

Para retornar o número de elementos é uma tarefa bastante simples, basta fazermos:

<script src="https://gist.github.com/imsouza/61ab452190d4335b5e4a82e2ff5fb516.js"></script>

&nbsp;

## Verificando se a pilha está vazia

A estrutura de pilha, definida anteriormente, já possui um campo que armazena o número de elementos, o que facilita na implementação dessa função. A função que verifica se a pilha está vazia pode ser dada por:

<script src="https://gist.github.com/imsouza/0436718d1b1e337f9f4d30f7fbd83712.js"></script>

&nbsp;

## Liberando a pilha da memória

O processo de liberar a pilha é o mesmo de liberar uma lista encadeada, afinal, estamos trabalhando com listas. Para isso, a função deve liberar todos os nós da lista. Uma possível solução é a seguinte:

<script src="https://gist.github.com/imsouza/b9199cd7733dfaf39040b85951729644.js"></script>

&nbsp;

## Código final do TAD Pilha

#### Pilha.c
<script src="https://gist.github.com/imsouza/c38a997eaae8c8ce5093acbe9960198b.js"></script>

&nbsp;

#### Pilha.h
<script src="https://gist.github.com/imsouza/79be0afbe5729885d9b9eb1116bf8d16.js"></script>

&nbsp;

#### Cliente.c
<script src="https://gist.github.com/imsouza/608bbfa977db275994ea5adf4c87501e.js"></script>

&nbsp;

## Análise de complexidade

Um aspecto importante quando manipulamos pilhas tem relação direta com os custos das suas operações. O custo computacional de uma **pilha dinâmica encadeada**, para as operações de criação, inserção, remoção, consulta e para as funções auxiliares como: verificar se a pilha está vazia e retornar a quantidade de elementos totais, possuem complexidade *O(1)*. Sendo assim, a função de liberar a pilha da memória é a única que possui complexidade *O(n)*.

&nbsp;

## Conclusão

A estrutura de dados de pilha é utilizada em inúmeras aplicações na computação. Elas também são utilizadas de forma indireta em outras aplicações ou estruturas de dados como: chamada e retorno de funções, processamento de expressões aritméticas (prefixa, infixa, posfixa), conversão de números decimais em binários, implementação do [*Quick Sort*](https://pt.wikipedia.org/wiki/Quicksort){:target="_blank"} sem recursão, entre outros.

&nbsp;

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
