---
layout: post
title: "Noções de Grafos #3"
description: "É de fundamental importância compreender o algoritmo de busca de profundidade e largura em grafos. Existem várias aplicações que fazem o uso de algoritmos de busca..."
author: "Mateus Almeida"
image: /assets/thumbnails/img26.jpeg
tags: [Estrutura de Dados]
---

![Birds](/assets/thumbnails/img26.jpeg)

É de fundamental importância compreender o algoritmo de busca de profundidade e largura em grafos. Existem várias aplicações que fazem o uso de algoritmos de busca, podendo ser utilizadas em simulação computacional para encontrar a saída de um labirinto, ordenação topológica de um grafo, achar o menor caminho entre dois vértices. Essas são só algumas aplicações de incontáveis outras.

![Imgur](https://imgur.com/VHOrYu5.gif)

<br>

## Busca em profundidade

A busca em profundidade (*depth first search*) é um algoritmo que explora um grafo a partir de um vértice inicial, visitando o máximo possível de vértices vizinhos antes de realizar o *backtracking* (retrocesso). Em outras palavras, a busca começa em um vértice e se **aprofunda** em seus vizinhos, até que um dos dois casos ocorra: o objetivo da busca é encontrado ou um vértice sem vizinhos que possam ser visitados é alcançado.

A busca em profundidade usa o mecanismo de *backtracking*. Isso significa que o algoritmo retrocede pelo mesmo caminho percorrido até encontrar outro caminho alternativo, visando encontrar o objetivo da busca ou uma solução alternativa.

Em resumo, a busca em profundidade é um algoritmo de busca de grafos que começa em um vértice e explora seus vizinhos até que não haja mais vértices a serem explorados ou o objetivo seja encontrado usando do *backtracking* para encontrar caminhos alternativos.

![Imgur](https://imgur.com/e9EkwuR.gif)

Abaixo consta o algoritmo de busca em profundidade:

<script src="https://gist.github.com/imsouza/dd7add87f2c263ca67da6c8414418f08.js"></script>

### Passos

![1](https://imgur.com/wSRGPgG.png)
![2](https://imgur.com/KeIyMNV.png)
![3](https://imgur.com/VEpToId.png)
![4](https://imgur.com/PhRQoG6.png)
![5](https://imgur.com/hy9F3wb.png)
![6](https://imgur.com/vMAjam6.png)
![7](https://imgur.com/wcfXU21.png)

<br>

## Busca em largura

O algoritmo de busca em largura (*breadth first search*) é um método para explorar um grafo. Ele começa a partir de um vértice inicial e, em seguida, **visita todos os seus vizinhos** antes de explorar mais a fundo. Em outras palavras, a busca avança em uma largura constante, visitando todos os vértices a uma distância *k* antes de visitar os vértices a uma distância *k+1*. O processo continua até que todos os vértices tenham sido visitados ou até que o objetivo da busca seja alcançado.

> O algoritmo de busca em largura faz o uso do conceito de fila.

Durante a busca, o algoritmo de busca em largura utiliza uma **fila** para gerenciar os vértices visitados. Ele marca cada vértice como "visitado" antes de visitar os vizinhos desse vértice. Em seguida, adiciona cada vizinho à fila. Ele visita os vizinhos na ordem em que eles foram adicionados à fila, garantindo que todos os vértices a uma distância *k* sejam visitados antes de visitar qualquer vértice a uma distância *k+1*.

A busca em largura é amplamente utilizada em problemas de grafos e tem um custo de O(*|V|+|A|*) no pior caso. Isso significa que o custo da busca é **proporcional** ao número de vértices e arestas do grafo.

![Imgur](https://imgur.com/Jn3jX45.gif)

Abaixo consta a implementação do algoritmo de busca em largura:

<script src="https://gist.github.com/imsouza/fcd476cf5e4710bb01aafca3fdd7de54.js"></script>

### Passos

![1](https://imgur.com/vxdYSqL.png)
![2](https://imgur.com/yXXdkP2.png)
![3](https://imgur.com/baQHcnf.png)
![4](https://imgur.com/9fnEoLH.png)
![5](https://imgur.com/4lvN9v2.png)
![6](https://imgur.com/myB6uOO.png)

<br>

## Conclusão

Em suma, os algoritmos de busca em profundidade e busca em largura são fundamentais para a exploração de grafos e têm um papel significativo em diversas aplicações da computação, como simulação de labirintos, ordenação topológica de grafos e até mesmo em inteligência artificial. Com a compreensão adequada desses algoritmos, é possível analisar e solucionar problemas complexos em diversas áreas da computação.

<br><center><i>Obrigado pela leitura!</i></center>