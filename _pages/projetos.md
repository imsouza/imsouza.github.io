---
layout: default
title: "Projetos"
author: "Mateus Almeida"
permalink: /projetos/
---

<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css">
  <link rel="stylesheet" href="{{ '/assets/css/projetos.css' | relative_url }}">
  <link rel="stylesheet" href="{{ '/assets/css/button.css' | relative_url }}">
</head>
<body>
  <a id="button"></a>
  <div class="tags-header">
    <div>&nbsp;</div>
    <h2 class="tags-header-title">{{ page.title }}</h2>
    <div class="tags-header-line"></div>
  </div>

  <section class="portfolio">  
    <div class="showcase">
      <a href="https://colab.research.google.com/github/imsouza/airplane-crash/blob/main/EDA%20-%20Airplane%20Crash.ipynb" aria-haspopup="true" target="_blank" onclick="" class="item">
        <p class="category">
          <i class="fa-solid fa-chart-line" ></i>&nbsp;Análise Exploratória de Dados
        </p>
        <img src="/assets/portfolio/airplane.svg" alt="Count of crashes by Year" class="img">
        <div class="overlay">
          <p class="text">
            Exploração dos dados de acidentes aéreos mundiais de 1908 a 2009 utilizando técnicas de análise de causalidade e PCA em séries temporais para identificar padrões e tendências relacionadas às fatalidades.
            <br>
            <p class="text keywords">Palavras-chave: Airplane, Time Series, EDA, PCA, Kmeans, Granger Causality</p>
          </p>
        </div>
      </a>
      <a href="https://colab.research.google.com/drive/1BF-CC7_g5wiY7XqKjYl65FS5m8bDJhM1?usp=sharing" aria-haspopup="true" target="_blank" onclick="" class="item">
        <p class="category">
          <i class="fa-solid fa-flask"></i>&nbsp;Ciência de Dados
        </p>
        <img src="/assets/portfolio/covid.svg" alt="Covid-19 Analysis" class="img">
        <div class="overlay">
          <p class="text">
            Modelo preditivo sobre a evolução da Covid-19 no Espírito Santo, considerando fatores como tendência, sazonalidade, erro, ciclicidade e análise de grafos. O objetivo é obter uma visão aprofundada da evolução da pandemia e seu impacto na região.
            <br>
            <p class="text keywords">Palavras-chave: Time Series, Machine Learning, Covid-19, Previsões</p>
          </p>
        </div>
      </a>
      <a href="https://colab.research.google.com/drive/1FuTkYHyoYCpWS422nuLF_LcDMjLm2KGb?usp=sharing" onclick="" target="_blank" class="item">
        <p class="category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>      
        <img src="/assets/portfolio/beer.svg" alt="Beer Analysis" class="img">
        <div class="overlay">
          <p class="text">
            Modelo regressivo para previsão do consumo de cerveja no estado de São Paulo. O objetivo é fornecer uma previsão precisa do consumo de cerveja que possam impactar a demanda levando em consideração os dados de finais de semana, chuva, consumo em litros e temperatura.
            <br>
            <p class="text keywords">Palavras-chave: Regressão Linear, Estatística, Cerveja</p>
          </p>
        </div>
      </a>
      <a href="https://github.com/imsouza/account-balance" onclick="" target="_blank" class="item">
        <p class="category">
          <i class="fa-solid fa-desktop"></i>&nbsp;Desenvolvimento Web
        </p>
        <img src="/assets/portfolio/accb.svg" alt="Account balance" class="img">
        <div class="overlay">
          <p class="text">
            Este projeto envolve a criação de um sistema de conta bancária usando o framework Laravel. Ele permitirá aos usuários gerenciar suas finanças de maneira fácil, incluindo funcionalidades como transferências, pagamentos, depósito, saque e visualização de extrato.
            <br>
            <p class="text keywords">Palavras-chave: Laravel, Conta Bancária, CRUD, Sistema</p>
          </p>
        </div>
      </a>
      <a href="https://colab.research.google.com/drive/1m-pyGCxmjJkQX3n8kalPmBz488aaJLkU?usp=sharing" onclick="" target="_blank" class="item">
        <p class="category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>
        <img src="/assets/portfolio/spellchecker.svg" alt="NLP" class="img">
        <div class="overlay">
          <p class="text"> 
            Criação de um corretor ortográfico que utiliza técnicas de processamento de linguagem natural (NLP) juntamente com a biblioteca NLTK para validar erros ortográficos em textos em língua portuguesa.
            <br>
            <p class="text keywords">Palavras-chave: NLTK, NLP, Spell Checker</p>
          </p>
        </div>
      </a>
      <a href="https://colab.research.google.com/drive/1HIDFgE819Yovue63iMI2wyicQPWLWMGc?usp=sharing" onclick="" target="_blank" class="item">
        <p class="category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>
        <img src="/assets/portfolio/spotify.svg" alt="Spotify" class="img">
        <div class="overlay">
          <p class="text">
              Sistema de recomendação de músicas utilizando a API do Spotify e algoritmos de clusterização. O objetivo é agrupar as músicas em clusters com base em características semelhantes, permitindo a recomendação com base nas preferências do usuário e nos clusters aos quais as músicas pertencem.
            <br>
            <p class="text keywords">Palavras-chave: Cluster, Spotify, Sistema, Músicas</p>
          </p>
        </div>
      </a>
      <a href="https://colab.research.google.com/drive/1i90wYeYHdOlo-EUXowqtVV3sGElBeYys?usp=sharing" onclick="" target="_blank" class="item">
        <p class="category">
          <i class="fa-solid fa-eye"></i>&nbsp;Visão Computacional
        </p>
        <img src="/assets/portfolio/ocr.svg" alt="Spotify" class="img">
        <div class="overlay">
          <p class="text">
              Este projeto consiste em um sistema de OCR (Optical Character Recognition) capaz de reconhecer texto em imagens. O objetivo principal é extrair informações textuais de imagens, permitindo a busca e processamento desses dados de forma automatizada.
            <br>
            <p class="text keywords">Palavras-chave: OCR, Tesseract, Computer Vision</p>
          </p>
        </div>
      </a>
      <a href="https://colab.research.google.com/drive/1lXSatRcg8ojtNG4Ol1y8W6v0s2kunDlP?usp=sharing" onclick="" target="_blank" class="item">
        <p class="category">
          <i class="fa-solid fa-eye"></i>&nbsp;Visão Computacional
        </p>
        <img src="/assets/portfolio/face.svg" alt="Face" class="img">
        <div class="overlay">
          <p class="text">
              Modelo para detecção do uso de máscara que utiliza a abordagem de Aprendizagem de Metricas (Metric Learning) através do Modelo Siamês. Esta solução combina tecnologias para identificar e comparar rostos e determinar se uma máscara está sendo usada ou não.
            <br>
            <p class="text keywords">Palavras-chave: Metric Learning, Siamese Model, Computer Vision, Face Detection</p>
          </p>
        </div>
      </a>
    </div>
  </section>

  <script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
  <script src="{{ '/assets/js/button.js' | relative_url }}"></script>
</body>
</html>
