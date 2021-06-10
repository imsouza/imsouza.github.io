---
layout: post
title: "Noções de Complexidade de Algoritmos #2"
description: "Dando continuidade ao artigo anterior, irei introduzir alguns novos conceitos e aprofundar em outros que são fundamentalmente importantes para análise e complexidade de algoritmos"
author: "Mateus Almeida"
image: /assets/thumbnails/img10.jpeg
tags: [Algoritmos]
---

![Book](/assets/thumbnails/img10.jpeg)

<br>

Dando continuidade ao artigo anterior, irei introduzir alguns novos conceitos e aprofundar em outros que são fundamentalmente importantes para análise e complexidade de algoritmos, como: ordem de complexidade, notação Big O e classes de comportamento.

## Ordem de complexidade

Muita das vezes é necessário obter o consumo de tempo de um algoritmo sem que ele dependa da linguagem de programação utilizada, do computador que será executado e muito menos das características de implementação do código. Nesse caso, o caminho a se seguir é a comparação de funções.

Essa comparação leva em conta somente a "velocidade" com que as funções crescem no gráfico. Esta maneira de comparação de funções é chamada de <b>assintótica</b>.

#### Comportamento assintótico

Vimos no <i>Exemplo 1</i> do [artigo anterior](https://imsouza.github.io/nocoes-de-complexidade-de-algoritmos-1){:target="_blank"} que a função matemática que relaciona o custo do algoritmo com o tamanho do array dado era <i>f(n) = 2n + 3</i>. Essa é a função de complexidade de tempo que nos dá uma noção do custo de execução do algoritmo para um problema de tamanho <i>n</i>.

Mas será que todos os termos da função <i>f</i> são necessários para termos uma noção do custo do algoritmo em questão? A resposta é não. Nem todos termos são necessários, ou seja, é possível descartar certos termos da função a fim de manter apenas os termos que nos dizem a respeito do crescimento de dados de entrada de <i>n</i> e como isso reflete em <i>f</i>. 

Em outras palavras, se um algoritmo é mais rápido do que outro para uma grande quantidade de dados de entrada, podemos inferir que o mesmo algoritmo, muito provavelmente, continuará sendo mais rápido para conjuntos de dados de entrada menores.

Partido dessa afirmação, podemos descartar os termos de <i>f</i> que crescem de forma mais lenta e manter apenas os que crescem mais rápido a medida que o <i>n</i> cresce. Dessa forma, sabendo que <i>f</i> possui dois termos, sendo eles <i>2n</i> e <i>3</i> podemos realizar o seguinte procedimento: como <i>3</i> é uma <b>constante de inicialização</b>, ou seja, não é afetada pelo valor de <i>n</i>, ele poderá ser descartado. Como o <i>3</i> não altera o crescimento de <i>n</i>, podemos reescrever ou reduzir nossa função a seguinte forma: <i>f(n) = 4n</i>. Perceba que ainda restou uma constante multiplicando <i>n</i>, ela deverá também ser descartada, nos retornando, por fim, o seguinte resultado: <i>f(n) = n</i>.

Ao descartar todos os termos constantes de <i>f</i> e manter apenas os de maior crescimento, obtemos algo dito como <b>comportamento assintótico</b> do algoritmo. Chamamos por esse nome o comportamento de uma função <i>f(n)</i> quando <i>n</i> tende ao infinito. Esse comportamento acontece porque o termo que possui maior expoente domina o comportamento da função quando <i>n</i> tende ao infinito. Sendo assim, considere que para resolver um problema, por exemplo, foram feitos dois métodos, um com <i>f(n) = 100n</i> e outro com <i>f(n) = 2n^2</i>, sabendo que <i>n</i> é o tamanho da entrada de dados, qual seria o melhor método? A resposta é que depende de <i>n</i>. Para <i>n < 50</i>, o melhor método a se usar seria <i>f(n) = 2n^2</i>, já para <i>n > 50</i>, o melhor seria <i>f(n) = 100n</i>.

<div align="center">
  <img src="https://imgur.com/zRAUmWf.png" alt="gráfico">
</div>

<br>

## Notação Big O

De todas as formas de análise assintótica, a mais conhecida e utilizada é a notação <b>Big O</b>. Essa notação nos diz o quão rápido é um algoritmo para todas entradas de <i>n</i>. A notação Big O analisa o pior caso de um algoritmo, ou seja, analisa o limite superior de entrada, assim, podemos dizer que o comportamento do nosso algoritmo nunca poderá ultrapassar um certo limite. 

Por exemplo, suponha que você tenha uma lista de tamanho <i>n</i>. O tempo de execução na notação Big O é <i>O(n)</i>, vale ressaltar que essa notação não fornece o tempo em segundos, mas sim, permite que você compare o número de operações, informando, assim, o quão rapidamente um algoritmo cresce. Já o algoritmo de <b>pesquisa binária</b> precisa de <i>log n</i> operações para verificar uma lista de tamanho <i>n</i>, em outras palavras, o tempo de execução na notação Big O é <i>O(log n)</i>. A notação é escrita da seguinte forma: <i>O(n)</i>, sendo <i>O</i> referente ao "Big O" propriamente dito e o <i>n</i> referente ao número de operações.

#### Calculando o custo de um algoritmo

A ordenação por seleção ou <i>selection sort</i> é um algoritmo de ordenação que consiste em selecionar o menor item e colocar na primeira posição, selecionar o segundo menor item e colocar na segunda posição e assim por diante até que reste um único elemento.

A figura abaixo exemplifica o funcionamento do algoritmo:

<div align="center">
  <img src="https://imgur.com/HDQ5nVE.png" alt="selection sort">
</div>

Para todos os casos (melhor, médio e pior) o algoritmo possui complexidade <i>O(n^2)</i> sendo um algoritmo não estável. Mas como chegamos na complexidade <i>O(n^2)</i>? Para isso, usaremos uma implementação do algoritmo na linguagem C para realizarmos a análise e o cálculo da complexidade.

<script src="https://gist.github.com/imsouza/95b0fdba01ebeb92e51db2ecb1bfbe78.js"></script>

O código acima é o método de ordenação por seleção em C, onde será dado um array ```A``` de tamanho ```n``` a fim de procurar o menor valor do array utilizando a posição ```pos``` e o colocar na primeira posição. Esse processo será repetido até que todo array esteja ordenado em ordem crescente. No código, é possível ver dois comandos de laço, um externo e um interno. Enquanto o laço externo é executado ```n``` vezes o laço interno é executado ```n-1``` vezes, tendo sua execução dependente do valor do índice do primeiro laço. Portanto, o laço interno é executado ```n-1``` vezes na primeira iteração do laço externo, já na próxima iteração será ```n-2``` vezes e assim por diante, até que seja executado apenas <b>1</b> vez.

O cálculo do custo do <i>selection sort</i> é um pouco complexo, por isso resolveremos por partes. Primeiramente iremos calcular o resultado da soma de execuções do laço interno, sendo ela:

<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?1%20&plus;%202%20&plus;%20...%20&plus;%20%28n-1%29%20&plus;%20n" alt="formula">
</div>

O nível de dificuldade e exatidão do cálculo pode variar de algoritmo para algoritmo. No caso do algoritmo implementado, temos que a soma de execuções do laço interno equivale à soma dos <i>n</i> termos de uma <b>progressão aritmética</b>. Tratando <i>S(n)</i> com a razão <i>1</i>, temos:

<div align="center">
  <img src="https://latex.codecogs.com/gif.latex?%5Cinline%20%5Cbegin%7Balign*%7D%20S%28n%29%20%3D%201%20&plus;%202%20&plus;%20...%20&plus;%20%28n%20-%201%29%20&plus;%20n%5C%5C%5C%5C%20S%28n%29%20%3D%20n%20&plus;%20%28n%20-%201%29%20&plus;%20...%20&plus;%202%20&plus;%201%5C%5C%5C%5C%202S%28n%29%20%3D%20%281%20&plus;%20n%29%20&plus;%20%282%20&plus;%20%28n%20-%201%29%29%20&plus;%20...%20&plus;%20%28%28n%20-%201%29%20&plus;%202%29%20&plus;%20%28n%20&plus;%201%29%5C%5C%5C%5C%202S%28n%29%20%3D%20n%281%20&plus;%20n%29%5C%5C%5C%5C%20S%28n%29%20%3D%20%5Cfrac%7Bn%281%20&plus;%20n%29%7D%7B2%7D%20%5Cend%7Balign*%7D" alt="formula">
</div>

Com isso, temos que o número de execuções do laço interno é <i>S(n) = n(1 + n) / 2</i>. Esse método é bastante complexo, mas existe uma alternativa mais simples para estimar um limite superior. Essa estimativa pode ser feita de maneira intuitiva para realização do cálculo do custo do novo algoritmo obtido. A ideia principal desse método alternativo é alterar o algoritmo original para um menos eficiente, ou seja, saberemos se o <i>selection sort</i> é, no máximo, tão ruim ou até melhor que o novo algoritmo obtido. Uma estratégia para tornar o <i>selection sort</i> menos eficiente é trocar o laço interno por um laço que seja executado <i>n</i> vezes. Utilizando esse método facilitaremos muito no cálculo do custo do algoritmo em questão.

Sabendo que agora temos dois ```for``` aninhados sendo executados ```n``` vezes cada, a função de custo de algoritmo passa a ser <i>f(n) = n^2</i>. Agora, utilizando a notação Big O, temos que o curso do algoritmo no <b>pior caso</b> é <i>O(n^2)</i>. Vale lembrar que o custo do algoritmo original é, no máximo, tão ruim quanto <i>n^2</i>. O algoritmo pode ser melhor? Sim, mas nunca pior, por conta do resultado limite obtido para pior caso.

#### Classes de comportamento

A seguir, listarei algumas classes de comportamento referentes a notação Big O:

| Notação    | Descrição   | Denominação  |
|------------|-------------| ------------ |
|O(1)        | <i>A melhor solução possível, pois não depende do tamanho da entrada. O acesso direto a um elemento de um array pode ser um bom exemplo</i><br><br> |  Constante|
|O(log n)    | <i>O problema é resolvido dividindo-o ao meio, e assim sucessivamente. Um exemplo famoso é o algorítmo de <b>Busca Binária</b></i><br><br> |  Logarítimica|
|O(n)        | <i>O problema realiza uma operação em cada elemento da entrada como o algoritmo de <b>Busca Sequencial</b></i><br><br> |  Linear|
|O(n log n)  | <i>O problema é resolvido dividindo-se sucessivamente ao meio e depois junta-se os resultados. Um bom exemplo é o algoritmo <b>Mergesort</b></i><br><br> |  Linearítmico|
|O(n^2)      | <i>Ocorre quando os itens de dados são processados aos pares, muitas vezes com repetições aninhadas. Não é uma boa escolha para uma grande quantidade de dados. O algoritmo <b>selection sort</b> possui essa complexidade e provamos isso no tópico acima</i><br><br> |  Quadrática|
|O(n^3)      | <i>Podemos ter como exemplo a multiplicação de matrizes <b>n x n</b></i><br><br> |  Cúbica|
|O(2^n)      | <i>A medida que <b>n</b> aumenta, o fator analisado (tempo ou espaço) aumenta exponencialmente. Um exemplo pode ser todos subconjuntos de <b>n</b> elementos</i><br><br>             |  Exponencial|
|O(n!)       | <i>A pior solução, pois o número de instruções cresce muito rapidamente para um pequeno número de dados, como, por exemplo, o algoritmo do <b>Caixeiro Viajante</b></i> |  Fatorial|

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

A análise da complexidade de algoritmos é uma importante área de pesquisa na Ciência da Computação, entender os seus fundamentos e práticas é mais do que essencial na vida de qualquer pesquisador da área e graduando. Nestes dois artigos tentei trazer de forma mais simplificada uma noção geral sobre esse tema. Escolhi não falar neste artigo sobre as notações <b>Big Ômega</b> e <b>Big Theta</b> devido o seu nível de complexidade e abstração, mas fica ai dica para quem tiver curiosidade em pesquisar a respeito.

<br>

## Referências

[Introduction to Algorithms. by Thomas H. Cormen, Charles E. Leiserson, and Ronald L. Rivest.](https://www.amazon.com.br/Introduction-Algorithms-Thomas-H-Cormen/dp/0262033844){:target="_blank"}

[Algorithms, 4th Edition by Robert Sedgewick and Kevin Wayne](https://www.amazon.com.br/Algorithms-Robert-Sedgewick/dp/032157351X/ref=asc_df_032157351X/?tag=googleshopp00-20&linkCode=df0&hvadid=379787788238&hvpos=&hvnetw=g&hvrand=6981295159966172002&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001546&hvtargid=pla-432981821009&psc=1){:target="_blank"}

[Entendendo Algoritmos, por Aditya Bhargava ](https://www.amazon.com.br/Entendendo-Algoritmos-ilustrado-programadores-curiosos-ebook/dp/B07B61HC3L/ref=sr_1_1?adgrpid=81530415255&dchild=1&gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQzg0XI9RQr-8whNpah9KjRyJHHGBe05YOxbtRUe-C6lzl3bjp7GDu4aAnYlEALw_wcB&hvadid=425982603043&hvdev=c&hvlocphy=1001546&hvnetw=g&hvqmt=e&hvrand=1410481636243571583&hvtargid=kwd-297239954614&hydadcr=5629_11235159&keywords=grokking+algorithms&qid=1623294950&sr=8-1){:target="_blank"}

[Estrutura de Dados Descomplicada - Em Linguagem C , por André Backes](https://www.amazon.com.br/Estrutura-Dados-Descomplicada-Linguagem-Backes/dp/8535285237){:target="_blank"}

<br><center><i>Obrigado pela leitura!</i></center>
