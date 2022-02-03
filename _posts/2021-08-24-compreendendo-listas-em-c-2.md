---
layout: post
title: "Compreendendo Listas em C #2"
description: "Continuando com a criação do nosso TAD, vamos terminar a implementação de algumas outras funções que podem ser de suma importância para nossa estrutura..."
author: "Mateus Almeida"
image: /assets/thumbnails/img13.jpg
tags: [Estrutura de Dados]
---

![Img](/assets/thumbnails/img13.jpg)

<br>

Continuando com a criação do nosso TAD, vamos terminar a implementação de algumas outras funções que podem ser de suma importância para nossa estrutura.

<br>

## Obtendo o tamanho da lista

Para obter o número de nós da lista, basta percorremos cada um dos nós e incrementar uma unidade, em alguma variável auxiliar, referente a cada nó que estamos passando. Isso pode ser feito da seguinte forma:

<script src="https://gist.github.com/imsouza/26dbddc5d9a26b41903954e105e25f17.js"></script>

> Existe uma outra forma mais eficiente de implementar essa função que consiste em atribuir uma variável **n**, indicando o número de nós que a lista possui, na estrutura da lista. Com isso, as funções que tinham complexidade *O(n)*, passam a ter complexidade constante *O(1)*.

<br>

## Inserindo no fim da lista

Inserir um elemento no início da lista é uma tarefa um tanto quanto simples, mas inserir no final de uma lista é algo totalmente oposto. Assim como na inserção no início, a inserção no final de uma lista dinâmica encadeada não necessita que se mude o lugar dos demais elementos. Porém, é necessário percorrer toda a lista para descobrir o último elemento e só aí fazer a inserção após ele.

Resumidamente, o que temos que fazer é realizar a alocação do espaço para o novo elemento da lista, encontrar o último elemento e mudar os valores dos ponteiros.

> Como estamos lidando com uma inserção no final, é importante ressaltar que o campo próximo do último nó não aponta para nenhum outro nó, ou seja, ele possui o valor **NULL**.

<script src="https://gist.github.com/imsouza/3f3aad9368827215d36b503d7d2506fa.js"></script>

É importante considerarmos que a lista pode ou não estar vazia. No caso de ser uma lista vazia, é preciso mudar o conteúdo do ponteiro ```inicio``` da lista para que ele passe a ser o nosso novo elemento do tipo ```No```. As linhas 8 e 9 do código acima exemplificam essa condição.

No caso de não ser uma lista vazia, temos que achar o último elemento. Esse processo é exemplificado nas linhas 11, 12 e 15 do código acima, onde a lista é percorrida até encontrarmos um nó cujo campo ```prox``` seja igual a ```NULL```, em outras palavras, o último elemento. Ao final do processo, o elemento ```novo``` passa a ser o elemento seguinte do nó ```atual```.

<br>

## Inserindo de forma ordenada na lista

Inserir um elemento de forma ordenada na lista não é uma tarefa muito simples. Isso ocorre porque precisamos procurar um ponto de inserção do elemento na lista, o qual pode ser no início, no meio, ou no final. Porém, como se trata de uma lista dinâmica encadeada, não será necessário mudar o lugar dos elementos da lista. 

Basicamente, temos que verificar se a lista é vazia. Se sim, mudamos o conteúdo do ponteiro ```inicio``` para que ele passe a ser o nó do nosso novo elemento. No caso de não ser uma lista vazia, temos que percorrer a lista enquanto não chegarmos ao seu final, e enquanto ```atual->dado < novo->dado```. 

Perceba que, além do elemento ```atual```, também armazenamos o elemento anterior a ele (```ant```), que será fundamental para concluirmos o encadeamento da nossa lista sem que ocorra alguma falha de segmentação na memória ([*Segmentation fault*](https://pt.wikipedia.org/wiki/Falha_de_segmenta%C3%A7%C3%A3o){:target="_blank"}).

Os esquemas abaixo exemplificam essa operação, tendo como objetivo inserir um valor 4 na lista de forma ordenada:

#### Passo 1:

Cria o novo nó.

![img](https://user-images.githubusercontent.com/39147407/130660965-8e0bffa1-386c-4264-bb3e-ae8081d445d8.png)


#### Passo 2:

Com o novo nó criado, devemos percorrer do nó ```atual``` até o fim da lista tal que ```atual != NULL``` e ```atual->dado < novo->dado```. Ao encontrar o nó anterior (```ant```) em relação ao último nó, devemos fazer com que ```ant->prox = novo```, ou seja:

![img](https://user-images.githubusercontent.com/39147407/130660976-221afb61-9431-464a-bf6b-724b5b4c48b4.png)

#### Passo 3:

Por fim, utilizaremos o ponteiro do novo nó para atualizar seu campo próximo (```prox```), fazendo com que o novo nó aponte para o nó ```atual``` de maior valor.

![img](https://user-images.githubusercontent.com/39147407/130660956-afb2a198-d613-4ff5-9478-17af246191ce.png)

Uma possível implementação para essa operação é mostrada abaixo:

<script src="https://gist.github.com/imsouza/f5bc642bcc3449efb09cda6f0f7f08c4.js"></script>

<br>

## Removendo um elemento do início da lista

Para remover um elemento do início de uma lista dinâmica encadeada é bastante simples. Como se trata de uma remoção do início, temos que fazer o ponteiro de início da lista apontar para o elemento seguinte a ele. Por fim, liberamos a memória referente ao antigo ponteiro de início da lista (```atual```). Fazemos isso para não perder a referência dos ponteiros. Segue abaixo uma das possíveis implementações:

<script src="https://gist.github.com/imsouza/9d9a91ee8bd6aec81b63b48a3c462639.js"></script>

<br>

## Removendo um elemento específico da lista

Para remover um elemento específico da lista, inicialmente precisamos procurar o nó que contém o elemento que queremos remover. Podemos fazer isso com o método de busca já implementado.

Os passos abaixo exemplificam o funcionamento do algoritmo, supondo que queremos remover o nó que contém o valor 4 da lista:

#### Passo 1:

Percorrer a lista em busca do nó que deve ser removido, caso exista, será apontado pelo ponteiro ```atual```.

![img](https://user-images.githubusercontent.com/39147407/130672269-40d09d3b-fcbb-47e5-adb3-d102bd2f79a5.png)

#### Passo 2:

Encontrado o nó, precisaremos agora do nó anterior ao elemento que queremos remover, a fim de facilitar o procedimento e evitar possíveis erros na memória. Antes de liberarmos o nó apontado por ```atual```, devemos atualizar o campo ```prox``` do nó apontado pelo ponteiro anterior (```ant```). Assim,

![img](https://user-images.githubusercontent.com/39147407/130672273-493b6268-39cf-434e-aacc-b944910b522c.png)

#### Passo 3:

Por fim, podemos fazer a desalocação do nó apontado por ```atual```.

![img](https://user-images.githubusercontent.com/39147407/130672285-aa28ed67-3b22-4ade-a559-cdde6d780574.png)

Segue abaixo a implementação do código:

<script src="https://gist.github.com/imsouza/52373b7343d44de959a4c25e4b77c1b9.js"></script>

<br>

## Removendo um elemento do final da lista

Para remover um elemento do final da lista, inicialmente precisamos procurar o último elemento da lista, ou seja, aquele que aponta para ```NULL```. Para isso, guardamos em um ponteiro auxiliar (```aux```) o endereço do primeiro elemento da lista e percorremos ela até que o elemento seguinte ao elemento atual (```aux->prox```) aponte para ```NULL```.

Segue abaixo a implementação da operação:

<script src="https://gist.github.com/imsouza/3c5524fd6a93bd4e88e44456234e341d.js"></script>

Note que usamos um ponteiro ```ant``` para guardar o elemento anterior da lista. Ao final do procedimento, temos que considerar que o último elemento da lista talvez seja o primeiro e o único, isso fica evidente na linha 11 do código acima. Caso contrário, o penúltimo elemento da lista (```ant```) irá apontar para o próximo elemento do último nó (```aux```), que neste caso será ```NULL```. 

Esse processo é exemplificado na linha 13. Por fim, terminando os dois processos e condições de remoção, liberamos a memória do antigo "fim" da lista (```aux```) na linha 16.

<br>

## Código final do TAD Lista

#### Lista.h
<script src="https://gist.github.com/imsouza/be00958783aecc227b3023a505e5cf69.js"></script>

#### Lista.c
<script src="https://gist.github.com/imsouza/272b4f7992cb376ec14bf76d77460015.js"></script>

#### Cliente.c
<script src="https://gist.github.com/imsouza/d13349a00711081016bc127b7b0ac01d.js"></script>

<br>

## Outras funções

Até aqui implementamos as principais funções de listas simplesmente encadeadas, mas, dependendo do propósito da aplicação, várias outras podem ser implementas. Como por exemplo:

- Obter o primeiro nó da lista;
- Obter o último nó da lista;
- Obter o nó anterior de um dado nó;
- Obter o n-ésimo elemento da lista;
- Entre outras.

<br>

## Análise de complexidade

O custo das operações da lista é algo que devemos ficar atentos. Na sequência, são mostradas as complexidades computacionais das principais operações de uma lista simplesmente encadeada dinâmica contendo *n* elementos:

- **Inserção no início**: envolve apenas a manipulação de alguns ponteiros, de modo que a sua complexidade é *O(1)*;
- **Inserção no final**: é preciso percorrer toda a lista até alcançar o seu final. Desse modo, a complexidade é *O(n)*;
- **Inserção ordenada**: é necessário procurar o ponto de inserção, que pode ser no meio, início ou fim. No pior caso, a complexidade é *O(n)* referente a inserção no final;
- **Remoção do início**: envolve apenas a manipulação de alguns ponteiros, de modo que a sua complexidade é *O(1)*;
- **Remoção do final**: é preciso percorrer toda a lista até alcançar o seu final. Desse modo, a complexidade é *O(n)*;
- **Remoção de um elemento específico**: é necessário procurar pelo elemento que será removido, que pode ser no meio, início ou fim. No pior caso, a complexidade é *O(n)* referente a remoção do final;
- **Consulta**: envolve a busca de um elemento, que pode estar no início, meio ou fim da lista. Assim, no pior caso, a complexidade é *O(n)* referente ao último elemento.

<br>

## Conclusão

Finalmente terminamos a implementação do nosso TAD de lista simplesmente encadeada. Dando continuidade nessa série sobre listas, falaremos sobre a lista dinâmica duplamente encadeada em C e as suas vantagens em relação à lista simplesmente encadeada.

<br><center><i>Obrigado pela leitura!</i></center>
