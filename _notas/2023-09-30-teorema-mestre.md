---
layout: note
title: "Teorema Mestre"
author: "Mateus Almeida"
categories: [notas]
tags: [Projeto e Análise de Algoritmos]
---

## 1º Caso
Se \\(f(n) = O(n^{log_ba-\varepsilon}) | \varepsilon > 0 \therefore T(n) = \Theta(n^{log_ba})\\)

>a: número de chamadas recursivas

>b: número de partes em que está sendo dividida a entrada

>c: constante

$$
T(n) = 9T(n/3)+n
\\
a = 9;b = 3;f(n) = n
\\
f(n) = O(n^{lg_39-\varepsilon})
\\=O(n^{2-1}) = O(n) | \varepsilon = 1 
\\=\therefore T(n)=\Theta{(n^{log_ba})} = \Theta({n^{2}})
$$

## 2º Caso
Se \\(f(n) = \Theta(n^{log_ba}) \therefore T(n) = \Theta(n^{log_ba} \cdot log_n)\\)

$$
T(n) = T(2n/3)+1
\\
a = 1;b = 3/2;f(n) = 1
\\
f(n) = O(n^{lg_\frac{3}{2}1})
\\=\Theta(n^{0}) = \Theta(1)
\\=\therefore T(n)=\Theta(n^{lg_\frac{3}{2}1} \cdot log_2n)
$$

## 3º Caso
Se \\(f(n) = \Omega(n^{log_ba+\varepsilon}) | \varepsilon > 0\\) e se \\(a \cdot f(n/b) \leq c \cdot f(n)\\) para alguma constante c < 1 e para um n suficientemente grande \\(\therefore T(n) = \Theta(f(n)\\))

$$
T(n) = 3T(n/4)+n lg n
\\
a = 3;b = 4;f(n) = n lg n
\\
f(n) = \Omega(n^{lg_4 3 + \varepsilon})
\\=\Omega(n^{0.8...+0.2}) = \Omega(n^{1}) | \varepsilon = 0.2

\\f(n) = \Omega(n)?
\\\Rightarrow a \cdot f(n/b) \leq c \cdot f(n)
\\\Rightarrow 3\left ( (n lg n)/b \right ) \leq c \cdot f(n)
\\\Rightarrow 3n/4 \cdot log_2(n/4) \leq c \cdot f(n)
\\\Rightarrow 3n/4 \cdot log_2(n/4) \leq 3/4 \cdot n lg n | c = 3/4
\\\therefore T(n) = \Theta(n lg n)
$$