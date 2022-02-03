---
layout: post
title: "Noções de Complexidade de Algoritmos #2"
description: "Dando continuidade ao artigo anterior, irei introduzir alguns novos conceitos e aprofundar em outros que são fundamentalmente importantes para análise e complexidade de algoritmos..."
author: "Mateus Almeida"
image: /assets/thumbnails/img10.jpeg
tags: [Algoritmos]
---

![Book](/assets/thumbnails/img10.jpeg)

<br>

Dando continuidade ao artigo anterior, irei introduzir alguns novos conceitos e aprofundar em outros que são fundamentalmente importantes para análise e complexidade de algoritmos, como: ordem de complexidade, notação Big O e classes de comportamento.

<br>

## Ordem de complexidade

Muita das vezes é necessário obter o consumo de tempo de um algoritmo sem que ele dependa da linguagem de programação utilizada, do computador que será executado e muito menos das características de implementação do código. Nesse caso, o caminho a se seguir é a comparação de funções.

Essa comparação leva em conta somente a "velocidade" com que as funções crescem no gráfico. Esta maneira de comparação de funções é chamada de **assintótica**.

#### Comportamento assintótico

Vimos no **Exemplo 1** do [artigo anterior](https://imsouza.github.io/nocoes-de-complexidade-de-algoritmos-1){:target="_blank"} que a função matemática que relaciona o custo do algoritmo com o tamanho do array dado era *f(n) = 2n + 3*. Essa é a função de complexidade de tempo que nos dá uma noção do custo de execução do algoritmo para um problema de tamanho *n*.

Mas será que todos os termos da função *f* são necessários para termos uma noção do custo do algoritmo em questão? A resposta é não. Nem todos termos são necessários, ou seja, é possível descartar certos termos da função a fim de manter apenas os termos que nos dizem a respeito do crescimento de dados de entrada de *n* e como isso reflete em *f*. 

Em outras palavras, se um algoritmo é mais rápido do que outro para uma grande quantidade de dados de entrada, podemos inferir que o mesmo algoritmo, muito provavelmente, continuará sendo mais rápido para conjuntos de dados de entrada menores.

Partido dessa afirmação, podemos descartar os termos de *f* que crescem de forma mais lenta e manter apenas os que crescem mais rápido a medida que o *n* cresce. Dessa forma, sabendo que *f* possui dois termos, sendo eles *2n* e *3* podemos realizar o seguinte procedimento: como *3* é uma **constante de inicialização**, ou seja, não é afetada pelo valor de *n*, ele poderá ser descartado. Como o *3* não altera o crescimento de *n*, podemos reescrever ou reduzir nossa função a seguinte forma: *f(n) = 2n*. Perceba que ainda restou uma constante multiplicando *n*, ela deverá também ser descartada, nos retornando, por fim, o seguinte resultado: *f(n) = n*.

Ao descartar todos os termos constantes de *f* e manter apenas os de maior crescimento, obtemos algo dito como **comportamento assintótico** do algoritmo. Chamamos por esse nome o comportamento de uma função *f(n)* quando *n* tende ao infinito. Esse comportamento acontece porque o termo que possui maior expoente domina o comportamento da função quando *n* tende ao infinito. Sendo assim, considere que para resolver um problema, por exemplo, foram feitos dois métodos, um com *f(n) = 100n* e outro com *f(n) = 2n^2*, sabendo que *n* é o tamanho da entrada de dados, qual seria o melhor método? A resposta é que depende de *n*. Para *n < 50*, o melhor método a se usar seria *f(n) = 2n^2*, já para *n > 50*, o melhor seria *f(n) = 100n*.

<div align="center">
  <img src="https://imgur.com/zRAUmWf.png" alt="gráfico">
</div>

<br>

## Notação Big O

De todas as formas de análise assintótica, a mais conhecida e utilizada é a notação **Big O**. Essa notação nos diz o quão rápido é um algoritmo para todas entradas de **n**. A notação Big O analisa o pior caso de um algoritmo, ou seja, analisa o limite superior de entrada, assim, podemos dizer que o comportamento do nosso algoritmo nunca poderá ultrapassar um certo limite. 

Por exemplo, suponha que você tenha uma lista de tamanho ```n```. O tempo de execução na notação Big O é *O(n)*, vale ressaltar que essa notação não fornece o tempo em segundos, mas sim, permite que você compare o número de operações, informando, assim, o quão rapidamente um algoritmo cresce. Já o algoritmo de **pesquisa binária** precisa de *log n* operações para verificar uma lista de tamanho ```n```, em outras palavras, o tempo de execução na notação Big O é *O(log n)*. A notação é escrita da seguinte forma: *O(n)*, sendo *O* referente ao "Big O" propriamente dito e o **n** referente ao número de operações.

#### Calculando o custo de um algoritmo

A ordenação por seleção ou *selection sort* é um algoritmo de ordenação que consiste em selecionar o menor item e colocar na primeira posição, selecionar o segundo menor item e colocar na segunda posição e assim por diante até que reste um único elemento.

A figura abaixo exemplifica o funcionamento do algoritmo:

<div align="center">
  <img src="https://imgur.com/HDQ5nVE.png" alt="selection sort">
</div>

Para todos os casos (melhor, médio e pior) o algoritmo possui complexidade *O(n^2)* sendo um algoritmo não estável. Mas como chegamos na complexidade *O(n^2)*? Para isso, usaremos uma implementação do algoritmo na linguagem C para realizarmos a análise e o cálculo da complexidade.

<script src="https://gist.github.com/imsouza/95b0fdba01ebeb92e51db2ecb1bfbe78.js"></script>

O código acima é o método de ordenação por seleção em C, onde será dado um array ```A``` de tamanho ```n``` a fim de procurar o menor valor do array utilizando a posição ```pos``` e o colocar na primeira posição. Esse processo será repetido até que todo array esteja ordenado em ordem crescente. No código, é possível ver dois comandos de laço, um externo e um interno. Enquanto o laço externo é executado ```n``` vezes o laço interno é executado ```n-1``` vezes, tendo sua execução dependente do valor do índice do primeiro laço. Portanto, o laço interno é executado ```n-1``` vezes na primeira iteração do laço externo, já na próxima iteração será ```n-2``` vezes e assim por diante, até que seja executado apenas **uma** vez.

O cálculo do custo do *selection sort* é um pouco complexo, por isso resolveremos por partes. Primeiramente iremos calcular o resultado da soma de execuções do laço interno, sendo ela:

<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?1%20&plus;%202%20&plus;%20...%20&plus;%20%28n-1%29%20&plus;%20n" alt="formula">
</div>

O nível de dificuldade e exatidão do cálculo pode variar de algoritmo para algoritmo. No caso do algoritmo implementado, temos que a soma de execuções do laço interno equivale à soma dos *n* termos de uma **progressão aritmética**. Tratando *S(n)* com a razão *1*, temos:

<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cbegin%7Balign*%7D%20S%28n%29%20%3D%201%20&plus;%202%20&plus;%20...%20&plus;%20%28n%20-%201%29%20&plus;%20n%5C%5C%5C%5C%20S%28n%29%20%3D%20n%20&plus;%20%28n%20-%201%29%20&plus;%20...%20&plus;%202%20&plus;%201%5C%5C%5C%5C%202S%28n%29%20%3D%20%281%20&plus;%20n%29%20&plus;%20%282%20&plus;%20%28n%20-%201%29%29%20&plus;%20...%20&plus;%20%28%28n%20-%201%29%20&plus;%202%29%20&plus;%20%28n%20&plus;%201%29%5C%5C%5C%5C%202S%28n%29%20%3D%20n%281%20&plus;%20n%29%5C%5C%5C%5C%20S%28n%29%20%3D%20%5Cfrac%7Bn%281%20&plus;%20n%29%7D%7B2%7D%20%5Cend%7Balign*%7D" alt="formula">
</div>

Com isso, temos que o número de execuções do laço interno é *S(n) = n(1 + n) / 2*. Esse método é bastante complexo, mas existe uma alternativa mais simples para estimar um limite superior. Essa estimativa pode ser feita de maneira intuitiva para realização do cálculo do custo do novo algoritmo obtido. A ideia principal desse método alternativo é alterar o algoritmo original para um menos eficiente, ou seja, saberemos se o *selection sort* é, no máximo, tão ruim ou até melhor que o novo algoritmo obtido. Uma estratégia para tornar o *selection sort* menos eficiente é trocar o laço interno por um laço que seja executado *n* vezes. Utilizando esse método facilitaremos muito no cálculo do custo do algoritmo em questão.

Sabendo que agora temos dois ```for``` aninhados sendo executados ```n``` vezes cada, a função de custo de algoritmo passa a ser *f(n) = n^2*. Agora, utilizando a notação Big O, temos que o custo do algoritmo no **pior caso** é *O(n^2)*. Vale lembrar que o custo do algoritmo original é, no máximo, tão ruim quanto *n^2*. O algoritmo pode ser melhor? Sim, mas nunca pior, por conta do resultado limite obtido para pior caso.

#### Classes de comportamento

A seguir, listarei algumas classes de comportamento referentes a notação Big O:

<table style="border-collapse:collapse;border-spacing:0;margin:0px auto" class="tg"><thead><tr><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Notação</th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Descrição</th><th style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Denominação</th></tr></thead><tbody><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(1)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">A melhor solução possível, pois não depende do tamanho da entrada. O acesso direto a um elemento de um array pode ser um bom exemplo</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Constante</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O problema é resolvido dividindo-o ao meio, e assim sucessivamente. Um exemplo famoso é o algorítmo de <span style="font-weight:bold">Busca Binária</span></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Logarítimica</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O problema realiza uma operação em cada elemento da entrada como o algoritmo de <span style="font-weight:bold">Busca Sequencial</span></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Linear</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(n log n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O problema é resolvido dividindo-se sucessivamente ao meio e depois junta-se os resultados. Um bom exemplo é o algoritmo <span style="font-weight:bold">Mergesort</span></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Linearítmico</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(n^2)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Ocorre quando os itens de dados são processados aos pares, muitas vezes com repetições aninhadas. Não é uma boa escolha para uma grande quantidade de dados. O algoritmo <span style="font-weight:bold">selection sort</span> possui essa complexidade e provamos isso no tópico acima</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Quadrática</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(n^3)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Podemos ter como exemplo a multiplicação de matrizes <span style="font-weight:bold">n x n</span></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Cúbica</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(2^n)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">A medida que <span style="font-weight:bold">n</span> aumenta, o fator analisado (tempo ou espaço) aumenta exponencialmente. Um exemplo pode ser todos subconjuntos de <span style="font-weight:bold">n</span> elementos</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Exponencial</td></tr><tr><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">O(n!)</td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">A pior solução, pois o número de instruções cresce muito rapidamente para um pequeno número de dados, como, por exemplo, o algoritmo do <span style="font-weight:bold">Caixeiro Viajante</span></td><td style="border-color:inherit;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;overflow:hidden;padding:10px 5px;text-align:center;vertical-align:middle;word-break:normal">Fatorial</td></tr></tbody></table>
<br>

O gráfico abaixo compara a ordem de crescimento referente a cada complexidade:

<div align="center">
  <img src="https://imgur.com/feVLiVI.png" alt="selection sort">
</div>

Em geral:

<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?%5Cinline%20O%281%29%20%3C%20O%28log%20n%29%20%3C%20O%28n%29%20%3C%20O%28n%20log%20n%29%20%3C%20O%28n%20%5E%202%29%20%3C%20O%28n%5E3%29%20%3C%20O%282%5En%29%20%3C%20O%28n%21%29" alt="formula">
</div>

<br>

## Conclusão

A análise da complexidade de algoritmos é uma importante área de pesquisa na Ciência da Computação, entender os seus fundamentos e práticas é mais do que essencial na vida de qualquer pesquisador da área e graduando. Nestes dois artigos tentei trazer de forma mais simplificada uma noção geral sobre esse tema. Escolhi não falar neste artigo sobre as notações **Big Ômega** e **Big Theta** devido o seu nível de complexidade e abstração, mas fica aí dica para quem tiver curiosidade em pesquisar a respeito.

<br>

## Referências

[Introduction to Algorithms. by Thomas H. Cormen, Charles E. Leiserson, and Ronald L. Rivest.](https://www.amazon.com.br/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844){:target="_blank"}

[Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne](https://www.amazon.com.br/Algorithms-Robert-Sedgewick/dp/032157351X/ref=asc_df_032157351X/?tag=googleshopp00-20&linkCode=df0&hvadid=379787788238&hvpos=&hvnetw=g&hvrand=6981295159966172002&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001546&hvtargid=pla-432981821009&psc=1){:target="_blank"}

[Entendendo Algoritmos, por Aditya Bhargava ](https://www.amazon.com.br/Entendendo-Algoritmos-ilustrado-programadores-curiosos-ebook/dp/B07B61HC3L/ref=sr_1_1?adgrpid=81530415255&dchild=1&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzg0XI9RQr-8whNpah9KjRyJHHGBe05YOxbtRUe-C6lzl3bjp7GDu4aAnYlEALw_wcB&hvadid=425982603043&hvdev=c&hvlocphy=1001546&hvnetw=g&hvqmt=e&hvrand=1410481636243571583&hvtargid=kwd-297239954614&hydadcr=5629_11235159&keywords=grokking+algorithms&qid=1623294950&sr=8-1){:target="_blank"}

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
