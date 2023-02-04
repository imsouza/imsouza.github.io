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

<div class="tags-header">
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

  Insights
  Machine Learning
  Deep Learning
  Visão Computacional  
-->

<section class="portfolio">  
  <div class="showcase">
    <a href="https://colab.research.google.com/github/imsouza/airplane-crash/blob/main/EDA%20-%20Airplane%20Crash.ipynb" aria-haspopup="true" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/pca.png" alt="Count of crashes by Year" class="img">
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
    <a href="#" aria-haspopup="true" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/covid.png" alt="Covid-19 Analysis" class="img">
      <div class="overlay">
        <p class="text">
          [EM DESENVOLVIMENTO]
          <br>
          Modelo preditivo sobre a evolução da Covid-19 no Espírito Santo, considerando fatores como tendência, sazonalidade, erro, ciclicidade e autocorrelação. O objetivo é obter uma visão aprofundada da evolução da pandemia e seu impacto na região.
          <br>
          <p class="text keywords">Palavras-chave: Time Series, Machine Learning, Covid-19, Previsões</p>
        </p>
        <p class="text category">
          <i class="fa-solid fa-robot"></i>&nbsp;Machine Learning
        </p>
      </div>
    </a>
  </div>
</section>
