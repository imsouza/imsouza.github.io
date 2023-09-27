---
layout: note
title: "Análise Heap Sort"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
mermaid: true
---

## Pseudocódigo

### Heap Sort
<pre class="responsive-latex">
1  |PROCEDIMENTO HeapSort(A[] : Inteiro):
2  |VAR
3  |  |i : Inteiro
4  |INICIO
5  |  |ConstruirHeapMax(A)
6  |  |PARA i <- A.tamanho..2, FAÇA:
7  |  |  |A[1] <-> A[i]
8  |  |  |A.tamanhoHeap <- A.tamanhoHeap - 1
9  |  |  |MaxHeapify(A, 1) 
10 |  |FIM-PARA
11 |FIM
</pre>

### ConstruirHeapMax
<pre class="responsive-latex">
1  |PROCEDIMENTO ConstruirHeapMax(A[] : Inteiro):
2  |VAR
3  |  |i : Inteiro
4  |INICIO
5  |  |A.tamanhoHeap <- A.tamanho
6  |  |PARA i <- floor(A.tamanho/2)..1, FAÇA:
7  |  |  |MaxHeapify(A, i) 
8  |  |FIM-PARA
9  |FIM
</pre>

### MaxHeapify
<pre class="responsive-latex">
1  |PROCEDIMENTO MaxHeapify(A[], i : Inteiro):
2  |VAR
3  |  |l, r, maior : Inteiro
4  |INICIO
5  |  |l <- Esquerdo(i)
6  |  |r <- Direito(i)
7  |  |SE l <= A.tamanhoHeap E A[l] > A[i], ENTÃO:
8  |  |  |maior <- l
9  |  |SENAO
10 |  |  |maior <- i
11 |  |FIM-SE
12 |  |SE r <= A.tamanhoHeap E A[r] > A[maior], ENTÃO:
13 |  |  |maior <- r
14 |  |FIM-SE
15 |  |SE maior != i, ENTÃO:
16 |  |  |A[i] <-> A[maior]
17 |  |  |MaxHeapify(A, maior)
18 |  |FIM-SE
19 |FIM
</pre>

### Funções auxiliares
<pre class="responsive-latex">
1  |PROCEDIMENTO Direito(i : Inteiro):
2  |INICIO
3  |  |Retorna 2*i+1
4  |FIM
</pre>

<pre class="responsive-latex">
1  |PROCEDIMENTO Esquerdo(i : Inteiro):
2  |INICIO
3  |  |Retorna 2*i
4  |FIM
</pre>

## Corretude ConstruirHeapMax

### Laço invariante
Laço para as linhas 6 a 8.

### Invariante
No começo de cada laço invariante, cada nó i+1, i+2, ..., n é a raiz de um heap máximo.

### Inicialização
Antes da primeira iteração, temos que i=$$\left \lfloor n/2 \right \rfloor$$ e cada nó $$\left \lfloor n/2 \right \rfloor$$ + 1, $$\left \lfloor n/2 \right \rfloor$$ + 2, ..., n é uma folha e, portanto, é a raiz de um heap máximo. 

### Manutenção
Os filhos do elemento A[i] estão em posições maiores que i e, pela propriedade invariante, são raizes de heaps máximos. Sabemos que esta é a condição exigida pelo procedimento MaxHeapify para que a chamada MaxHeapify(A, i) torne a posição i a raiz de um heap máximo. Logo, após a chamada MaxHeapify(A, i), temos que o nó i é a raiz de um heap máximo. Ao decrementar i, temos que a propriedade invariante é verdadeira para a próxima iteração do laço.

### Finalização
Quando i=0, pela invariante de laço, 1, 2, 3,..., n são raizes de um heap máximo. Particularmente, o nó 1 é raiz do heap contendo todos elementos de A.

## Corretude Heap Sort

### Laço invariante
Laço para as linhas 6 a 10.

### Invariante
No começo de cada iteração do laço invariante, o subvetor A[1..i] é um heap máximo contendo os i-menores elementos de A[1..n], e o subvetor A[i+1..n] contém os (n-i)-maiores elementos de A[1..n] ordenados. 

### Inicialização
Antes da i-ésima iteração do laço o subvetor A[i+1..n] é vazio, logo o invariante é trivialmente verdadeiro.

### Manutenção
Supondo que o invariante é verdadeiro antes da i-ésima iteração, temos que A[1] é o maior elemento do subvetor A[1..i] do qual é menor que os elementos em A[i+1..n]. Quando A[1] é adicionado na i-ésima posição, então A[i..n] contém os maiores elementos ordenados do subvetor. Ao decrementar o tamanho do heap chamando MaxHeapify transformamos A[1..i-1] em um heap máximo. Desta forma, a sequência resultante é composta pelos valores de A[i..n] ordenados onde, ao executar o laço invariante i-vezes, teremos que A[1..n] estará ordenado. 

### Finalização
Após a n-ésima iteração do laço inariante, temos que A[2..n] está ordenado e A[1] é o menor elemento do array, ou seja, o array estará ordenado.

## Complexidade de tempo
>O melhor caso do Heap Sort ocorre quando o vetor já está ordenado. Isso ocorre porque, quando o vetor já está ordenado, o Heap Sort não precisa fazer nenhuma troca de elementos, apenas construir o heap e retirar os elementos em ordem crescente.

>O pior caso do Heap Sort ocorre quando o vetor está ordenado de forma inversa, ou seja, em ordem decrescente. Isso ocorre porque, quando o vetor está ordenado de forma inversa, o Heap Sort precisa fazer muitas trocas de elementos para construir o heap e retirar os elementos em ordem crescente.

>No caso médio, a complexidade de tempo do Heap Sort é $$\Theta(n log n)$$. Isso ocorre porque, em média, o Heap Sort precisa fazer cerca de n/2 trocas de elementos para construir o heap e retirar os elementos em ordem crescente.

>Nº de nós com altura h=$$\left \lceil n/2^{h+1} \right \rceil$$

## Tempo total

### ConstruirHeapMax
> Para qualquer sub-árvore da árvore, temos 2n/3 nós sendo o número máximo de elementos.

<center>
<div class="mermaid">
  graph TD;
    A((&nbsp;))
    B((&nbsp;))
    C((&nbsp;))
    A --> B;
    A --> C;
</div>
</center>

$$
T(n) = T(2n/3) + O(1)
\\=O(logn) \therefore | h=logn
\\=O(h)
$$

$$
\sum_{h=0}^{logn}\left \lceil n/2^{h+1} \right \rceil O(h)
\\=\sum_{h=0}^{logn}\left \lceil n/2^{n}\cdot 2 \right \rceil O(ch)
\\=cn/2\sum_{h=0}^{logn}\left \lceil h/2^{h}\cdot 2 \right \rceil
\\=cn/2\cdot 2 = O(n)
$$

### Heap Sort

T(n) = (Complexidade de tempo do ConstruirHeapMax) + (Complexidade de tempo do MaxHeapify)
$$	   
\\=O(n) + (n-1) + \left [ O(logn) \right ] = O(nlogn)
$$
