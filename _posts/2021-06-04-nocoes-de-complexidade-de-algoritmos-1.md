---
layout: post
title: "Noções de Complexidade de Algoritmos #1"
description: "Um algoritmo é um conjunto de instruções que realizam uma determinada tarefa, mas como saber o algoritmo ideal para solucionar tal problema em meio a tantas possíveis soluções?..."
author: "Mateus Almeida"
image: /assets/thumbnails/img9.jpeg
tags: [Algoritmos]
---

![Book](/assets/thumbnails/img9.jpeg)

<br>

Um algoritmo é um conjunto de instruções que realizam uma determinada tarefa, mas como saber o algoritmo ideal para solucionar tal problema em meio a tantas possíveis soluções? 

O algoritmo ideal está intrinsecamente relacionado à estrutura de dados usada para armazenar os dados do problema, sendo assim, um algoritmo pode ser mais ou menos eficiente dependendo de como os dados são acessados pelo computador.

Quando criamos um algoritmo, o passo mais importante a se seguir é determinar o seu desempenho, em outras palavras, o quanto de recursos computacionais (como tempo gasto e uso de memória) ele utiliza em sua execução. Um código que demora meses para executar uma tarefa não é nada eficaz comparado a um código que demora segundos para executar a mesma tarefa, concorda? Então a pergunta que não quer calar é: como determinar se um algoritmo é o mais eficiente? 

<br>

## Análise de eficiência

Para calcularmos o quão eficiente é um algoritmo existem duas abordagens: a **análise empírica** e a **análise matemática**.

#### Análise empírica

A análise empírica realiza a comparação entre programas, ou seja, esse tipo de análise avalia o custo (ou a complexidade) de um algoritmo a partir da avaliação de sua execução assim que implementado.

Essa abordagem possui algumas vantagens, como: comparação de linguagens de programação e computadores e avaliação de desempenho em determinada configuração da linguagem de programação ou máquina.

Assim como tem vantagens, também há desvantagens e a principal é a necessidade de implementação do algoritmo para a análise.


#### Análise matemática

Por outro lado, a análise matemática estuda as propriedades do algoritmo, ou seja, é avaliada a ideia por trás do algoritmo de maneira independente do hardware ou da linguagem de programação usada na sua implementação. 

Esse tipo de análise permite entender a relação entre o crescimento do conjunto de dados de entrada com a quantidade de tempo necessária para processar esses dados.

<br>

## Medindo o tempo de execução

Geralmente há várias formas de resolver um determinado problema. Essas várias formas dão origem a diferentes soluções que diferem entre si no tempo de execução computacional. A função de complexidade *f(n)* é uma das maneiras de medir o número de vezes que uma certa operação é executada para uma entrada de tamanho *n*. Vale ressaltar que *f(n)* não significa o tempo de execução diretamente, mas sim o número de vezes que certa operação foi executada.

Utilizarei dois exemplos de código na linguagem C para entendermos melhor como calcular o tempo de execução de um algoritmo com esse método.

#### Exemplo 1

<script src="https://gist.github.com/imsouza/40799279ae270e399536c0da23f73f8b.js"></script>

O código acima realiza a busca pelo maior valor dentro do array```A``` contendo```n``` elementos e o armazena na variável ```T```.

Na linha 1, o valor da posição do array ```A``` é copiado para a variável ```T```, em outras palavras, o valor de ```A[0]``` foi atribuído para a variável ```T```, sendo assim, o custo da linha 1 é de apenas uma instrução.

Na linha 3, o array ```A``` é percorrido com o comando de laço ```for```, porém, antes de percorrer o array, ele precisa ser inicializado ao custo de uma instrução ```int i = 0```. Por mais que ```A``` tenha zero elementos, será executada pelo menos uma comparação no ```for```, sendo ela ```i < n```, ou seja, **mais uma** operação. 

Com isso, o custo para executar a linha 3 é de *2n* instruções. Note que as instruções serão executadas antes mesmo da primeira iteração do laço ```for```, vale ressaltar também que ao final de cada iteração é preciso executar mais duas instruções: uma de incremento ```i++``` e uma de comparação ```i < n```. 

Se tratarmos apenas o laço ```for``` sem o seu corpo, teremos que o algoritmo precisa executar *3 + 2n* instruções, sendo elas: 3 instruções antes de iniciar o laço e 2 instruções ao final de cada looping que é executado *n* vezes. 

Logo, podemos definir uma função matemática que relaciona o custo do algoritmo com o  tamanho do array, em outras palavras: *f(n) = 2n + 3*.

#### Exemplo 2

<script src="https://gist.github.com/imsouza/edfa42857e4130ec16f7d6ed63317b3a.js"></script>

O código acima realiza a busca de um valor ```x``` no array ```A``` de tamanho ```n``` e retorna ```true``` caso encontre e ```false``` caso contrário.

Seja *f(n)* o número de operações feitas para um array de tamanho *n* o valor de *f(n)* irá depender se o elemento procurado existe ou não e, caso exista, irá depender de sua posição. O objetivo é encontrar *f(n)* para o melhor caso, pior caso e caso médio, ou seja, no **melhor caso** o valor mínimo de *f(n)* estaria dentre todas entradas possíveis, no **pior caso** o valor máximo de *f(n)* estaria dentre todas entradas possíveis e a complexidade do **caso médio** é a média de *f(n)* considerando todos os casos possíveis de entrada.

No problema da **busca sequencial** (muitas vezes chamada de "busca burra") de um array, a função de complexidade de tempo é calculada em função do número de elementos consultados no array. Ou seja, o melhor caso dessa busca seria quando o elemento que desejamos procurar está logo no começo do array. Já o pior caso acontece quando o elemento que desejamos procurar é o último do array, ou seja, seria preciso passar por todos até chegar nele ou quando o elemento sequer existe.

E agora? sabemos o melhor caso e o pior, mas como fazer para calcular o caso médio? Bem, para isso iremos considerar <img src="https://latex.codecogs.com/gif.latex?%5Cinline%20P_%7Bi%7D" alt="Pi"> como a probabilidade de procura do i-ésimo elemento. Para encontrar o i-ésimo elemento são necessárias i-comparações, temos então que: 
<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?f(n)&space;=&space;1&space;\cdot&space;P_{1}&space;&plus;&space;2&space;\cdot&space;P_{2}&space;&plus;&space;...&space;&plus;&space;n&space;\cdot&space;P_{n}" alt="formula">
</div>

Considerando *1/n* como a probabilidade de cada um dos elementos a ser encontrado, temos que:

<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cbegin%7Balign*%7D%20f%28n%29%20%3D%201%20%5Ccdot%20%5Cfrac%7B1%7D%7Bn%7D%20&plus;%202%20%5Ccdot%20%5Cfrac%7B1%7D%7Bn%7D%20&plus;%20...%20&plus;%20n%20%5Ccdot%20%5Cfrac%7B1%7D%7Bn%7D%5C%5C%5C%5C%20f%28n%29%20%3D%20%5Cfrac%7B1%7D%7Bn%7D%281%20&plus;%202%20&plus;%20...%20&plus;%20n%29%5C%5C%5C%5C%20f%28n%29%20%3D%20%5Cfrac%7B1%7D%7Bn%7D%20%5Cleft%20%28%20%5Cfrac%7Bn%28n&plus;1%29%7D%7B2%7D%20%5Cright%20%29%5C%5C%5C%5C%20f%28n%29%20%3D%20%5Cfrac%7B%28n&plus;1%29%7D%7B2%7D%20%5Cend%7Balign*%7D" alt="formula">
</div>

<br>

Logo, podemos concluir que:

o tempo de execução para o **melhor caso** é *f(n) = 1*, referente ao elemento que está na primeira posição do array;

o tempo de execução para o **pior caso** é *f(n) = n*, referente ao elemento que está na última posição do array ou não existe;

o tempo de execução para o **caso médio** é *f(n) = (n + 1) / 2*.

<br>

## Conclusão

Neste artigo foi abordado alguns tópicos introdutórios referentes a análise e complexidade de algoritmos e sua importância no desenvolvimento de software. No artigo seguinte, irei falar mais sobre alguns temas importantes desse estudo como: **notação Big O** e **classes de comportamento**.

<br><center><i>Obrigado pela leitura!</i></center>