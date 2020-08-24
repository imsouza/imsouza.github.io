---
layout: post
title: "Convertendo IEEE 754 32 bits para decimal e vice-versa"
author: "Mateus Almeida"
---

O padrão IEEE 754, desenvolvido pelo Instituto de Engenheiros Eletricistas e Eletrônicos, foi adotado nos anos 2000, sofrendo algumas modificações ao longo do tempo mas sendo, até hoje o principal padrão para operações e representatividade de números binários com ponto flutuante.

<br>

## Precisão

As principais precisões para a representação binária conhecemos por Precisão Simples de <i>32 bits</i>, que é a precisão que será abordada nesse artigo e Precisão Dupla de <i>64 bits</i>.

## Precisão Simples (float)

- Equivalente a até 7 dígitos decimais;
- 1 bit para o sinal;
- 8 bits para o expoente;
- 23 bits para a representação da mantissa.
- Faixa de valores: ![2^-126](https://i.imgur.com/VmqPtih.png) até ![2^127](https://i.imgur.com/lO3K1ux.png)

![Float](https://i.imgur.com/tbZEEO5.png)

## Precisão Dupla (double)

- Equivalente a até 15 dígitos decimais;
- 1 bit para o sinal;
- 11 bits para o expoente;
- 52 bits para a representação da mantissa.
- Faixa de valores: ![2^-1022](https://i.imgur.com/vNg2rc4.png) até ![2^1023](https://i.imgur.com/gQ6BCAW.png)

![Double](https://i.imgur.com/91OrHPR.png)

<br>

## Normalização

A fórmula abaixo, em notação científica, existe para que o número esteja de acordo com as normas pré estabelecidas para o cálculo:

![Fórmula](https://i.imgur.com/3t6v5Wq.png)

## Sinal

- O sinal sempre será representado apenas por um bit, sendo (1) <i>negativo</i> ou (0) <i>positivo</i>.

## Mantissa

- A mantissa é parte de um número em notação científica ou um número de ponto flutuante, consistindo em seus dígitos significativos.

## Expoente

- O expoente irá depender do resultado do cálculo, onde será somado a <i>"representação em excesso"</i>, mais conhecido como <i>Bias</i> na precisão simples em 32 bits, valendo 127. Vale ressaltar que o expoente <i>(E)</i> pode ser positivo ou negativo, mas <b>não</b> é armazenado em complemento de dois.

![Expoente](https://i.imgur.com/i3YFGSC.png)

<br>

## Convertendo número decimal para o padrão IEEE 754

Teremos como base o número <b>121.3</b> em decimal, iremos representalo como ponto flutuante com precisão de 32 bits, segue os passos:

## Passo 1 - Converter o número para binário

Para iniciarmos, iremos converter o número <b>121.3</b> de decimal para binário. Efetuaremos a conversão para binário por partes, começando pelo <b>121</b>:

![Divisão](https://i.imgur.com/KMUDeXy.png)

Podendo ser escrito da seguinte forma:

![Resultado](https://i.imgur.com/pNpbvYc.png)

Agora converteremos a parte decimal <b>.3</b>:

![Multiplicação](https://i.imgur.com/fLixgRP.png)

Tendo como resultado final os seguintes valores:

![Resultado](https://i.imgur.com/3E8Tm86.png)

## Passo 2 - Representar o binário em notação científica

Iremos primeiramente deslocar a vírgula e fazer a contagem das casas, adicionando o valor da quantidade de casas no expoente:

![Notação Científica](https://i.imgur.com/mjJzxym.png)

## Passo 3 - Converter a notação científica para o formato IEEE 754

Utilizaremos a seguinte representação, como já mostrada antes, para a conversão do número:

| Sinal | Expoente |             Mantissa             |
|:-----:|----------|----------------------------------|

Como o número <b>121.3</b> é positivo, por padrão, é sugerido que o bit de sinal seja 0, caso o número fosse negativo o bit de sinal seria 1.

```
| 0 | Expoente |             Mantissa             |
|:-:|----------|----------------------------------|
```

Em seguida representaremos os bits de expoente e para isso precisamos ficar atento com o Bias.
Sabemos que o Bias para para precisão simples é 127, e vai ai a precaução: se o expoente for <b>positivo</b> nós somaremos o expoente ao Bias, caso contrário, iremos subtrair. 

Nesse caso, somando o bias com o expoente teremos:

![127+6=133](https://i.imgur.com/wd4i8yP.png)

E em seguida, converteremos o resultado <b>133</b> para binário:

![Resultado em Binário](https://i.imgur.com/v6Cqyso.png)

e voilà, ai está nosso expoente!

```
| 0 | 10000101 |             Mantissa             |
|:-:|----------|----------------------------------|
```

E por fim, a mantissa! Para isso apenas precisamos copiar a parte da própria mantissa da conversão para notação científica, mostrada no Passo 3:

```
| 0 | 10000101 |         11100101001100110011010...         |
|:-:|----------|--------------------------------------------|
```

Mission Complete!

<br>

## Convertendo número no padrão IEEE 754 para decimal

Agora iremos fazer o processo inverso, utilizaremos o resultado obtido anteriormente no formato IEEE 754 para ficar mais compreensível o processo, vamos lá!

```
| S | Expoente |          Mantissa          |
|---|:--------:|---------------------------:|
| 0 | 10000101 | 11100101001100110011010... |
```

## Passo 1 - Identificar o sinal

Como já foi explicado, o valor dado em formato IEEE 754 tem o sinal positivo pois começa com 0, sendo assim, o número decimal resultante também será positivo. Caso o bit de sinal fosse 1, o número decimal resultante seria negativo.

## Passo 2 - Converter o expoente para decimal e encontrá-lo

![Resultado em Decimal](https://i.imgur.com/rjPb36v.png)

Neste caso, para encontrar o exponte, precisamos fazer a operação inversa. Iremos subtrair o valor <b>133</b> obtido na conversão, pelo Bias.

![Subtração](https://i.imgur.com/EYr19LP.png)

## Passo 3 - Converter a mantissa para decimal

Sabendo que a mantissa é a parte fracionária, devemos converter da seguinte forma:

![Conversão de bit fracionário](https://i.imgur.com/Qfs9Vk2.png)

Teremos então o seguinte resultado:

![Resultado](https://i.imgur.com/HrALxLY.png)

Percebe-se que não foi cálculado toda a mantissa, afinal, ela chega a um ponto onde só se repete. Uma boa dica para economizar tempo ao converter números grandes como esse é perceber as repetições e calcular somente o necessário. No cálculo acima, só foi utilizado os bits até o momento antes de iniciar uma repetição.

## Passo 4 - Aplicação na fórmula geral

Por fim, iremos substituir os valores obtidos anteriormente na seguinte fórmula para conversão:

![Fórmula](https://i.imgur.com/FunE2J5.png)

Resultando em:

![Resultado](https://i.imgur.com/0ZSGp44.png)

Percebe-se que o valor de resultado chegou muito próximo do esperado de forma exata e estrita que é <b>121.3</b>, podendo assim, tranquilamente ser arredondado sem nenhum problema.

<br>

## Conclusão

Nesse artigo foi abordado, de forma simples e prática sobre a conversão de números no formato IEEE 754 para decimal e vice-versa, tendo como premissa conhecimentos básicos do leitor sobre conversão de base no geral. 

<br><center><i>Obrigado pela leitura!</i></center>
