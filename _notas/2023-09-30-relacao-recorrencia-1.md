---
layout: note
title: "Relação de Recorrência (T(n)=T(n-1)+1)"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
mermaid: true
---

## Pseudocódigo

<pre class="responsive-latex">
1  |PROCEDIMENTO F(n : Inteiro):-----------T(n)
2  |INICIO
3  |  |SE n > 0, ENTÃO:
4  |  |  |Imprime(n)-----------------------1
5  |  |  |F(n-1) // Decrementar n----------T(n-1)
6  |  |FIM-SE
7  |FIM
</pre>

## Árvore
<center>
<div class="mermaid">
  graph TD;
    A((F=3))
    B((3))
    C((F=2))
    D((2))
    E((F=1))
    F((1))
    G((F=0))
    H((X))
    A --- B;
    A --- C;
    C --- D;
    C --- E;
    E --- G;
    E --- F;
    G --- H;
</div>
</center>

$$
f(n) = n + 1 \Rightarrow O(n)
$$

## Substituição

$$
\left\{\begin{matrix}
1 & n = 0\\ 
T(n-1)+1 & n>0
\end{matrix}\right.
$$

$$
T(n) = T(n-1)+1
\\T(n-1) = T((n-1)-1) + 1 
\\= T(n-2) + 1
\\T(n) = \left [ T(n-2) + 1 \right ] + 1 
\\T(n) = \left [ T(n-2) + 2 \right ]
\\T(n-2) = T((n-2)-1) + 1 
\\= T(n-3) + 1
\\T(n) = \left [ T(n-3) + 1 \right ] + 2
\\T(n) = \left [ T(n-3) + 3 \right ]
\\\vdots
\\T(n) = T(n-k) + k
\\ \text{Dado que } (n-k) = 0 \therefore n = k
\\\Rightarrow T(n) = T(n-n) + n
\\T(n) = T(0) + n
\\T(n) = 1 + n = O(n)
$$