---
layout: note
title: "Análise Selection Sort"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
---

## Pseudocódigo

<pre class="responsive-latex">
1  |PROCEDIMENTO SelectionSort(A[] : Inteiro):
2  |VAR
3  |  |i, j, min, t : Inteiro
4  |INICIO
5  |  |PARA i <- 1 ATÉ Comprimento(A) - 1, FAÇA:
6  |  |  |// Encontrar o menor elemento
7  |  |  |min <- i
8  |  |  |PARA j <- i+1 ATÉ Comprimento(A), FAÇA:
9  |  |  |  |SE A[j] < A[min], ENTÃO:
10 |  |  |  |  |min <- j
11 |  |  |  |FIM-SE
12 |  |  |FIM-PARA
13 |  |  |// Trocar o menor elemento com aquele da posição i
14 |  |  |t <- A[min]
15 |  |  |A[min] <- A[i]
16 |  |  |A[i] <- t
17 |  |FIM-PARA
18 |FIM
</pre>

## Corretude

### Laço invariante
Laço para as linhas 5 até 17.

### Invariante
Na k-ésima iteração A[k-i-1] contém os (i-1)-menores elementos ordenados.

### Inicialização
Antes da primeira iteração, temos que A[j..i-1] está vazio. Logo, o invariante é trivialmente verdadeiro.

### Manutenção
Supondo que o invariante é verdadeiro antes da i-ésima iteração do laço invariante, temos que A[1..i-1] está ordenado com os (i-1)-menores elementos do vetor. Na i-ésima iteração, a posição do menor elemento em A[i..n] é guardada na variável min (linhas 7 até 12), em seguida, é realizada a troca entre os elementos das posições i e min (linhas 14 a 16).

### Finalização
Desta forma, A[i+1..n] contém elementos maiores ou iguis a A[i] e temos que os elementos de A[j-i-1] são menores ou iguais a A[i] e estão ordenados. Então, antes da (i+1)-ésima iteração, temos que A[1..i] contém os i-menores elementos de A ordenados.

## Complexidade de tempo
>O melhor caso para o algoritmo Selection Sort ocorre quando o arranjo de elementos já está ordenado.

>O pior caso para o algoritmo Selection Sort ocorre quando o arranjo de elementos está ordenado em ordem inversa, ou seja, em ordem decrescente, pois, precisará percorrer o vetor várias vezes para encontrar o menor elemento e colocá-lo na posição correta.

>Para o caso médio, o algoritmo precisará fazer um número de comparações e trocas proporcional ao quadrado do tamanho da lista a ser ordenada.

### Tempo total

>Nº de Iterações: 1,2,3,...,n

>Comparações: (n-1), (n-2), (n-3),...,1

$$
(n-1)+(n-2)+(n-3)+...+1 
\\= n(n-1)/ 2
\\=O(n^{2})
$$

