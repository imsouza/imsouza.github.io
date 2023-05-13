---
layout: post
title: "Classificação com Redes Neurais Convolucionais #1"
description: "Atualmente as Redes Neurais Artificiais já apresentam resultados altamente satisfatórios para diversos problemas reais, no entanto, a categoria de redes neurais artificiais densas..."
author: "Mateus Almeida"
image: /assets/thumbnails/img29.jpg
tags: [Deep Learning]
---

![Birds](/assets/thumbnails/img29.jpg)

Atualmente as Redes Neurais Artificiais (*CNN*) já apresentam resultados altamente satisfatórios para diversos problemas reais, no entanto, a categoria
de redes neurais artificiais densas, provenientes do aprendizado profundo (do inglês *Deep Learning*) mostra um avanço no campo da Inteligência Artificial principalmente na resolução de problemas que envolvem a área de Visão Computacional e aplicações de áudio. Em muitos problemas dessas áreas, as Redes Neurais Convolucionais apresentam melhores resultados quando aplicadas ao modelo.

<br>

## O que é uma rede neural artificial?

Uma rede neural artificial clássica é composta por um conjunto de neurônios **interconectados**, onde cada neurônio é conectado a todos os neurônios da camada anterior. Essa arquitetura é conhecida como rede neural artificial de múltiplas camadas e consiste em uma camada de entrada, várias camadas ocultas e uma camada de saída. Cada neurônio recebe um conjunto de entradas, realiza uma operação matemática nelas e produz uma saída que é enviada para os neurônios da camada seguinte. As conexões entre os neurônios são ponderadas e ajustadas durante o treinamento da rede para produzir a saída desejada para um determinado conjunto de entradas. As redes neurais artificiais são usadas em uma variedade de aplicações, incluindo reconhecimento de fala, reconhecimento de imagem e processamento de linguagem natural

![https://imgur.com/PpA5QOS.png](https://imgur.com/PpA5QOS.png)

<br>

## O que é uma CNN?

As *CNNs* foram propostas para o reconhecimento visual, baseando-se em conceitos da biologia da visão humana. É um algoritmo de aprendizado profundo que pode **receber uma imagem como entrada**, atribuir pesos e vieses que podem ser aprendidos pelo modelo e, com base nisso, ser capaz de diferenciar, classificar e validar os respectivos dados considerando a relação entre os pixels vizinhos com base nos filtros aplicados por uma operação de **convolução**.

<br>

## Convolução

Uma convolução é uma simples **aplicação de um filtro** a uma entrada que resulta em uma ativação. A aplicação repetida do mesmo filtro a uma entrada resulta em um mapa de ativação chamado de **feature map** que indica as **localizações** e **intensidade** de um recurso detectado em uma entrada, tal como uma imagem.

Os filtros são matrizes que permitem que as *CNNs* identifiquem padrões na imagem,como bordas, formas, texturas, curvas, linhas horizontais e verticais, cantos, cores e partes de um determinado objeto presente na imagem.

![https://imgur.com/MhLsYZb.png](https://imgur.com/MhLsYZb.png)

<br>

## Arquiteturas

Com base na arquitetura das redes neurais convolucionais para reconhecimento de imagens, tornou-se possível, atualmente, uma alta eficiência no treinamento de redes densas de muitas camadas para reconhecimento e classificação de imagens. A arquitetura foi evoluindo ao longo do tempo, tornando-se cada vez mais complexas, precisas e profundas.

### LeNet 5

A primeira aplicação bem sucedida de uma *CNN* foi dada em 1998 por *Yann LeCun*. A *CNN* foi chamada de "*LeNet 5*" e foi capaz de reconhecer dígitos manuscritos com boa velocidade e precisão. A arquitetura consiste em duas partes: um codificador convolucional com duas camadas convolucionais e um bloco denso com três camadas totalmente conectadas. A camada de saída tem 10 dimensões, correspondendo ao número de classes de saída possíveis. A arquitetura *LeNet-5* foi adaptada para reconhecer dígitos para processar depósitos em caixas eletrônicos e ainda é usado em alguns caixas eletrônicos hoje em dia.

![https://imgur.com/rTy2RRN.png](https://imgur.com/rTy2RRN.png)

### AlexNet

Outra arquitetura de rede convolucional popular e que revolucionou
este campo foi a *AlexNet*, projetada por *Alex Krizhevsky*. A *AlexNet*
competiu no Desafio de *Reconhecimento Visual em Grande Escala ImageNet* em 30 de setembro de 2012. Foi a primeira rede neural convolucional a usar várias *GPUs* para acelerar o treinamento e a primeira a usar a função de ativação *ReLU*. A arquitetura consiste em oito camadas, incluindo cinco camadas convolucionais e três camadas totalmente conectadas. A *AlexNet* foi um marco importante no desenvolvimento de redes neurais convolucionais profundas e ajudou a impulsionar o campo do aprendizado profundo.

![https://imgur.com/1oH5Isu.png](https://imgur.com/1oH5Isu.png)

### VGG

A arquitetura *VGG* se destaca por sua simplicidade e eficácia. A arquitetura *VGG* consiste de uma rede sequencial composta por um caminho simples, ou seja, sua estrutura era linear e formada por diferentes camadas convolucionais e de *pooling*, seguidas por camadas totalmente conectadas. A *VGG* é composta por várias camadas convolucionais com filtros pequenos (3x3) e profundidade crescente, seguidas por camadas de *pooling*. 

A arquitetura *VGG* é capaz de obter resultados de alta precisão em tarefas de processamento de imagem, como classificação de imagens e detecção de objetos, mas é mais lenta e requer mais recursos computacionais do que outras arquiteturas mais recentes.

![https://imgur.com/3Nk5voB.png](https://imgur.com/3Nk5voB.png)

### ResNet

A arquitetura *ResNet* introduziu o conceito de conexões residuais. O objetivo das conexões residuais é permitir que as redes neurais profundas sejam treinadas com mais facilidade, evitando o problema de dissipação do gradiente. A ResNet é composta por várias camadas residuais, que permitem que as informações sejam transmitidas diretamente de uma camada para outra, sem passar por várias camadas intermediárias. Cada camada residual é composta por duas camadas convolucionais, seguidas por uma conexão residual. A conexão residual é uma adição simples entre a entrada da camada residual e a saída da camada convolucional anterior. A *ResNet* é uma arquitetura de CNN muito profunda, com mais de 100 camadas, que é capaz de obter resultados de alta precisão em tarefas de processamento de imagem, como classificação de imagens e detecção de objetos.

![https://imgur.com/c5Hrpdf.png](https://imgur.com/c5Hrpdf.png)

<br>

## Conclusão

Em resumo, as Redes Neurais Convolucionais (*CNNs*) são uma categoria de Redes Neurais Artificiais Densas, que apresentam resultados altamente satisfatórios em muitos problemas das quais podem ser aplicadas. Este primeiro artigo teve como foco uma abordagem introdutória sobre as principais arquiteturas de *CNNs* e uma visão geral sobre o que são essas redes.

<br><center><i>Obrigado pela leitura!</i></center>