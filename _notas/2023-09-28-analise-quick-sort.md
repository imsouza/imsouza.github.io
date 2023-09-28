---
layout: note
title: "Análise Quick Sort"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
---

## Pseudocódigo

### Quick Sort

<pre class="responsive-latex">
1  |PROCEDIMENTO QuickSort(A[], p, r : Inteiro):
2  |VAR
3  |  |q : Inteiro
4  |INICIO
5  |  |SE p < r, ENTÃO:
6  |  |  |q <- Particiona(A, p, r)
7  |  |  |QuickSort(A, p, q-1)
8  |  |  |QuickSort(A, q+1, r):
9  |  |FIM-SE
10 |FIM
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

## Corretude

### Laço invariante
Laço para as linhas 7 até 12.

### Invariante
No início de cada iteração do laço invariante, para qualquer índice k do array, temos: 
- Se p <= k <= i, então A[k] <= pivo;
- Se i+1 <= k <= j-1, então A[k] >= pivo;
- Se k = r, então A[k] = pivo.

### Inicialização
Antes da primeira iteração, temos que i = p - 1 e j = p. Como não há valores entre p e i e nenhum valor está entre i + 1 e j - 1, as duas primeiras condições da invariante de loop são trivialmente satisfeitas. A atribuição na linha 5 satisfaz a terceira condição.

### Manutenção
Supondo que o invariante é verdadeiro antes da i-ésima iteração do laço invariante, vamos considerar dois casos dependendo do resultado do teste na linha 8.

![https://imgur.com/TXTG3RJ.png](https://imgur.com/TXTG3RJ.png)

- A figura (a) mostra o que acontece quando A[j] > x; a única ação no loop é incrementar j. Depois que j é incrementado, a condição 2 é mantida por A[j-1] e todas as outras entradas permanecem inalteradas.

- A figura (b) mostra o que acontece quando A[j] <= x; o loop incrementa i, troca A[i] e A[j] e, em seguida, incrementa j. Por causa da troca, agora temos que A[i] <= x, e a condição 1 é satisfeita. Da mesma forma, também temos A[j-1] > x, já que o item que foi trocado em A[j-1] é, pelo laço invariante, maior que x.

### Finalização
No término, j = r. Portanto, todas as entradas no vetor estão em um dos três conjuntos descritos pelo invariante. Os valores no array foram particionados em três conjuntos: aqueles menores ou iguais a x, aqueles maiores do que x e um conjunto unitário contendo x.

>As duas linhas finais do algoritmo Particiona terminam por meio da troca do elemento pivô com o elemento mais à esquerda maior que x, movendo, assim, o pivô para o local correto no vetor particionado e retornando o novo índice do pivô.

## Complexidade de tempo
>O tempo de execução do QuickSort depende de o particionamento ser balanceado ou desequilibrado, o que, por sua vez, depende de quais elementos são usados para o particionamento. 

>Se o particionamento for balanceado, o algoritmo é executado assintoticamente tão rápido quanto o mergesort. 

>Se o particionamento estiver desequilibrado, no entanto, ele pode ser executado assintoticamente tão lentamente quanto a classificação por inserção.

>O melhor caso do algoritmo QuickSort ocorre quando o particionamento produz duas listas de tamanho não maior que n/2, o que resulta em uma complexidade de tempo O(n lg n). Nesse caso, as partições estão muito bem balanceadas, com tamanhos iguais ou até 1 de diferença

>O pior comportamento do QuickSort ocorre quando a rotina de particionamento produz um subproblema com elementos n − 1 e um com 0 elementos.

>No caso médio do algoritmo Quicksort, a complexidade de tempo é O(n lg n). Isso significa que, em média, o algoritmo leva um tempo proporcional a n vezes o logaritmo de n para ordenar uma lista de n elementos. O caso médio é uma medida estatística que assume que as entradas são distribuídas aleatoriamente e que o particionamento produz duas listas de tamanho não maior que n/2.

### Melhor caso
Na divisão mais uniforme possível, o algoritmo Particiona produz dois subproblemas, cada um com tamanho não maior que n/2, já que um é de tamanho \\(\left \lfloor n/2 \right \rfloor\\) e um de tamanho \\(\left \lceil n/2 \right \rceil - 1\\).

$$
T(n) = T(\left \lceil 1/2(n-1) \right \rceil) 
\\+ T(\left \lfloor 1/2(n-1) \right \rfloor) + n-1
$$

>n-1 é o número de comparações que Particiona faz.

$$
S(n) = 2S(n/2) + n
\\=2(2S(n/2/2) + n/2) + n
\\=4S(n/4) + n + n
\\=4(2S(n/8) + n/4) + n + n
\\=8S(n/8) n + n + n
\\=2^{k}S(n/2^{k}) nk
$$

Quando k atinge lgn, temos S(n) = nS(1) + nlgn. Supondo que S(1) = 1, teremos:

$$
S(n) = n + nlgn
\\\therefore nlgn \leq  S(n) \leq  2nlgn 
\\\therefore S(n) = \Omega{(n lg n)}
$$

### Pior caso
>Considerando que uma chamada recursiva em um vetor de tamanho 0 apenas retora \\(T(0) = \Theta{(1)}\\).

>O particionamento custa \\(\Theta{(n)}\\).

$$
T(n) = T(n-1) + T(0) + \Theta{(n)}
\\=T(n-1)+n-1
\\=T(n-1)+(n-2)+(n-1)
\\=T(n-1)+(n-3)+(n-2)+(n-1)
\\\vdots
\\=T(0)+0+1+2+...+(n-2)+(n-1)
\\=n(n-1)/2 = O(n^{2})
$$

### Caso médio
Suponha, por exemplo, que o algoritmo de particionamento sempre produza uma divisão proporcional de 9 para 1, o que, à primeira vista, parece bastante desequilibrado. Então, obtemos a recorrência: \\(T(n) = T(9n/10) + T(n/10) + cn\\).

![https://imgur.com/U22GGC2.png](https://imgur.com/U22GGC2.png)

Observe que cada nível da árvore custa cn, até que a recursão atinja uma condição limite na profundidade \\(\log_{10} n = \Theta{(lg n)} \therefore\\) os níveis custam no máximo cn. Portanto o custo total do Quicksort é O(n lg n).