---
layout: note
title: "Análise Bubble Sort"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
---

## Pseudocódigo

<pre class="responsive-latex">
1  |PROCEDIMENTO BubbleSort(A[] : Inteiro):
2  |VAR
3  |  |i, j, t : Inteiro
4  |INICIO
5  |  |PARA i <- Comprimento(A) ATÉ 1, FAÇA:
6  |  |  |PARA j <- 2, ATÉ i, FAÇA:
7  |  |  |  |SE A[j - 1] > A[j], ENTÃO:
8  |  |  |  |  |t <- A[j - 1]
9  |  |  |  |  |A[j - 1] <- A[j]
10 |  |  |  |  |A[j] <- t
11 |  |  |  |FIM-SE
12 |  |  |FIM-PARA
13 |  |FIM-PARA
14 |FIM
</pre>

## Corretude

### Laço invariante
Laço para as linhas 5 a 13.

### Invariante
Na i-ésima iteração, temos que A[i+1..N] contém os N-i maiores elementos ordenados.

### Inicialização
Antes da primeira iteração, temos que i=N, logo A[i+1..N] é vazio. Portanto, o invariante é trivialmente verdadeiro.

### Manutenção
Supondo que o invariante é verdadeiro antes da i-ésima iteração, temos que os elementos A[1..i] são menores ou iguais a A[i+1]. Na i-ésima iteração, o laço PARA (linhas 6 a 12) faz a variável j assumir os valores de 2 até i e, para cada valor de j, as linhas de 7 a 11 realizam a troca entre os valores de A[j-1] e A[j], caso A[j-1] > A[j]. Assim, o maior elementro entre A[j-1] e A[j] sempre ficará na posição j. Como j varia de 2 até i, ao final do laço teremos o maior elemento de A[1..i] guardado na posição i. Desta forma, os elementos em A[1..i-1] serão menores ou iguais a A[i]. Pela propriedade invariante, os elementos em A[i+1..N] estão ordenados e são maiores que A[i]. Logo, temos que A[i..N] contém N-1+1 maiores elementos de A ordenados.

### Finalização
Após a i-ésima iteração do laço invariante, temos i=0 e, pela propriedade invariante, A[1..N] contém os N elementos de A ordenados.

## Complexidade de tempo
>O melhor caso para o bubble sort ocorre quando o vetor está ordenado, assim, o laço será executado apenas uma vez e não será feita trocas. 

>O pior caso ocorre quando o vetor está ordenado de forma inversa, assim, o laço interno terá que percorrer todo o vetor em cada iteração, resultando em uma complexidade O(n^2) devido a quantidade de trocas que sempre irá ocorrer.

>O caso médio também é O(n^2), pois, o algoritmo percorre o vetor diversas vezes realizando trocas, independentemente da ordem dos elementos.

>$$1+2+3+...+n-3+n-2+n-1+n 
>\\= \sum_{i=1}^{n}i \\= n(n+1)/2$$

### Melhor caso

$$
\sum_{i=1}^{n}\sum_{j=2}^{i}1
\\
=\sum_{i=1}^{n}(i-1)-(1)+1
\\
=\sum_{i=1}^{n}i-1
\\
=1\sum_{i=1}^{n}i = \Omega(n)
$$

### Pior caso

$$
\sum_{i=1}^{n}\sum_{j=2}^{i}1
\\
=\sum_{i=1}^{n}(i-1)-(1)+1
\\
=\sum_{i=1}^{n}i-1
\\
=(n-1)((n-1)+1)/2
\\
=n(n-1)/2
\\
=(n^{2}-n)/2 = O(n^{2})
$$

### Caso médio
>$$E\left [ x \right ] = (0 + 1)1/2 = 1/2$$

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