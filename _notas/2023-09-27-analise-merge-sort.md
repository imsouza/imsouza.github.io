---
layout: note
title: "Análise Merge Sort"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
---

## Pseudocódigo

<pre class="responsive-latex">
1  |PROCEDIMENTO MergeSort(A[], l, r : Inteiro):
2  |VAR
3  |  |m : Inteiro
4  |INICIO
5  |  |SE r > l, ENTÃO:
6  |  |  |m <- floor((r+l)/2)
7  |  |  |MergeSort(A, l, m)
8  |  |  |MergeSort(A, m+1, r)
9  |  |  |Merge(A, l, m, r)
10 |  |FIM-SE
11 |FIM
</pre>

<pre class="responsive-latex">
1  |PROCEDIMENTO Merge(A[], l, m, r : Inteiro):
2  |VAR
3  |  |i, j, k : Inteiro
4  |  |B1[], B2[] : Inteiro
5  |INICIO
7  |  |ALOCAR B1 COM (m - l + 1) posições
8  |  |ALOCAR B2 COM (r - m) posições
9  |  |B1 <- A[l..m]
10 |  |B2 <- A[m+1..r]
11 |  |i <- 1; j <- 1
12 |  |PARA k <- l..r, FAÇA:
13 |  |  |SE i <= m - l + 1 E j <= r - m, ENTÃO:
14 |  |  |  |SE B1[i] <= B2[j], ENTÃO:
15 |  |  |  |  |A[k] <- B[i]; i <- i + 1
16 |  |  |  |SENÃO:
17 |  |  |  |  |A[k] <- B2[j]; j <- j + 1
18 |  |  |  |FIM-SE
19 |  |  |SENÃO:
20 |  |  |  |SE i <= m - l + 1, ENTÃO:
21 |  |  |  |  |A[k] <- B1[i]; i <- i + 1
22 |  |  |  |SENÃO:
23 |  |  |  |  |A[k] <- B2[j]; j <- j + 1
24 |  |  |  |FIM-SE
25 |  |  |FIM-SE
26 |  |FIM-PARA
27 |FIM
</pre>

## Corretude

### Laço invariante
Laço para as linhas 12 até 26.

### Invariante
Os elementos de A[1..k-1], B1[1..i-1] e B2[1..j-1] estão ordenados. Além disso, B1[1..i-1] <= B2[j..nB1] e B2[1..j-1] <= B1[1..nB2]. Logo, as propriedades valém no início da k-ésima iteração.

### Inicialização
Antes da primeira iteração, temos que i=j=1, A[1..n-1] será preenchido, B1 e B2 estarão ordenados. Portanto, A[1..k-1] = B1[1..i-1] = B2[1..j-1] = 0. Logo, o invariante é trivialmente verdadeiro.

### Manutenção
Supondo que o invariante é verdadeiro antes da i-ésima iteração do laço invariante, temos que na k-ésima iteração o menor elemento (x) entre B1[i] e B2[j] é colocado em A[k]. Em seguida, os índices i ou j serão incrementados. Como B1 e B2 estão ordenados, temos que B1[i] <= A[i..nl], sendo nl o tamanho do vetor B1. De forma similar temos: B2[j] <= A[j..nr], sendo nr o tamanho do vetor B2. Como (x) é o menor elemento entre B1[i] e B2[j], ele é o menor dos não copiados e, pela propriedade invariante, sabemos que todos os copiados A[1..k-1] são menores que os não copiados. Logo, (x) é maior ou igual aos copiados.

### Finalização
Com base na manutenção, é possível afirmar que (x) está sendo copiado corretamente para A[k] e, quando i ou j são incrementados, as propriedades são reestabelecidas. Desta forma, A[1..k-1] estará ordenado.

## Complexidade de tempo
>O melhor caso do Merge Sort é quando o vetor já está ordenado. Isso ocorre porque o algoritmo divide o vetor em subvetores menores e, em seguida, os mescla em ordem crescente. Quando o vetor já está ordenado, o algoritmo não precisa fazer a mesclagem, pois cada subvetor já está ordenado, resultando em uma complexidade de tempo de O(n lg n) para o melhor, pior e caso médio.

#### Tempo total
Dado um vetor de tamanho n, o vetor será dividido em n/2 recursivamente até sobrar vetores de tamanho 1. Assim, \\(n/2^{x} = 2^{x} \therefore  x=lgn\\) dado que x é o número de divisões recursivas.

Para cada etapa em que será executado o merge teremos no máximo n comparações. A quantidade de etapas, por nível, será lgn, porém, em cada nível teremos n comparações, logo o resultado é O(nlgn) para todos os casos.