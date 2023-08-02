---
layout: post
title: "Noções de Grafos #1"
description: "Grafos são uma estrutura matemática fundamental em muitas áreas do conhecimento, desde a ciência da computação até a física e a biologia..."
author: "Mateus Almeida"
image: /assets/thumbnails/img24.jpeg
tags: [Estrutura de Dados]
---

![Birds](/assets/thumbnails/img24.jpeg)

Grafos são uma estrutura matemática fundamental em muitas áreas do conhecimento, desde a ciência da computação até a física e a biologia. Eles são usados em aplicações cotidianas, como encontrar a melhor rota para chegar a um local, planejar uma rede de transporte eficiente ou criar algoritmos de recomendação personalizados. Nesta série de artigos, vamos explorar os conceitos básicos de um grafo, seus diferentes tipos, suas representações e implementações. 

&nbsp;

## Definição

Diversas aplicações necessitam da representação de suas informações através de um conjunto de objetos relacionados entre si. Essa relação entre objetos pode ser dita como um grafo. 

> Um grafo é um modelo matemático que representa as relações entre objetos de determinado conjunto.

Um grafo *G(V,A)* é definido em termos de dois conjuntos, sendo eles: 
- Um conjunto de vértices *V*: entidades que representam o grafo (seus pontos);
- Um conjunto de arestas (ou arcos) *A*: realiza a conexão de pares de vértices.

![https://imgur.com/Pw7zDK9.png](https://imgur.com/Pw7zDK9.png)

> Dois vértices são considerados **adjacentes** se existir uma aresta ligando-os.

Abaixo está um exemplo de representação de um grafo *G(V,A)*, contendo os vértices *V={1,2,3,4}* e arestas *A={(1,2),(1,4),(2,3),(2,4)}*:

![https://imgur.com/Od6qYAg.png](https://imgur.com/Od6qYAg.png)

&nbsp;

## Conceituando grafos

### Digrafo

Até agora só foi exemplificado grafos que não possuem direção, apenas com uma aresta simples conectando um par de vértices. No entanto, muitas aplicações exigem que o grafo seja direcionado (também chamado de **digrafo**). Em um digrafo, existe uma orientação quanto ao sentido da aresta, ou seja, se uma aresta liga os vértices *A* e *B*, isso significa que só podemos ir de *A -> B* e não o contrário. Sendo assim, em um grafo não direcionado, não existe uma orientação quanto ao sentido da aresta.

![https://imgur.com/Mx3LWty.png](https://imgur.com/Mx3LWty.png)

&nbsp;

### Grau

O **grau** de um vértice corresponde a quantidade de arestas que conectam aquele vértice a outro vértice do grafo. Resumidamente, é o número de vizinhos daquele vértice em questão.

Os digrafos possuem uma particularidade em especial, um grau para **entrada** e outro para **saída**.

- **Grau de entrada**: corresponde ao número de arestas que chegam no vértice;
- **Grau de saída**: corresponde ao número de arestas que saem do vértice.

![https://imgur.com/ONH8Rsv.png](https://imgur.com/ONH8Rsv.png)

&nbsp;

### Laços

Uma aresta é chamada de **laço** se seu vértice de partida é o mesmo que o de chegada, ou seja, a aresta conecta o vértice a ele mesmo.

![https://imgur.com/3k9Ztij.png](https://imgur.com/3k9Ztij.png)

&nbsp;

### Passeio

Um **passeio** em um grafo é uma sequência alternada de vértices e arestas que começa e termina com vértices. Ou seja, é um percurso feito de forma "livre" pelo grafo, um passeio pela própria definição da palavra.

![https://imgur.com/VsSCLR1.png](https://imgur.com/VsSCLR1.png)

&nbsp;

### Trajeto

Um **trajeto** ou **trilha** em um grafo é um passeio em que todas as suas arestas são distintas. 

&nbsp;

### Trajeto fechado

Um **trajeto fechado** ou **circuito** em um grafo é um trajeto em que o vértice inicial e final são iguais.

&nbsp;

### Ciclo

Um ciclo é um caminho em que os vértices incial e final são o mesmo vértice. Neste caso, o **comprimento do ciclo** é o número de vértices que é necessário percorrer do vértice inicial até o final, onde o vértice final não é contado pois ele já foi contado como inicial.

> Um circuito em que todos os vértices são distintos (com exceção do primeiro e último) é chamado de ciclo.

![https://imgur.com/uQ1NVae.png](https://imgur.com/uQ1NVae.png)

> Um grafo acíclico é um grafo que não contém ciclos simples. Um ciclo simples é dito simples se cada vértice aparece apenas uma vez no ciclo.

&nbsp;

### Caminho

Um **caminho** entre dois vértices é uma sequência de vértices em que cada vértice está conectado ao vértice seguinte por meio de uma aresta. Neste caso, o número de vértices que é necessário percorrer de um vértice até o outro é denominado **comprimento do caminho**.

> Um caminho é chamado de **caminho simples** se nenhum dos vértices se repetir ao longo dele.

&nbsp;

### Arestas múltiplas

Um grafo que possui arestas múltiplas é chamado de **multigrafo**. Trata-se de um tipo de grafo especial que permite mais de uma aresta conectando o mesmo par de vértices. Neste caso, as arestas são ditas paralelas.

&nbsp;

## Conclusão

Este primeiro artigo abordou somente os conceitos básicos, mas de suma importância da teoria dos grafos. A compreensão desses conceitos iniciais é fundamental para a resolução de problemas e análises mais complexas envolvendo essas estruturas.

&nbsp;

## Referências

[DFS and BFS algorithms]( https://medium.com/analytics-vidhya/a-quick-explanation-of-dfs-bfs-depth-first-search-breadth-first-search-b9ef4caf952c){:target="_blank"}

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>