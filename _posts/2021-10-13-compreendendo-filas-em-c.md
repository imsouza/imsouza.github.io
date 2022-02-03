---
layout: post
title: "Compreendendo Filas em C"
description: "Uma estrutura de dados do tipo fila funciona de forma similar a uma fila do mundo real, como, por exemplo, a fila de um banco..."
author: "Mateus Almeida"
image: /assets/thumbnails/img15.jpeg
tags: [Estrutura de Dados]
---

![Img](/assets/thumbnails/img15.jpeg)

Uma estrutura de dados do tipo fila funciona de forma similar a uma fila do mundo real, como, por exemplo, a fila de um banco. As filas possuem uma característica especial, onde, o primeiro elemento que entra é o primeiro elemento que sai. Isso fica evidente em uma fila de banco, em que a primeira pessoa que entra na fila para ser atendida é a primeira a sair, enquanto isso, novas pessoas entram ao final da fila. Esse processo é chamado de FIFO (*First in, First out*), que em português significa "o primeiro que entra, é o primeiro que sai". 

O fundamento principal da fila é que só podemos inserir um elemento no final e só podemos remover o elemento do início. Os elementos do meio ou em qualquer outra posição de memória que não seja o início e o fim, ficam inacessíveis, mesmo eles estando armazenados na memória do computador.

<br>

## Operações fundamentais de uma fila

Independente do tipo de alocação usada na implementação de uma fila, sendo ela estática com acesso sequencial ou dinâmica com acesso encadeado, as seguintes operações são sempre possíveis:

- Criação da fila;
- Inserção de um elemento ao final da fila;
- Remoção de um elemento do início da fila;
- Acesso ao elemento do início da fila;
- Retornar o tamanho da fila;
- Verificar se a fila está vazia ou não;
- Destruição da fila.

> Para implementar a fila, utilizaremos listas encadeadas. Para isso, será necessário um ponteiro para o início, que indica o primeiro elemento da fila, um ponteiro para o final, que indica o último elemento da fila e outro campo que irá armazenar o número de elementos da fila.

![img](https://user-images.githubusercontent.com/39147407/137041900-7c927333-5d2a-44e9-8640-00154a7eee96.png)

<br>

## Criando uma fila

Antes de implementarmos a função de criação da fila, devemos lembrar que estamos trabalhando também com listas encadeadas, logo, temos que inicialmente definir a estrutura de ```No``` e ```Fila (lista)``` que ficarão responsáveis por armazenar as informações passadas.

> A estrutura de ```No``` será definida na interface do TAD Fila.

Assim, a estrutura pode ser implementada da seguinte forma:

<script src="https://gist.github.com/imsouza/a3d980d9fe05ce1e579c9597a46feb55.js"></script>

<script src="https://gist.github.com/imsouza/46e5cf57641275c111bd691b2c2338b8.js"></script>

A função de criação da fila inicializa a lista como sendo vazia, uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/9815eac9cc5547e6940e47df2b908f99.js"></script>

Basicamente, o que a função faz é a alocação de uma área de memória para a fila. Em seguida, a função inicializa os três campos dela, sendo eles: ```inicio```, ```fim``` e ```n```. Por fim, retorna o ponteiro da estrutura.

<br>

## Inserindo um elemento na fila

Inserir um elemento em uma **fila dinâmica encadeada** é uma tarefa um tanto quanto simples. Basicamente, é preciso alocar o espaço para o novo elemento a ser inserido na estrutura e fazer uns ajustes em alguns ponteiros. Como se trata de uma inserção no final da fila, o elemento a ser inserido obrigatoriamente deve apontar para **NULL**. 

Também é preciso considerar que a fila pode ou não estar vazia. Caso ela esteja vazia, precisamos fazer com que o ponteiro inicial da fila (```fila->inicio```) aponte para o novo elemento a ser inserido. Caso contrário, o elemento do final da fila deverá apontar para o novo elemento a ser inserido.

Abaixo será ilustrado o processo de inserção de um elemento na fila:

#### Passo 1:

Cria a fila vazia apontando para **NULL**.

![img](https://user-images.githubusercontent.com/39147407/137044210-0a53fa77-259b-426c-a3d9-877b1aa993a8.png)

#### Passo 2:

Aloca o espaço para o novo elemento (```no```) e o insere na fila vazia.

![img](https://user-images.githubusercontent.com/39147407/137044386-c337bba7-0317-4fd7-a785-7b6334fce049.png)

#### Passo 3:

Aloca o espaço para um novo elemento (```no```) e o insere no final da fila.

![img](https://user-images.githubusercontent.com/39147407/137044717-7d1cece5-952b-49b1-9aea-8611d85e3737.png)

Inserindo mais um elemento:

![img](https://user-images.githubusercontent.com/39147407/137045249-13a1b058-ec0e-4b15-892c-ffc8bec4baba.png)

Uma possível implementação para essa função é a seguinte:

<script src="https://gist.github.com/imsouza/397faaf67e3f420c406fe4039ef3af3b.js"></script>

<br>

## Removendo um elemento da fila

Como já foi dito anteriormente, para remover um elemento da fila devemos remover pelo início. Inicialmente, precisamos verificar se a fila está vazia. Caso ela esteja, retornaremos uma mensagem de erro, caso contrário, daremos continuidade ao processo de remoção.

> Vale ressaltar que, caso a fila esteja vazia, não necessáriamente uma mensagem de erro deve aparecer na tela. Para essa implementação usaremos uma função do tipo void, mas, ela pode ser do tipo inteiro ou até de outro tipo. Portanto, o valor de retorno passa ser relativo ao que o programador definir.

Caso a fila não esteja vazia, é necessário criar uma cópia do início em um ponteiro auxiliar (```no```) e, em seguida, fazemos com que o início da fila (```fila->inicio```) aponte para o elemento seguinte a ele. Após isso, é preciso liberar a memória associada ao antigo ponteiro de início da fila (```no```). Por fim, decrementamos o tamanho da fila em um.

Abaixo será ilustrado o processo de remoção de um elemento na fila:

#### Passo 1:

Fazer com que o ponteiro de início da fila (```fila->inicio```), aponte para o elemento seguinte a ele.

![img](https://user-images.githubusercontent.com/39147407/137047084-97bb9739-ed22-4610-a303-3899dc7a7216.png)

#### Passo 2:

Em seguida, liberamos a memória do antigo ponteiro de início da fila, neste caso, o nó cujo dado é 2 e atualizamos a quantidade de elementos da fila decrementando em uma unidade por remoção.

![img](https://user-images.githubusercontent.com/39147407/137047155-ebbfd721-be09-44d5-8cf9-7d18c17c04d1.png)

> Esse processo pode ser executado quantas vezes forem necessárias até que a fila se encontre vazia e ambos ponteiros ```inicio``` e ```fim``` aponte para **NULL**.

O código abaixo é uma possível implementação para essa função:

<script src="https://gist.github.com/imsouza/3e18953fa5e76340eb75b58d6d873e17.js"></script>

<br>

## Consultando o elemento do início da fila

Para recuperar o primeiro elemento é uma tarefa quase que imediata, basta fazermos:

<script src="https://gist.github.com/imsouza/1e0bcd83d16092c2b61d3aed52807ac9.js"></script>

<br>

## Retornando o número de elementos

Para retornar o número de elementos é uma tarefa bastante simples, basta fazermos:

<script src="https://gist.github.com/imsouza/28f1471b0f55205b9d4c3ed381018778.js"></script>

<br>

## Verificando se a fila está vazia

A estrutura de fila, definida anteriormente, já possui um campo que armazena o número de elementos, o que facilita na implementação dessa função. A função que verifica se a fila está vazia pode ser dada por:

<script src="https://gist.github.com/imsouza/9c379edde74a104b4e706579c9e0edb9.js"></script>

<br>

## Liberando a fila da memória

O processo de liberar a fila é o mesmo de liberar uma lista encadeada, afinal, estamos trabalhando com listas. Para isso, a função deve liberar todos os nós da lista. Uma possível solução é a seguinte:

<script src="https://gist.github.com/imsouza/c2a10db756616a09d9c01696021df5ba.js"></script>

<br>

## Código final do TAD Fila

#### Fila.c
<script src="https://gist.github.com/imsouza/427cb9f0ada186b547c812af2c62c63a.js"></script>

#### Fila.h
<script src="https://gist.github.com/imsouza/6d50912ea215e32cfd028ecfa5d418ed.js"></script>

#### Cliente.c
<script src="https://gist.github.com/imsouza/f0cdeadfac6d7e160c444f1587a03a9a.js"></script>

<br>

## Análise de complexidade

Um aspecto importante quando manipulamos filas tem relação direta com os custos das suas operações. O custo computacional de uma **fila dinâmica encadeada**, para as operações de criação, inserção, remoção, consulta e para as funções auxiliares como: verificar se a fila está vazia e retornar a quantidade de elementos totais, possuem complexidade *O(1)*. Sendo assim, a função de liberar a fila da memória é a única que possui complexidade *O(n)*.

<br>

## Conclusão

A estrutura de dados de fila é utilizada em inúmeras aplicações na computação. Elas também são utilizadas de forma indireta em outras aplicações ou estruturas de dados como: [*Busca em Largura*](https://pt.wikipedia.org/wiki/Busca_em_largura){:target="_blank"}, [*Grafos*](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)){:target="_blank"}, [*Árvores*](https://pt.wikipedia.org/wiki/%C3%81rvore_(estrutura_de_dados)){:target="_blank"} e [*Filas de Prioridade*](https://en.wikipedia.org/wiki/Priority_queue){:target="_blank"}. Filas também podem ser usadas para armazenar e controlar o fluxo de dados em um computador ou acesso aos seus recursos, como: gerenciamento de documentos enviados para impressora ou até mesmo processamento de tarefas em multiprogramação.

<br>

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

[Entendendo Algoritmos, por Aditya Bhargava](https://www.amazon.com.br/Entendendo-Algoritmos-ilustrado-programadores-curiosos-ebook/dp/B07B61HC3L/ref=sr_1_1?adgrpid=81530415255&dchild=1&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzg0XI9RQr-8whNpah9KjRyJHHGBe05YOxbtRUe-C6lzl3bjp7GDu4aAnYlEALw_wcB&hvadid=425982603043&hvdev=c&hvlocphy=1001546&hvnetw=g&hvqmt=e&hvrand=1410481636243571583&hvtargid=kwd-297239954614&hydadcr=5629_11235159&keywords=grokking+algorithms&qid=1623294950&sr=8-1){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
