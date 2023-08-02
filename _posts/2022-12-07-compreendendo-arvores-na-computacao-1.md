---
layout: post
title: "Compreendendo Árvores na Computação #1"
description: "Diferente da biologia, as árvores na computação têm o estranho comportamento de crescerem de cabeça para baixo..."
author: "Mateus Almeida"
image: /assets/thumbnails/img19.jpg
tags: [Estrutura de Dados]
---

![Airplane](/assets/thumbnails/img19.jpg)

Diferente da biologia, as árvores na computação têm o estranho comportamento de crescerem de cabeça para baixo. Existem várias “espécies”, ou melhor, vários tipos de árvores na computação, cada uma com sua finalidade e propósito específicos, umas mais eficientes que outras e outras mais complexas que todas as demais. De fato, as árvores possuem um grande papel na história da computação e entender como elas funcionam é um dos passos mais importantes para quem está cursando algum curso da área. Este é o primeiro artigo de uma série de outros que virão em seguida sobre este assunto onde abordaremos os conceitos teóricos e práticos que envolvem essas estruturas.

&nbsp;

## Contextualizando 

Mas afinal, o que são árvores? Diferentemente dos *arrays*, listas, pilhas e filas, as árvores na computação são estruturas de dados não lineares. É uma estrutura usada principalmente para armazenar dados de forma hierárquica.

Uma árvore é um tipo especial de **grafo** não direcionado, conexo e acíclico. Ou seja, como um grafo, a árvore também é um modelo matemático que representa os objetos de determinado conjunto. Porém, enquanto o grafo permite modelar as relações entre objetos de um conjunto, a árvore modela as relações hierárquicas entre esses objetos.

> Uma árvore é definida recursivamente como um conjunto de um ou mais nós, onde um nó é chamado de **raiz** e os demais nós restantes podem ser particionados em conjuntos não vazios, onde cada um é uma subárvore da raiz. 

A figura abaixo mostra uma árvore em que o nó **A** é o nó raiz; os nós **B**, **C**, e **D** são os filhos do nó raiz e estes filhos formam subárvores da árvore com raiz no nó **A**.

![Representação](https://user-images.githubusercontent.com/39147407/206097267-807351df-bfa0-4bb8-a013-d221f2fb70eb.png)

Existem diversas aplicações das árvores para qualquer problema que envolva algum tipo de relação hierárquica, alguns exemplos são:

- Diretórios do computador;
- Modelagem de algoritmos;
- Busca de dados armazenados no computador;
- Taxonomia.

&nbsp;

## Terminologia básica

A figura abaixo representa os principais conceitos relativos às árvores seguida de suas nomenclaturas básicas:

![Screenshot_2022-12-07_02-46-17](https://user-images.githubusercontent.com/39147407/206098724-bf922184-bb7d-46e0-b575-ea7652b68061.png)

**Raiz**: é o nó localizado na parte mais alta da árvore, o único que não possui pai. Dado um nó raiz **R**, ele será o nó superior da árvore. Se **R = NULL**, significa que a árvore está vazia.

**Subárvores**: se o nó raiz **R** não for **NULL**, então as árvores **T1**, **T2** e **T3** são chamadas de subárvores de **R**.

**Nó folha**: um nó que não tem filhos é chamado de nó folha ou nó terminal.

**Nó interno**: um nó interno é qualquer nó de uma árvore que possui nós filhos.

**Irmãos**: Nós com o mesmo pai são irmãos.

**Caminho**: Um caminho do nó *n_1* para *n_k* é definido como uma sequência de nós *n_1,n_2,n_3,...,n_k* tal que *n_i* é o pai de *n_i+1* para 1 <= *i* < *k*. Em suma, um caminho é uma sequência de arestas consecutivas. Na figura anterior, o caminho do nó raiz **A** ao nó **I** é dado como: **A**, **D** e **I**.

**Comprimento de um caminho**: O comprimento de um caminho é o número de arestas no caminho. Há um caminho de comprimento zero de cada nó até ele mesmo.

**Ancestral e descendente**: Se existe um caminho *n_1* a *n_2*, então *n_1* é um ancestral de *n_2* e *n_2* é descendente de *n_1*. O nó raiz não possui ancestrais enquanto os nós folha não possuem descendentes. Na árvore anterior, os nós **A**, **C** e **G** são os ancestrais do nó **K**. Já os nós **C**, **G**, **J** e **K** são os descendentes do nó **A**.

**Altura**: A altura de *n_i* é o comprimento do caminho mais longo de *n_i* até uma folha. Assim, todas as folhas têm altura 0. A altura de uma árvore é igual à altura da raiz. Na árvore da figura anterior, o nó **C** tem altura 1 e a árvore tem altura 3. A altura é o número total de níveis de uma árvore, sendo assim, a altura é a profundidade da árvore.

**Nível**: O nível é dado pelo número de nós que existem no caminho entre dado um nó e a raiz.

**Grau**: O grau de um nó é dado pelo número de subárvores que ele possui.

&nbsp;

## Tipos de árvore

Na computação, assim como na natureza, existem vários tipos de árvores. Cada uma delas foi desenvolvida pensando em diferentes tipos de aplicações e propósitos. Algumas delas são:

- Árvore Binária de Busca;
- Árvore *AVL*;
- Árvore Rubro-Negra;
- Árvore B, B+ e B*;
- Árvore 2-3;
- Árvore 2-3-4;
- Árvore *Trie*;
- Árvore Patricia;
- *Quadtree*;
- *Octree*;
- etc.

&nbsp;

## Conclusão

Como dito no começo deste artigo, este é o primeiro de muitos. Este artigo é de suma importância para entender os conceitos, nomenclaturas e definições dessa estrutura. Em seguida, começaremos a abordar uma árvore muito utilizada na computação: a árvore binária.

&nbsp;

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
