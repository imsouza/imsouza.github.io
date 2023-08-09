---
layout: post
title: "Algoritmos de ordenação em C #1"
description: "Ordenar informações é uma tarefa um tanto quanto comum no desenvolvimento de aplicações. Este artigo visa os principais algoritmos de ordenação em *arrays* e como implementá-los na linguagem C..."
author: "Mateus Almeida"
image: /assets/thumbnails/img17.jpeg
tags: [Algoritmos]
---

![Img](/assets/thumbnails/img17.jpeg)

&nbsp;

Ordenar informações é uma tarefa um tanto quanto comum no desenvolvimento de aplicações. Este artigo visa os principais algoritmos de ordenação e como implementá-los na linguagem *C*.

&nbsp;

## Mas afinal, o que é ordenação?

Ordenação nada mais é do que o ato de colocar um conjunto de dados em uma determinada ordem predefinida, permitindo, assim, que o acesso aos dados seja feita de maneira eficiente.

**Fora de ordem**: 9,8,4,3,1,2,5,7,6.

**Ordenado**: 1,2,3,4,5,6,7,8,9.

> A ordenação de um cojunto de dados é feita utilizando como base uma chave específica. Essa **chave de ordenação** é o "campo" do item utilizado para comparação. Por meio dele sabemos se determinado elemento está à frente ou não de  outros no conjunto ordenado.

&nbsp;

## Tipos de ordenação

Os tipos de ordenação mais comuns são:

- **Numérica**: 1,2,3,4,5,6,7,8,9.

- **Lexicográfica (ordem alfabética)**: Anna, Bernado, Carlos, Daniel.

Independente do tipo, a ordenação pode seguir uma determinada ordem, sendo ela:

- **Crescente**: 
  - 1,2,3,4,5,6,7,8,9.
  - Anna, Bernado, Carlos, Daniel.

ou

- **Decrescente**:
  - 9,8,7,6,5,4,3,2,1.
  - Daniel, Carlos, Bernado, Anna.

&nbsp;

## Conceituando algoritmos de ordenação

> Um algoritmo de ordenação é aquele que coloca os elementos de dada sequência em certa ordem predefinida.

Os algoritmos de ordenação podem ser classificados como de **ordenação interna** ou **externa**:

- **Ordenação interna (*in-place*)**: todos elementos a serem ordenados cabem na memória principal (*RAM*) e qualquer elemento pode ser imediatamente acessado.

- **Ordenação externa**: os elementos a serem ordenados não cabem na memória principal; podem estar armazenados em uma memória secundária, usando, por exemplo, um arquivo. Os elementos são acessados sequencialmente ou em grandes blocos.

> Vale lembrar que o foco deste artigo é explicar os principais algoritmos de **ordenação interna**.

Um algoritmo de ordenação também pode ser classificado como estável ou não.

> É considerado estável se a ordem dos elementos com chaves iguais não muda durante a ordenação.

Por exemplo, imagine um cojunto de elementos não ordenado com dois valores iguais, no caso, 5a e 5b:

**dados não ordenados**: {5a, 2, 1, 5b, 3, 4}

Um algoritmo de ordenação será considerado **estável** se o valor **5a** vier antes do **5b**, ou seja, a ordem crescente dos dados é respeitada. Assim, aplicando um algoritmo de ordenação estável no exemplo, o conjunto de elementos pode ser dado por:

**ordenação estável**: {1, 2, 3, 4, 5a, 5b}

**ordenação não estável**: {1, 2, 3, 4, 5b, 5a}

&nbsp;

## Algoritmos básicos de ordenação
### *Bubble Sort*
O algoritmo de ordenação por "bolha" ou popularmente chamado de ***bubble sort*** é um algoritmo muito conhecido no mundo da programação e um dos primeiros ou se não o primeiro algoritmo de ordenação que todos aprendem. Ele tem esse nome por remeter a ideia de bolhas flutuando em um tanque de água em direção ao topo, até se ordenarem e encontrarem o mesmo nível.

O *bubble sort* funciona movimentando, uma posição por vez, o maior valor existente na porção não ordenada de um *array* para sua respectiva posição no *array* ordenado, em outras palavras: se o elemento anterior (mais a esquerda), for maior que o próximo elemento (mais a direita), trocamos os valores. Esse processo é repetido até que todos os elementos estejam nas suas posições correspondentes.

![img](https://user-images.githubusercontent.com/39147407/140587920-d7aaa511-67df-4fdd-8497-8fe6d988e2db.gif)

Daremos início agora a implementação do algoritmo. O princípio de funcionamento dele é a troca de valores em posições consecutivas do *array* até que fiquem ordenados. O processo de levar o maior valor até a posição final do *array* só é possível por conta de um laço de repetição, neste caso, utilizaremos o comando **do-while**. Uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/6aab525ff245eea5c33bed209d0be346.js"></script>

> Utilizei o tipo **bool** por questões de legibilidade, mas, também é possível utilizar os valores convencionais como **0** e **1**, fica ao critério do programador.

<script src="https://gist.github.com/imsouza/565e5b68fff02835c90b12d414211973.js"></script>

> Note que, na implementação do *bubble sort*, o comando **do-while** encerra por completo se a variável **troca** for **false**, ou seja, se ela for igual a **0**. Assim, o *looping* continua enquanto **troca** for **true** e, consequentemente, diferente de **0**. Isso é feito por questões de otimização do algoritmo.

![img](https://user-images.githubusercontent.com/39147407/140568080-d53c2e68-3f4b-4ed2-9dd7-7e6953f76659.png)

Sempre que uma troca de valores ocorrer, a variável **troca** será modificada. Desse modo, se nenhuma troca de valores ocorrer, o algoritmo poderá ser finalizado mais cedo.

&nbsp;

### *Selection Sort*

O algoritmo **selection sort**, também conhecido como ordenação por "seleção" é outro algoritmo bastante comum na programação. Ele tem esse nome, pois, cada passo "seleciona" o melhor elemento (maior ou menor, dependendo da ordenação), para ocupar uma posição adequada do *array*. Quando falamos de desempenho, o *selection sort* é quase sempre superior ao *bubble sort*.

O *selection sort* divide o *array* em duas partes: a parte ordenada, à esquerda do elemento analisado, e a parte que não foi ordenada, à direita do elemento. Para cada elemento do *array*, começando do primeiro, o algoritmo procura na parte não ordenada (mais a direita) o menor valor (ordenação crescente) e troca os dois valores de lugar. Em seguida, o algoritmo avança para a proxima posição do *array* e esse processo se repete até que todo *array* esteja ordenado.

![img](https://user-images.githubusercontent.com/39147407/140587932-981c48b9-de68-43f8-b75b-1259336d34fb.gif)

O fundamento do *selection sort* é a seleção do melhor elemento para ocupar a posição adequada do *array*. Uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/091411546609131a37bf0d5a47fed785.js"></script>

Da linha 5-10, o algoritmo procura pelo elemento de menor valor mais a direita de modo a obter seu índice. Da linha 12-16, o algoritmo troca os respectivos valores de lugar, sendo assim, a troca sera feita pela posição do elemento atual, índice **i**, com o menor valor encontrado, índice **menor**. O processo é repetido para cada posição do *array* até ele estar ordenado.

![img](https://user-images.githubusercontent.com/39147407/140568309-cbe32ee4-8567-4ced-bf39-33f61b5092a2.png)

&nbsp;

### *Insertion Sort*

O algoritmo **insertion sort**, também conhecido como ordenação por "inserção" é outro algoritmo que faz parte da categoria de algoritmos básicos de ordenação. Esse algoritmo se assemelha ao processo de ordenação de um conjunto de cartas de baralhos com as mãos: inserindo em uma ordem predefinida cada uma das cartas na mão. O *insertion sort* possui um desempenho bem melhor quando comparado com o *bubble sort* e *selection sort*. 

![img](https://user-images.githubusercontent.com/39147407/140587937-b1a13340-69c9-45b4-b725-68745ccdd8af.gif)

O fundamento do algoritmo *insertion sort* é a inserção de um elemento do *array* na sua posição correta, movimentando uma posição para frente (mais a direita) os valores que são maiores que o valor atual daquela posição. Resumindo: se o anterior for maior, então ele é "puxado" para direita uma vez, liberando, assim, espaço para a inserção do valor a ser ordenado. Uma possível implementação é a seguinte:

<script src="https://gist.github.com/imsouza/72cbf8d769b2f3aae9966efaf775d872.js"></script>

A figura abaixo ilustra o processo de ordenação utilizando esse algoritmo:

![img](https://user-images.githubusercontent.com/39147407/140586856-5b819e7e-99fa-45ab-ae96-c11e87b44042.png)

&nbsp;

## Análise de complexidade

Considerando um *array* com **n** elementos, o tempo de execução de cada algoritmo é:

<table style="border-collapse:collapse;border-spacing:0;margin:0px auto" class="tg"><thead><tr><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">Algoritmo</span></th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">Melhor caso</span></th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">Caso médio</span></th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:normal;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal"><span style="font-weight:bold">Pior caso</span></th></tr></thead><tbody><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">Bubble Sort</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">Selection Sort</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">Insertion Sort</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:top;word-break:normal">O(n^2)</td></tr></tbody></table>

&nbsp;

## Conclusão

Vimos neste artigo alguns dos principais algoritmos básicos de ordenação, seu funcionamento e implementação na linguagem *C*. No artigo seguinte, falaremos um pouco mais sobre algoritmos sofisticados de ordenação e sua medida de desempenho comparada com os demais.

&nbsp;

## Referências

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

[Entendendo Algoritmos, por Aditya Bhargava ](https://www.amazon.com.br/Entendendo-Algoritmos-ilustrado-programadores-curiosos-ebook/dp/B07B61HC3L/ref=sr_1_1?adgrpid=81530415255&dchild=1&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzg0XI9RQr-8whNpah9KjRyJHHGBe05YOxbtRUe-C6lzl3bjp7GDu4aAnYlEALw_wcB&hvadid=425982603043&hvdev=c&hvlocphy=1001546&hvnetw=g&hvqmt=e&hvrand=1410481636243571583&hvtargid=kwd-297239954614&hydadcr=5629_11235159&keywords=grokking+algorithms&qid=1623294950&sr=8-1){:target="_blank"}

[Programação Java: algoritmo de divisão e conquista](https://www.codetd.com/pt/article/11914416){:target="_blank"}

[Algorithms - Merge Sort](https://www.geeksforgeeks.org/merge-sort/){:target="_blank"}

[O Algoritmo Heapsort](http://www.dsc.ufcg.edu.br/~pet/jornal/maio2013/materias/historia_da_computacao.html){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
