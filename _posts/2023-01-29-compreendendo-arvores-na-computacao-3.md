---
layout: post
title: "Compreendendo Árvores na Computação #3"
description: "As árvores binárias de busca (BST) são estruturas de dados muito úteis para armazenar e organizar informações de forma rápida e eficiente...."
author: "Mateus Almeida"
image: /assets/thumbnails/img21.jpeg
tags: [Estrutura de Dados]
---

![Birds](/assets/thumbnails/img21.jpeg)

As árvores binárias de busca (BST) são estruturas de dados muito úteis para armazenar e organizar informações de forma rápida e eficiente. No entanto, ao inserir ou remover elementos de forma desordenada, a árvore pode se desequilibrar, tornando as operações de busca e inserção menos eficientes.

Para resolver este problema, foram criadas as árvores balanceadas, que garantem que a altura da árvore seja sempre menor do que a altura máxima possível para uma árvore binária de busca com o mesmo número de nós.

Uma das implementações mais conhecidas de árvores balanceadas é a AVL (Adelson-Velsky e Landis). Ela foi a primeira árvore balanceada a ser proposta e ainda é considerada uma das mais eficientes.

<br>

## Fator de balanceamento
![FB](https://imgur.com/RmG14AU.png)


A chave para o balanceamento em uma árvore AVL é o fator de balanceamento (FB) de cada nó. Ele é calculado como a diferença entre a altura da subárvore esquerda e a altura da subárvore direita. Se o FB de um nó for -1, 0 ou 1, significa que a árvore está balanceada. Se o FB for maior do que 1 ou menor do que -1, significa que a árvore está desequilibrada e precisa ser reestruturada.

![B1](https://imgur.com/UeooPIB.png)

A imagem acima é um exemplo de uma árvore desbalanceada, enquanto na de baixo foi balanceada.

![B2](https://imgur.com/oh4aehr.png)

Para reestruturar a árvore, são utilizadas as operações de Rotação Simples à Esquerda (RSL), Rotação Simples à Direita (RSD), Rotação Dupla à Esquerda (RDL) e Rotação Dupla à Direita (RDR). Cada uma delas é aplicada dependendo do fator de balanceamento e da estrutura da árvore.

<br>

## Rotações

### Rotação à esquerda (Left Rotation)

A rotação à esquerda é realizada quando o nó desbalanceado está localizado na subárvore direita e a diferença de altura entre as subárvores esquerda e direita é maior que 1. Nessa rotação, o nó desbalanceado é movido para a esquerda, e seu filho à direita assume sua posição anterior. Isso equilibra a árvore e aumenta a altura da subárvore esquerda.

![LR](https://imgur.com/9oUd6ss.png)

A figura abaixo mostra os passos ao inserirmos três nós com chaves 1,2 e 3:

![LR](https://imgur.com/SLUcVKc.png)

### Rotação à direita (Right Rotation)

A rotação à direita é realizada quando o nó desbalanceado está localizado na subárvore esquerda e a diferença de altura entre as subárvores esquerda e direita é maior que 1. Nessa rotação, o nó desbalanceado é movido para a direita, e seu filho à esquerda assume sua posição anterior. Isso equilibra a árvore e aumenta a altura da subárvore direita.

![RR](https://imgur.com/b5mT2gh.png)

A figura abaixo mostra os passos ao inserirmos três nós com chaves 3,2 e 1:

![RR](https://imgur.com/tNw2sdD.png)

### Rotação dupla à esquerda (Left-Right Rotation):

A rotação dupla à esquerda é realizada quando o nó desbalanceado está localizado na subárvore esquerda e a diferença de altura entre as subárvores esquerda e direita é maior que 1. Nessa rotação, é realizada primeiramente uma rotação à direita no filho à esquerda do nó desbalanceado, e em seguida uma rotação à esquerda no próprio nó desbalanceado. Isso equilibra a árvore e aumenta a altura da subárvore esquerda.

![LR](https://imgur.com/yaSqLPU.png)

A figura abaixo mostra os passos ao inserirmos três nós com chaves 3,1 e 2:

![LR](https://imgur.com/8FGAjL0.png)

### Rotação dupla à direita (Right-Left Rotation):

A rotação dupla à direita é realizada quando o nó desbalanceado está localizado na subárvore direita e a diferença de altura entre as subárvores esquerda e direita é maior que 1. Nessa rotação, é realizada primeiramente uma rotação à esquerda no filho à direita do nó desbalanceado, e em seguida uma rotação à direita no próprio nó desbalanceado. Isso equilibra a árvore e aumenta a altura da subárvore direita.

![RL](https://imgur.com/LWGQV2E.png)

A figura abaixo mostra os passos ao inserirmos três nós com chaves 1,3 e 2:

<p align="center">
	<img src="https://imgur.com/bkowiVH.png" align="center">
</p>

<br>

## Código

Aqui está o código das estruturas de uma árvore AVL em C:

<script src="https://gist.github.com/imsouza/ff6a88cd16c98b9a4ea8d4b332e24f95.js"></script>

As principais funções de uma árvore AVL são:

- A função de inserção, que insere um novo nó na árvore e verifica se é necessário reestruturar a árvore para mantê-la balanceada:

<script src="https://gist.github.com/imsouza/83ae1c8ab06428e17024d20da2aea936.js"></script>

- As funções de rotação que realizam as reestruturações da árvore:

<script src="https://gist.github.com/imsouza/59e5172dac3f283e766da3b97d18a301.js"></script>

- A função de remover um nó específico da estrutura, levando em conta a necessidade de manter o equilíbrio da árvore:

<script src="https://gist.github.com/imsouza/3bb188a1d3ed6318ec62225fa8af184f.js"></script>


### Código completo

<script src="https://gist.github.com/imsouza/8f9f2939be38ac4db2e463bea92ae298.js"></script>

É importante notar que essas funções não são exclusivas para árvores AVL, elas também podem ser utilizadas em árvores binárias de busca simples. A diferença está na forma como a árvore é balanceada após cada operação, garantindo que a altura da árvore seja sempre a menor possível.

Vale ressaltar que essas funções são apenas uma implementação básica de uma árvore AVL e podem ser melhoradas ou adaptadas de acordo com as necessidades do seu projeto. Além disso, é recomendado sempre testar o código em diferentes casos de uso antes de implementá-lo em um sistema real.

<br>

## Conclusão

Em resumo, as árvores balanceadas são estruturas de dados que garantem alta performance em operações de busca, inserção e remoção, mantendo um equilíbrio entre as alturas dos nós da árvore. A árvore AVL é uma das implementações mais comuns de árvores balanceadas, que garante uma altura máxima de log2(n) para árvores com n nós, garantindo assim uma complexidade temporal O(log n) para as principais operações.

<br>

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
