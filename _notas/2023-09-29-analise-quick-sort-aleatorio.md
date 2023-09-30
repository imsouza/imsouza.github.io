---
layout: note
title: "Análise Quick Sort Aleatório"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
---

## Pseudocódigo

### Quick Sort Aleatório

<pre class="responsive-latex">
1  |PROCEDIMENTO QuickSortAleatorio(A[], p, r : Inteiro):
2  |INICIO
3  |  |SE p < r, ENTÃO:
4  |  |  |q <- Particiona(A, p, r)
5  |  |  |QuickSortAleatorio(A, p, q-1)
6  |  |  |QuickSortAleatorio(A, q+1, r):
7  |  |FIM-SE
8  |FIM
</pre>

### Troca

<pre class="responsive-latex">
1  |PROCEDIMENTO Troca(A[], i, j : Inteiro):
2  |VAR
3  |  |temp : Inteiro
4  |INICIO
5  |  |temp <- A[i]
6  |  |A[i] <- A[j]
7  |  |A[j] <- temp
8  |FIM
</pre>

### Particiona Aleatório

<pre class="responsive-latex">
1  |PROCEDIMENTO ParticionaAleatorio(A[], p, r : Inteiro):
2  |INICIO
3  |  |i <- Random(p,r)
4  |  |Troca(A, i, r)
5  |  |Retorna Particiona(A, p, r)
6  |FIM
</pre>

### Particiona

<pre class="responsive-latex">
1  |PROCEDIMENTO Particiona(A[], p, r : Inteiro):
2  |VAR
3  |  |pivo, i : Inteiro
4  |INICIO
5  |  |pivo <- A[r]
6  |  |i <- p - 1
7  |  |PARA j <- p ATÉ r - 1, FAÇA:
8  |  |  |SE A[j] <= pivo, ENTÃO:
9  |  |  |  |i <- i + 1
10 |  |  |  |Troca(A, i, j)
11 |  |  |FIM-SE
12 |  |FIM-PARA
13 |  |Troca(A, i+1, r)
14 |  |Retorna i+1
15 |FIM
</pre>

## Complexidade de tempo
Para \\(1 \leq i \leq n\\), \\(S_{i}\\) denota o elemento de índice i (o i-ésimo menor elemento) no conjunto S. Considere a variável \\(X_{ij}\\), que assume o valor 1 se \\(S_{i}\\) e \\(S_{j}\\) forem comparados durante a execução do Quicksort, e assume o valor 0 (zero) caso contrário. Dessa forma \\(X_{ij}\\) é um contador do número de comparações. Logo o número total de comparações é denotado por:

$$
T_{c} = \sum_{i=1}^{n}\left ( \sum_{j > i}^{n} (X_{ij}) \right ) 
$$

Nós estamos interessados no número médio esperado de comparações, assim:

$$
E[T_{c}] = \left [ \sum_{i=1}^{n}\left ( \sum_{j > i}^{n} (X_{ij})\right 
) \right ]
\\=\sum_{i=1}^{n}\left ( \sum_{j > i}^{n} (E[X_{ij}]) \right )
$$

Assumindo que \\(p_{ij}\\) é a probabilidade de \\(S_{i}\\) ser comparado com \\(S_{j}\\) em uma execução do QuickSort. Logo, \\(E[X_{ij}] = \\) 0\\(\cdot \\)P(\\(S_{i}\\) não ser comparado com \\(S_{j}\\)) + 1\\(\cdot \\)P(\\(S_{i}\\) ser comparado com \\(S_{j}\\)).

$$
\therefore E[X_{ij}] = 1 \cdot p_{ij} + 0 \cdot (1-p_{ij})
\\=E[X_{ij}] = p_{ij}
\\=E[T_{c}] = E\left [ \sum_{i=1}^{n}\left ( \sum_{j > i}^{n} (p_{ij}) \right ) \right ]
$$

Para facilitar a determinação de \\(p_{ij}\\), nós consideramos a execução deo QuickSort como uma árvore binária de pesquisa T, onde cada nó da árvore é reotulado com um elemento de S. S raiz y comparada com os elementos nas duas sub-árvores, mas nennhuma comparação é executada entre um elemento da sub-árvore esquerda e um elemento da sub-árvore direita. Dessa forma, existe uma comparação entre \\(S_{i}\\) e \\(S_{j}\\), se e somente se \\(S_{i}\\) é antecessor de \\(S_{j}\\) ou vice-versa.

>Existe uma comparação entre \\(S_{i}\\) e \\(S_{j}\\), se e somente se \\(S_{i}\\) ou \\(S_{j}\\) ocorre primeiro na permutação \\(p_{i}\\) que qualquer elemento de \\(S_{k}\\) tal que i < k < j.

>Qualquer um dos elementos \\(S_{i}, S_{(i+1)}, ..., S_{(j)}\\) é igualmente provável de ser o primeiro elemento a ser escolhido como pivô, e assim aparecer primeiro em \\(p_{i}\\). Dessa forma, a probabilidade que este elemento seja \\(S_{i}\\) ou \\(S_{j}\\) é: \\(2/(j-i+1) = p_{ij}\\).

$$
E[T_{c}] = \sum_{i=1}^{n}\left ( \sum_{j>i}^{n}\left ( 2/(j-i+1) \right ) \right )
\\=\sum_{i=1}^{n}\left ( \sum_{k=1}^{n-i}\left ( 2/(k+1) \right ) \right )
\\=2 \cdot\sum_{i=1}^{n}\left ( \sum_{k=1}^{n-i}\left ( 1/(k+1) \right ) \right )
\\\leq2 \cdot\sum_{i=1}^{n}\left ( \sum_{k=1}^{n-i}\left ( 1/k \right ) \right )
\\\leq2 \cdot\sum_{i=1}^{n}\left ( \sum_{k=1}^{n}\left ( 1/k \right ) \right )
\\E[T_{c}] = 2 \cdot \sum_{i=1}^{n}\left ( H_{n} \right )
$$

>\\(H_{n}\\) é chamado de número harmônico, denotado por:

$$
H_{n} = \sum_{k=1}^{n}(1/k)
\\=1/1 + 1/2 + ... + 1/n
\\=O(lg n)
\\\therefore E[T_{c}] \leq 2n \cdot H_{n}
\\E[T_{c}] \leq 2c \cdot n \cdot H_{n}
\\E[T_{c}] = O(n lg n)
$$