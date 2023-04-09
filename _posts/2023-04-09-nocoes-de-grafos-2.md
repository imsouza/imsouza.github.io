---
layout: post
title: "Noções de Grafos #2"
description: "A representação de grafos em um computador é uma questão importante a ser pensada quando estamos modelando um problema que necessita dessa estrutura..."
author: "Mateus Almeida"
image: /assets/thumbnails/img25.jpg
tags: [Estrutura de Dados]
---

![Birds](/assets/thumbnails/img25.jpg)

A representação de grafos em um computador é uma questão importante a ser pensada quando estamos modelando um problema que necessita dessa estrutura. Existem duas abordagens muito populares utilizadas para representar um grafo computacionalmente. Sendo elas: **matriz de adjacências** e **lista de adjacências**. Veremos nesse artigo o que elas são e como funcionam, além disso, será explorado os diversos tipos de grafos mais utilizados.

<br>

## Matriz de adjacência

A representação de um grafo, sendo ela por matriz ou por lista de adjacência varia muito de problema para problema. Não existe uma representação certa ou errada, mas existe a representação ideal que melhor se adequa para o problema em questão.

Uma matriz de adjacência faz o uso de uma matriz quadrada para descrever as relações entre os vértices. Nessa representação, um grafo contendo *N* vértices utiliza uma matriz de *N* linhas e *N* colunas para seu armazenamento. Em relação ás arestas, é atribuido o número **1** caso a aresta existe e **0** caso contrário.

> Essa representação não é indicada para um grafo que possui muitos vértices, mas poucas arestas ligando-os.

> Uma aresta é representada por uma marca na posição **[i,j]** da matriz.

![https://imgur.com/b0LMuFf.png](https://imgur.com/b0LMuFf.png)

<br>

## Lista de adjacência

Existe um problema de eficiência quanto o armazenamento do grafo na matriz de adjacência, este problema se deve ao fato de, além de haver a necessidade de um alto custo computacional *O(n)*, a matriz armazenar o valor **0** caso não exista uma aresta. A representação por lista de adjacência resolve este problema, sendo assim, ela armazena só os vértices que possuem arestas ligando-os. Essa representação faz o uso de uma estrutura de lista de vértices para descrever suas relações. 

Um grafo contendo *N* vértices utiliza um array de ponteiros de tamanho *N* para armazenar os vértices do grafo. Em seguida, para cada vértice é criada uma lista de arestas, em que cada posição da lista armazena o índice do vértice e as quais vértices ele se conecta. 

> A lista de adjacência é mais indicada para um grafo que possui muitos vértices, mas poucas arestas ligando-os.

> Essa representação possui um custo computacional de *O(N+M)*, onde *N* é o número de vértices e *M* é o número de arestas.

Além disso, para saber se dois vértices estão conectados é necessário percorrer todas as arestas de um deles, enquanto na matriz de adjacência essa operação é realizada de forma imediata.

![https://imgur.com/OTroIkj.png](https://imgur.com/OTroIkj.png)

<br>

## Tipos de grafos

### Trivial e simples

UM grafo **trivial** possui um único vértice e nenhuma aresta. Já um grafo **simples** é um grafo não direcionado, sem laços e sem arestas paralelas.

![https://imgur.com/JyfUSgv.png](https://imgur.com/JyfUSgv.png)

### Completo

É um grafo **simples** onde cada vértice se conecta a todos os outros vértices do grafo.

![https://imgur.com/enNNffm.png](https://imgur.com/enNNffm.png)

### Regular

Qualquer grafo cujos vértices possuem o mesmo grau.

> TOdo grafo completo também é **regular**, mas nem todo grafo regular é **completo**.

![https://imgur.com/YQCFL7C.png](https://imgur.com/YQCFL7C.png)

### Subgrafo

> Um grafo *G′=(V′, A′)* é um **subgrafo** de *G=(V,A)* se *V′* for um subconjunto
de *V* e, para cada par de vertices *(x,y)* em *V′*, *(x,y)* são adjacentes em *G′* se, e somente se, eles sao adjacentes em *G*.

Em outras palavras, *G'=(V',A')* é um subgrafo de *G=(V,A)* se o conjunto de vértices *V'* for um **subconjunto** de *V*, onde *V'* está contido em *V*, e se o conjunto de arestas *A'* for um subconjunto de *A*, onde *A'* está contido em *A*.

![https://imgur.com/Sj6dfRw.png](https://imgur.com/Sj6dfRw.png)

### Bipartido

Um grafo *G(V,A)* é chamado de **bipartido** se o seu conjunto de vértices puder ser dividido em dois outros subconjuntos 'V1' e 'V2' sem intersecção. Já as arestas conectam apenas os vértices que estão em subconjuntos diferentes, ou seja, uma aresta sempre conecta um vértice de 'V1' a 'V2' ou vice-versa, porém ela nunca conecta vértices do mesmo subconjunto entre si.

> Todo ciclo tem comprimento par em um grafo bipartido;

> Para checar que um grafo é bipartido basta checar se ele possui ao menos um ciclo de comprimento ímpar.

![https://imgur.com/qg7Jvar.png](https://imgur.com/qg7Jvar.png)

### Conexo e desconexo

Um **grafo conexo** possui um caminho ligando quaisquer dois vértices, ou seja, para quais quer dois vértices distintos sempre existe um caminho que os une. Em contrapartida, em um **grafo desconexo** isso não acontece. Um grafo desconexo contém no mínimo duas partes, cada uma delas chamada de **componente conexa**.

![https://imgur.com/KUCTCIa.png](https://imgur.com/KUCTCIa.png)

### Isomorfo

Dois grafos são ditos **isomorfos** se existir uma **função** que faça o **mapeamento** dos vértices e arestas de modo que os dois grafos se tornem correspondentes. Resumidamente, dois grafos são isomorfos se houver uma função **f** tal que, para cada dois vértices *a* e *b* adjacentes em um grafo *G1*, *f(a)* e *f(b)* também sejam adjacentes em um grafo *G2*.

Existem algumas condições mínimas para que dois grafos sejam isomorfos. São elas:

- Possuírem o mesmo número de vértices;
- Possuírem o mesmo número de arestas;
- POssuírem o mesmo número de vértices de grau *n*, para qualquer valor *n* entre 0 e o número de vértices que o grafo contém.

![https://imgur.com/bxKcRZt.png](https://imgur.com/bxKcRZt.png)

### Ponderado

As arestas possuem **valores** (pesos) associados a elas. Esse tipo de grafo e largamente usado nas engenharias para representação de grandezas, altitudes, distâncias, capacidades ou fluxos.

![https://imgur.com/c6PY6nz.png](https://imgur.com/c6PY6nz.png)

### Euleriano

Um **grafo euleriano**  ́e um tipo especial de grafo que possui um ciclo que visita as suas arestas apenas uma vez, iniciando e terminando no mesmo vertice. Esse ciclo dá-se o nome de **ciclo euleriano**.

![https://imgur.com/bmuDnDi.png](https://imgur.com/bmuDnDi.png)

### Semieuleriano

Um **grafo semieuleriano** possui um **caminho aberto**, cujo **não é** um ciclo, em que visita todas as suas arestas apenas uma vez. Dá-se o nome de **caminho euleriano** para esse caminho.

![https://imgur.com/yxIzfMV.png](https://imgur.com/yxIzfMV.png)

### Hamiltoniano

Um grafo é dito **hamiltoniano** quando possui um caminho que visita todos os seus vértices apenas uma vez.

> O problema de verificar se existe um caminho (ou ciclo) hamiltoniano em um grafo é NP-completo, ou seja, é pouco provável que exista um algoritmo polinomial para resolver isso.

![https://imgur.com/ktlWStV.png](https://imgur.com/ktlWStV.png)

### Planar

Todo grafo que pode ser desenhado no plano, com pontos representando vertices e linhas contınuas conectando pares de pontos representando arestas, sem que haja duas arestas se intersectando.

### Árvore

Uma árvore é um **grafo acíclico**, não orientado e conexo. A diferença de uma árvore para uma floresta (conjunto de árvores e sub-árvores) é que em uma floresta existe a possibilidade do grafo ser desconexo.

> Toda árvore é um grafo mas nem todo grafo é uma árvore.

![https://imgur.com/mCJ0aay.png](https://imgur.com/mCJ0aay.png)

<br>

## Conclusão

Neste artigo exploramos os principais tipos de grafos utilizados, como o trivial, simples, completo, regular, subgrafo e bipartido. Além disso, vimos como representar a estrutrua de um grafo na máquina. A compreensão desses conceitos é fundamental para a solução de problemas que envolvem grafos e para a compreensão dos próximos artigos que virão em sequência.

<br><center><i>Obrigado pela leitura!</i></center>