---
layout: default
title: "Sobre"
author: "Mateus Almeida"
permalink: /
---

<style>
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css')
</style>

<style>
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}


.skills-bar-container {
  position: absolute;
  width: 40%;
  min-width: 300px;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  list-style: none;
}
.skills-bar-container li {
  position: relative;
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
.skills-bar-container li .progressbar-title {
  color: #9e9e9e;
}
.skills-bar-container li .progressbar-title h3 {
  display: inline-block;
}
.skills-bar-container li .progressbar-title .percent {
  position: absolute;
  right: 5px;
}
.skills-bar-container li .bar-container {
  background: #fff;
  position: relative;
  width: 100%;
  height: 5px;
  margin-top: 5px;
  display: block;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
}
.skills-bar-container li .bar-container .progressbar {
  position: absolute;
  width: 0%;
  height: 100%;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.skills-bar-container li .bar-container #progress-html {
  -webkit-animation-name: progress-html;
  animation-name: progress-html;
  -webkit-animation-delay: 0.7s;
  animation-delay: 0.7s;
}
.skills-bar-container li .bar-container #progress-css {
  -webkit-animation-name: progress-css;
  animation-name: progress-css;
  -webkit-animation-delay: 1.4s;
  animation-delay: 1.4s;
}
.skills-bar-container li .bar-container #progress-javascript {
  -webkit-animation-name: progress-javascript;
  animation-name: progress-javascript;
  -webkit-animation-delay: 2.1s;
  animation-delay: 2.1s;
}
.skills-bar-container li .bar-container #progress-php {
  -webkit-animation-name: progress-php;
  animation-name: progress-php;
  -webkit-animation-delay: 2.8s;
  animation-delay: 2.8s;
}
.skills-bar-container li .bar-container #progress-angular {
  -webkit-animation-name: progress-angular;
  animation-name: progress-angular;
  -webkit-animation-delay: 3.5s;
  animation-delay: 3.5s;
}

.progressred {
  background-color: #353535;
}

.progressblue {
  background-color: #353535;
}

.progresspurple {
  background-color: #353535;
}

.progressorange {
  background-color: #353535;
}

.progressgreen {
  background-color: #353535;
}

@-webkit-keyframes progress-html {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-webkit-keyframes progress-css {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}
@-webkit-keyframes progress-javascript {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}
@-webkit-keyframes progress-php {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}
@-webkit-keyframes progress-angular {
  0% {
    width: 0%;
  }
  100% {
    width: 65%;
  }
}
@-moz-keyframes progress-html {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@-moz-keyframes progress-css {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}
@-moz-keyframes progress-javascript {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}
@-moz-keyframes progress-php {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}
@-moz-keyframes progress-angular {
  0% {
    width: 0%;
  }
  100% {
    width: 65%;
  }
}
@keyframes progress-html {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
@keyframes progress-css {
  0% {
    width: 0%;
  }
  100% {
    width: 90%;
  }
}
@keyframes progress-javascript {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}
@keyframes progress-php {
  0% {
    width: 0%;
  }
  100% {
    width: 55%;
  }
}
@keyframes progress-angular {
  0% {
    width: 0%;
  }
  100% {
    width: 65%;
  }
}
</style>

<div class="tags-header">
  <div>&nbsp;</div>
  <h2 class="tags-header-title">{{ page.title }}&nbsp;</h2>
  <div class="tags-header-line"></div>
</div>

<p align="justify">
Me chamo Mateus Almeida, tenho 23 anos e sou da cidade de São Mateus, localizada no norte do estado do Espírito Santo. Sou estudante de Ciência da Computação na UFES onde realizo projetos de pesquisa, especificamente na área de aprendizado de máquina e análise de séries temporais. Além disso, meus interesses incluem Inteligência Artificial, Deep Learning, Visão Computacional, Teoria da Computação, Matemática e Otimização.
<br>
<br>
Acredito na importância da colaboração e da troca de conhecimentos na comunidade tecnológica e estou sempre em busca de novas oportunidades de crescimento e aprendizado. Se você quiser entrar em contato comigo, sinta-se à vontade para me enviar uma mensagem ou se conectar comigo em minhas redes sociais. 
</p>

<a href="/assets/cv/Curriculo.pdf" download class="top" style="padding-top: 1.3%; padding-bottom: 1.3%; padding-left: 1%; padding-right: 1%;border-color: #353535; border: 2px solid #353535; font-size: 10px; color: #353535">Download CV</a>

<center>
<a toggle="tooltip" data-placement="top" title="Github" href="https://github.com/imsouza" target="_blank" style="color: #353535;" alt="github"><i class="fa-brands fa-github"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a toggle="tooltip" data-placement="top" title="Linkedin" href="https://www.linkedin.com/in/mateus-almeida-de-souza/" target="_blank" style="color: #353535;" alt="linkedin"><i class="fa-brands fa-linkedin"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a toggle="tooltip" data-placement="top" title="E-mail" href="mailto:mateusalmeida0715@gmail.com" target="_blank" style="color: #353535;" alt="email"><i class="fa-solid fa-envelope"></i></a>&nbsp;&nbsp;&nbsp;&nbsp;<a toggle="tooltip" data-placement="top" title="RSS" href="https://imsouza.github.io/feed.xml" target="_blank" style="color: #353535;" alt="rss"><i class="fa-solid fa-square-rss"></i></a>
</center>

<br>