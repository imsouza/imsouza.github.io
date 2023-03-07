---
layout: default
title: "Projetos"
author: "Mateus Almeida"
permalink: /projetos/
---

<script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css')
</style>

<style>
.portfolio {
  font-family: monospace; 
}

.heading {
  text-align: center;
}

.heading::after {
  content: "";
  display: block;
  height: 0.13em;
  width: 2.75em;
  margin: 0.08em auto 0 auto;
  background-color: #222;
}

.showcase {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  width: 95%;
  margin: 3% auto 0 auto;
}

.item {
  display: block;
  position: relative;
  overflow: hidden;
  width: 100%;
  min-width: 300px;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
}

.item:hover .item:active .img {
  filter: blur(2px);
  transform: scale(1.05);
}

.img {
	display: block;
	height: 100%;
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
  transition: all 0.3s ease-in-out;
}

.overlay {
  border: 3.5px solid #353535;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
   
}
.overlay:hover{
  background-color: rgba(0, 0, 0, 0.8);
}
.overlay:hover .text {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
}

.hover_effect {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
}


.text {
  text-align: justify;
  padding-left: 5%;
  padding-right: 5%;
  padding: 0 5% auto 0;
  top: 50%;
  font-size: 65%;
  position: relative;
  transform: translateY(-10%);
  opacity: 0;
  visibility: hidden;
  font-weight: bolder;
  color: white;
  transition: all 0.3s ease-in-out;
}

.category {
  text-align: center;
  font-size: 65%;
  width: 100%;
  padding: 2% 5% 2% 5%;
  background-color: white;
  top: 2.8%;
  transform: translateY(-10%);
  position: absolute;
  opacity: 0;
  font-weight: bolder;
  visibility: hidden;
  color: #353535;
}

.keywords {
  text-align: bottom;
  font-size: 50%;
  padding: 2% 5% 2% 5%;
  transform: translateY(-10%);
  position: absolute;
  top: 85%;
  opacity: 0;
  font-weight: normal;
  visibility: hidden;
  text-align: left;
}

.overlay:hover, .overlay:active {
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-user-select: none;
-webkit-touch-callout: none;
}

@media screen and (max-width: 1200px) {
  .showcase {
    grid-template-columns: auto;
    grid-gap: 20px 0;
    margin-top: 5%;
  }
}
@media screen and (max-width: 600px) {
  .showcase {
    width: 100%;
  }
}

</style>
<script>

document.addEventListener("touchstart", function(){}, true);

</script>

<a id="button"></a>

<div class="tags-header">
  <div>&nbsp;</div>
  <h2 class="tags-header-title">{{ page.title }}</h2>
  <div class="tags-header-line"></div>
</div>

<!--
<i class="fa-solid fa-code"></i>&nbsp;
<i class="fa-solid fa-chart-simple"></i>&nbsp;
<i class="fa-solid fa-chart-line"></i>&nbsp;
<i class="fa-solid fa-circle-nodes"></i>&nbsp;
<i class="fa-solid fa-scroll"></i>&nbsp;
<i class="fa-solid fa-image"></i>&nbsp;
<i class="fa-solid fa-comments"></i>&nbsp;
<i class="fa-solid fa-robot"></i>&nbsp;
<i class="fa-solid fa-brain"></i>&nbsp;
<i class="fa-sharp fa-solid fa-browser"></i>&nbsp;

  Análise Exploratória de Dados
  Machine Learning
  Deep Learning
  Visão Computacional  

<dev style="font-size: 85%; font-weight: bolder;color: crimson;">[EM DESENVOLVIMENTO]</dev><br> 
-->

<section class="portfolio">  
  <div class="showcase">
    <a href="https://colab.research.google.com/github/imsouza/airplane-crash/blob/main/EDA%20-%20Airplane%20Crash.ipynb" aria-haspopup="true" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/airplane.png" alt="Count of crashes by Year" class="img">
      <div class="overlay">
        <p class="text">
          Exploração dos dados de acidentes aéreos mundiais de 1908 a 2009 utilizando técnicas de análise de causalidade e PCA em séries temporais para identificar padrões e tendências relacionadas às fatalidades.
          <br>
          <p class="text keywords">Palavras-chave: Airplane, Time Series, EDA, PCA, Kmeans, Granger Causality</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-chart-line"></i>&nbsp;Análise Exploratória de Dados
        </p>
      </div>
    </a>
    <a href="https://colab.research.google.com/drive/1BF-CC7_g5wiY7XqKjYl65FS5m8bDJhM1?usp=sharing" aria-haspopup="true" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/covid.png" alt="Covid-19 Analysis" class="img">
      <div class="overlay">
        <p class="text">
          Modelo preditivo sobre a evolução da Covid-19 no Espírito Santo, considerando fatores como tendência, sazonalidade, erro, ciclicidade e autocorrelação. O objetivo é obter uma visão aprofundada da evolução da pandemia e seu impacto na região.
          <br>
          <p class="text keywords">Palavras-chave: Time Series, Machine Learning, Covid-19, Previsões</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>
      </div>
    </a>
    <a href="https://colab.research.google.com/drive/1FuTkYHyoYCpWS422nuLF_LcDMjLm2KGb?usp=sharing" onclick="" target="_blank" class="item">
      <img src="/assets/portfolio/beer.png" alt="Beer Analysis" class="img">
      <div class="overlay">
        <p class="text">
          Modelo regressivo para previsão do consumo de cerveja no estado de São Paulo. O objetivo é fornecer uma previsão precisa do consumo de cerveja que possam impactar a demanda levando em consideração os dados de finais de semana, chuva, consumo em litros e temperatura.
          <br>
          <p class="text keywords">Palavras-chave: Regressão Linear, Estatística, Cerveja</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" onclick="" target="_blank" class="item">
      <img src="/assets/portfolio/accb.png" alt="Account balance" class="img">
      <div class="overlay">
        <p class="text">
          Este projeto envolve a criação de um sistema de conta bancária usando o framework Laravel. Ele permitirá aos usuários gerenciar suas finanças de maneira fácil, incluindo funcionalidades como transferências, pagamentos, depósito, saque e visualização de extrato.
          <br>
          <p class="text keywords">Palavras-chave: Laravel, Conta Bancária, CRUD, Sistema</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-desktop"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://colab.research.google.com/drive/1m-pyGCxmjJkQX3n8kalPmBz488aaJLkU?usp=sharing" onclick="" target="_blank" class="item">
      <img src="/assets/portfolio/spellchecker.png" alt="Account balance" class="img">
      <div class="overlay">
        <p class="text"> 
          Criação de um corretor ortográfico que utiliza técnicas de processamento de linguagem natural (NLP) juntamente com a biblioteca NLTK para validar erros ortográficos em textos em língua portuguesa.
          <br>
          <p class="text keywords">Palavras-chave: NLTK, NLP, Spell Checker</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/orus/tree/main_buttons" onclick="" target="_blank" class="item">
      <img src="/assets/portfolio/stock.png" alt="Account balance" class="img">
      <div class="overlay">
        <p class="text">
          Sistema de gerenciamento de estoque e clientes utilizando o framework Electron. Ele permitirá aos administradores gerenciar o estoque de maneira fácil, incluindo funcionalidades como CRUD de produto, CRUD de clientes e análise de dados.  
          <br>
          <p class="text keywords">Palavras-chave: Electron, Estoque, CRUD, Sistema</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-desktop"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
  </div>
</section>




<style>
#button {
  display: inline-block;
  background-color: #333;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color .3s, 
    opacity .5s, visibility .5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1000;
}
#button::after {
  content: "\f077";
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  font-size: 2em;
  line-height: 50px;
  color: #fff;
}
#button:hover {
  cursor: pointer;
  background-color: #333;
}
#button:active {
  background-color: #555;
}
#button.show {
  opacity: 1;
  visibility: visible;
}
</style>

<script>
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
</script>