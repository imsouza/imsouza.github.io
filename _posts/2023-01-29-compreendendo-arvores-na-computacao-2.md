---
layout: post
title: "Compreendendo Árvores na Computação #2"
description: "As árvores binárias são uma estrutura de dados fundamental que consiste em nós, cada um dos quais possui pelo menos um filho esquerdo e um filho direito..."
author: "Mateus Almeida"
image: /assets/thumbnails/img19.jpg
tags: [Estrutura de Dados]
---

![Sky](/assets/thumbnails/img20.jpg)

As árvores binárias são uma estrutura de dados fundamental que consiste em nós, cada um dos quais possui pelo menos um filho esquerdo e um filho direito. Elas são utilizadas para armazenar e organizar informações de maneira hierárquica, possibilitando operações de busca, inserção e remoção de elementos em tempo constante.

As árvores binárias de busca são uma variante das árvores binárias, onde cada nó possui uma chave e todas as chaves dos nós filhos à esquerda são menores do que a chave do nó pai, enquanto as chaves dos nós filhos à direita são maiores. Isso permite que as operações de busca sejam realizadas de maneira eficiente, pois é possível descartar metade dos nós a cada comparação.

Exemplo de representação gráfica de uma árvore binária de busca cujo objetivo é encontrar a chave 27:

![Gif](https://imgur.com/QDwcFwq.gif)

Na imagem acima, cada nó possui uma chave numérica e setas apontando para os filhos à esquerda e à direita. O nó raiz possui a chave 21 e os nós filhos possuem chaves menores ou maiores.

<br>

## Percursos

A árvore possui três maneiras de percorrer sua estrutura, sendo elas:

**Em-ordem**: Esse percurso percorre os nós da árvore da seguinte maneira: primeiro, os nós da sub-árvore esquerda são percorridos recursivamente, em seguida, o nó raiz é visitado, e por último, os nós da sub-árvore direita são percorridos recursivamente. Esse percurso geralmente é usado para percorrer uma árvore binária de busca e imprimir os nós em ordem crescente.

**Pré-ordem**: Esse percurso percorre os nós da árvore da seguinte maneira: primeiro, o nó raiz é visitado, em seguida, os nós da sub-árvore esquerda são percorridos recursivamente, e por último, os nós da sub-árvore direita são percorridos recursivamente. Esse percurso geralmente é usado para fazer uma cópia de uma árvore binária.

**Pós-órdem**: Esse percurso percorre os nós da árvore da seguinte maneira: primeiro, os nós da sub-árvore esquerda são percorridos recursivamente, em seguida, os nós da sub-árvore direita são percorridos recursivamente, e por último, o nó raiz é visitado. Esse percurso geralmente é usado para liberar a memória alocada para uma árvore binária.

<br>

## Código

Segue abaixo a implementação completa da árvore binária de busca:

<script src="https://gist.github.com/imsouza/760fd7bb9e7c2675ee8165865504e66b.js"></script>

A função ```removerNo()```, como o próprio nome sugere, remove um nó com um determinado valor na árvore binária de busca. Ela funciona recursivamente, percorrendo a árvore até encontrar o nó a ser removido. Dependendo da posição do nó e se ele tem filhos ou não, a função remove o nó de forma apropriada mantendo a estrutura da árvore binária de busca.

> Nota: A função ```encontrarMinimo(raiz->direita)``` é uma função auxiliar que encontra o nó com o menor valor na sub-árvore direita.

É importante notar que as árvores binárias de busca só são eficientes quando os elementos são inseridos de maneira aleatória, pois se os elementos são inseridos em ordem crescente ou decrescente, a árvore se transforma em uma lista encadeada e as operações passam a ser realizadas em tempo linear.

<br>

## Conclusão

Em resumo, as árvores binárias e binárias de busca são estruturas de dados fundamentais para armazenar e organizar informações de maneira hierárquica, permitindo operações de busca, inserção e remoção em tempo constante. Elas são utilizadas em diversas áreas, como algoritmos de ordenação, inteligência artificial e programação competitiva.
  
<br><center><i>Obrigado pela leitura!</i></center>