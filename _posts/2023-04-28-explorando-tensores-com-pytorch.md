---
layout: post
title: "Explorando Tensores com PyTorch"
description: "ÉPyTorch é uma biblioteca de aprendizado de máquina de código aberto baseada em Torch, que é uma biblioteca de aprendizado de máquina e visão computacional..."
author: "Mateus Almeida"
image: /assets/thumbnails/img27.jpg
tags: [Machine Learning]
---

![Birds](/assets/thumbnails/img27.jpg)

PyTorch é uma biblioteca de aprendizado de máquina de código aberto baseada em Torch, que é uma biblioteca de aprendizado de máquina e visão computacional. PyTorch é amplamente utilizado para desenvolver modelos de aprendizado profundo e é conhecido por sua facilidade de uso e flexibilidade. Uma das principais estruturas de dados em PyTorch são os tensores, que são matrizes multidimensionais que podem ser indexadas em mais de duas dimensões. Este artigo tem como foco introduzir os tensores e suas principais operações, além disso, será necessário abordar as demais representações e estruturas existentes como escalares, vetores e matrizes. 

![https://imgur.com/JqTTXrk.png](https://imgur.com/JqTTXrk.png)

<br>

## Escalar

Um escalar é um valor único que pode ser armazenado em uma variável, como um número. Os escalares são frequentemente usados em cálculos matemáticos simples, como adição, subtração, multiplicação e divisão. Em programação, os escalares são usados para representar valores simples, como contadores, índices e constantes.

<br>

## Vetores

Os vetores são usados na computação para representar quantidades que têm direção e magnitude, como a velocidade de um objeto em movimento. Os vetores podem ser representados como uma lista de números, onde cada número representa a magnitude do vetor em uma dimensão específica. Os vetores são frequentemente usados em cálculos matemáticos que envolvem direção e magnitude, como física, geometria e análise de dados. Em programação, os vetores são usados para representar listas de valores, como coordenadas de pontos em um gráfico.

![https://imgur.com/3ZfLHMU.png](https://imgur.com/3ZfLHMU.png)

<br>

## Matrizes

As matrizes são usadas na computação para representar dados tabulares, como tabelas de preços ou dados de vendas. As matrizes também são usadas em cálculos matemáticos que envolvem sistemas de equações lineares, transformações lineares e decomposições de valores singulares. As matrizes são uma estrutura matemática fundamental em álgebra linear e são amplamente utilizadas em ciência da computação, engenharia e física. Em programação, as matrizes são usadas para representar dados tabulares e para realizar cálculos matemáticos complexos.

![https://imgur.com/Oi5cc4k.png](https://imgur.com/Oi5cc4k.png)

<br>

## Tensores

Os tensores em PyTorch são semelhantes aos arrays NumPy, mas com a vantagem de que podem ser usados tanto em CPUs quanto em GPUs, o que acelera os processos computacionais. Os tensores podem ser criados de várias maneiras, como a partir de listas, arrays NumPy ou diretamente usando funções como ```torch.zeros()``` e ```torch.ones()```. 

![https://imgur.com/z44iTy3.png](https://imgur.com/z44iTy3.png)

> Todas funções estão presentes na documentação do PyTorch.

### Criação de um tensor

Aqui está um exemplo de como criar um tensor simples usando a função ```torch.ones()```:

<script src="https://gist.github.com/imsouza/291f88a549806a3a1e72d8298375c958.js"></script>

### Operações básicas

Os tensores em PyTorch suportam várias operações matemáticas, como adição, subtração, multiplicação, divisão, etc. Além disso, PyTorch também oferece suporte a operações de álgebra linear, como multiplicação de matrizes e decomposição de valores singulares. Abaixo está um exemplo de como realizar uma multiplicação de matrizes usando tensores em PyTorch:

<script src="https://gist.github.com/imsouza/59457f778283a2f505ad91da65b96148.js"></script>

Outro tipo de operação são as de redução, das quais são usadas para reduzir a dimensão de um tensor, o que pode ser útil em muitos cálculos matemáticos e de aprendizado profundo. Algumas das operações de redução mais comuns em PyTorch são a soma, a média e o máximo. A operação de soma é usada para calcular a soma de todos os elementos em um tensor, enquanto a operação de média é usada para calcular a média de todos os elementos em um tensor. A operação de máximo é usada para encontrar o valor máximo em um tensor. 

Por exemplo, suponha que temos um tensor de dimensão (3, 4) e queremos calcular a soma de todos os elementos no tensor. Podemos fazer isso usando a operação de redução ```torch.sum()``` da seguinte maneira:

<script src="https://gist.github.com/imsouza/7d0b7f739807d564441645f2ff04a76f.js"></script>

Da mesma forma, podemos calcular a média de todos os elementos no tensor usando a operação de redução ```torch.mean()```:

<script src="https://gist.github.com/imsouza/434e516f5fd82eb2ad7dbeba2a4daa21.js"></script>

Por fim, podemos encontrar o valor máximo em um tensor usando a operação de redução ```torch.max()```:

<script src="https://gist.github.com/imsouza/d3847e1f5bebb94b74cbb7cef3672e9c.js"></script>

<br>

## Conclusão

Em resumo, os tensores são uma estrutura de dados fundamental em PyTorch e são usados para representar dados em matrizes multidimensionais. Os tensores em PyTorch são semelhantes aos arrays NumPy, mas com a vantagem de que podem ser usados tanto em CPUs quanto em GPUs. PyTorch oferece suporte a várias operações matemáticas e de álgebra linear em tensores, o que os torna uma ferramenta poderosa para desenvolver modelos de aprendizado profundo.

<br>

## Referências

[PyTorch DOC](https://pytorch.org/docs/stable/tensors.html){:target="_blank"}

[What is PyTorch](https://developer.oracle.com/pt-BR/learn/technical-articles/what-is-pytorch){:target="_blank"}

[Machine Learning Basics](https://www.linkedin.com/pulse/machine-learning-basics-scalars-vectors-matrices-tensors-prasad/){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>