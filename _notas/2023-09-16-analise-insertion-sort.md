---
layout: note
title: "Análise Insertion Sort"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
mermaid: true
---

## Pseudocódigo

<pre class="responsive-latex">
1  |PROCEDIMENTO InsertionSort(A[] : Inteiro):
2  |VAR
3  |  | i, j : Inteiro
4  |INICIO
5  |  |PARA j <- 2 ATÉ Comprimento(A), FAÇA:
6  |  |  |chave <- A[j] // Insere A[j] na parte ordenada A[1..j-1]
7  |  |  |i <- j - 1
8  |  |  |ENQUANTO i > 0 e A[i] > chave, FAÇA:
9  |  |  |  |A[i+1] <- A[i]
10 |  |  |  |i <- i - 1
11 |  |  |FIM-ENQUANTO
12 |  |  |A[i+1] <- chave
13 |  |FIM-PARA
14 |FIM
</pre>

## Corretude

### Laço invariante
Laço para as linhas 5 a 13.

### Invariante
Para j=k, A[1..K-1] está ordenado.

### Inicialização
Para K=2, temos que A[1..K-1]=A[1..1], ou seja, uma sequência de um único elemento do qual está trivialmente ordenado.

### Manutenção
Supondo que o invariante é verdadeiro antes da k-ésima iteração, copiamos o elemento da posição j para a variável chave (linha 6). Nas linhas (7 a 11) deslocamos os elementos maiores que a chave em A[1..k-1] uma posição para a direita. Na linha 12, a chave é inserida na posição anterior ao último elemento deslocado (i+1). Desta forma, a sequência resultante é composta por A[1..i] ordenada, com elementos menores ou iguais a chave, a chave na posição A[i+1] e a sequência A[i+z..k] ordenada com elementos maiores do que a chave. Assim, antes da (k+1)-ésima iteração, temos que A[1..k] está ordenado. 

### Finalização
Após a n-ésima iteração do laço invariante, temos que n=k e, como foi mostrado na manutenção, A[1..n] está ordenado.

## Complexidade de tempo
>O melhor caso para o insertion sort ocorre quando o vetor está ordenado, assim, o laço while não será executado. 

>O pior caso ocorre quando o vetor está ordenado de forma inversa, assim, o laço while interno terá que realizar todas comparações.

>O caso médio também é O(n^2), pois, o algoritmo percorre o vetor diversas vezes realizando trocas, independentemente da ordem dos elementos.

>$$1+2+3+...+n-3+n-2+n-1+n 
>\\= \sum_{i=1}^{n}i \\= n(n+1)/2$$

### Melhor caso

#### Comparações

$$\sum_{i=2}^{n}1 = (n-2)+1 = n-1 = \Omega(n)$$

#### Movimentações

$$
1+\sum_{i=2}^{n}2
\\
=1+2((n-2)+1)
\\
=1+2(n-1) = 1+(2n+2)
\\
=2n-1
$$

### Pior caso

#### Comparações

$$
\sum_{i=2}^{n}\sum_{j=1}^{i}1
\\
=\sum_{i=2}^{i}(i-1)+1
\\
=\sum_{i=2}^{i}i 
\\= 2+3+4+...+(n-2)+(n-1)+n
\\=n(n+1)/2 = O(n^{2})
$$

#### Movimentações

$$
1+\sum_{i=2}^{n}2 + \sum_{i=2}^{n}\sum_{j=1}^{i-1}1
\\
=(n^{2}+3n-2)/2
$$

### Caso médio
>Para cada valor de j, a linha 8 é executada de 1 a j vezes.

>Qual a probabilidade dela ser executada t vezes? R: 1/j

>$$E\left [ x \right ] = t(1/j)$$

#### Número esperado de execuções (linha 8)

$$
\sum_{i=1}^{n}\sum_{j=2}^{i}E\left [ x \right ]
\\
=\sum_{i=1}^{n}\sum_{j=2}^{i}1/2
\\
=1/2\sum_{i=1}^{n}\sum_{j=2}^{i}1
\\
=1/2(n(n-1)/2)
\\
=n(n-1)/4 = \Theta(n^{2})
$$

#### Número esperado de execuções no total (linha 8)

$$
\sum_{j=2}^{j}(j+1)/2
\\=(1/2)\sum_{j=2}^{n}(j+1)
\\=((n+4)(n-1))/4
\\=\Theta(n^{2})
$$