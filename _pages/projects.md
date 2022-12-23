---
layout: post
title: "Projects"
author: "Mateus Almeida"
permalink: /projects/
---

<style>
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 95%;
  margin: 3% auto 0 auto;
}

.item {
  display: block;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.3);
}

.item:hover .img {
  filter: blur(2px);
  transform: scale(1.05);
}

.img {
	border: 5px solid #353535;
	display: block;
	height: 100%;
	width: 100%;
	-o-object-fit: cover;
	object-fit: cover;
  	transition: all 0.3s ease-in-out;
}

.overlay {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
}
.overlay:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
.overlay:hover .text {
  opacity: 1;
  visibility: visible;
  transform: translateY(-50%);
  transition: all 0.5s ease-in-out;
}

.text {
  padding: 0 10%;
  font-size: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  visibility: hidden;
  color: white;
  text-align: center;
  transition: all 0.3s ease-in-out;
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


<section class="portfolio">  
  <div class="showcase">
    <a href="https://codepen.io/imsouza/pen/OJMMgLx" target="_blank" class="item">
      <img src="/assets/portfolio/resistor.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Calculadora gráfica de resistores de 4, 5 e 6 bandas.
        </p>
      </div>
    </a>

    <a href="https://codepen.io/imsouza/full/jOWWmez" target="_blank" class="item">
      <img src="/assets/portfolio/jogodavelha.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Um simples jogo da velha feito em Jquery
        </p>
      </div>
    </a>
    
    <a href="https://codepen.io/imsouza/pen/OJMMmRX" target="_blank" class="item">
      <img src="/assets/portfolio/redesign.png" alt=""   class="img">
      <div class="overlay">
        <p class="text">
          Redesign minimalista do site da Crunchyroll com CSS e Js puro.
        </p>
      </div>
    </a>
    

    <a href="https://osorvetao.netlify.app" target="_blank" class="item">
      <img src="/assets/portfolio/sorvete.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Site estático criado para sorveteria OSorvetão - MA.
        </p>
      </div>
    </a>
    
    
    <a href="https://github.com/imsouza/products-crud" target="_blank" class="item">
      <img src="/assets/portfolio/crud.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Um simples CRUD feito em Laravel para gerenciamento de estoque. 
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/account-balance" target="_blank" class="item">
      <img src="/assets/portfolio/acc.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Sistema de gerenciamento financeiro feito em Laravel.
        </p>
      </div>
    </a>
    
    <a href="https://minimal-template.netlify.app" target="_blank" class="item">
      <img src="/assets/portfolio/template.png" alt=""   class="img">
      <div class="overlay">
        <p class="text">
          Uma simples template de site pessoal para portfólio.
        </p>
      </div>
    </a>
    
    <a href="https://github.com/imsouza/minesweeper" target="_blank" class="item">
      <img src="/assets/portfolio/mines.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Um jogo de campo minado escrito na linguagem C. 
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/verificador-ortografico" target="_blank" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Software que realiza a verificação ortográfica de arquivos de texto com base em um dicionário de dados. 
        </p>
      </div>
    </a>
    
    <a href="https://github.com/imsouza/rbtree-set" target="_blank" class="item">
      <img src="/assets/portfolio/red.png" alt=""   class="img">
      <div class="overlay">
        <p class="text">
          Uma aplicação que realiza operações matemáticas com conjuntos utilizando uma Árvore Rubro-Negra Genérica em C.
        </p>
      </div>
    </a>
    
    <a href="https://github.com/imsouza/bplustree-crud" target="_blank" class="item">
      <img src="/assets/portfolio/bp.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Implementação de uma Árvore B+ em disco para o tratamento de dados de artigos científicos usando a linguagem C.
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/functional-atm" target="_blank" class="item">
      <img src="/assets/portfolio/atm.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Uma aplicação feita utilizando o paradigma funcional do Python para simular um ATM.
        </p>
      </div>
    </a>
    
    <a href="https://github.com/imsouza/photux" target="_blank" class="item">
      <img src="/assets/portfolio/sat.png" alt=""   class="img">
      <div class="overlay">
        <p class="text">
          Uma aplicação que realiza o processamento e aplicação de filtros convolucionais em imagem em C usando o OpenGL + GLUT. 
        </p>
      </div>
    </a>
    
    <a href="https://github.com/imsouza/cyshell" target="_blank" class="item">
      <img src="/assets/portfolio/cyshell.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Uma aplicação que simula o shell iterativo do Python em C para avaliação e cálculo de expressões numéricas.
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/generic-transpiler" target="_blank" class="item">
      <img src="/assets/portfolio/compiler.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
        	Um transpiler feito na linguagem C++ utilizando o Boost Spirit como principal biblioteca. Compila uma linguagem genérica (.g) gerando um código de saída em C++ (.cpp).
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/string-set" target="_blank" class="item">
      <img src="/assets/portfolio/trie.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Implementação de uma Árvore Trie para o processamento de cadeias de prefixos e caracteres em ASCII.
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/pentest-tools" target="_blank" class="item">
      <img src="/assets/portfolio/pentest.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Coleção de ferramentas escritas em Python para auditoria de rede.
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/numerical-algorithms" target="_blank" class="item">
      <img src="/assets/portfolio/alg.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Coleção de algoritmos númericos implementados na linguagem C.
        </p>
      </div>
    </a>

    <a href="https://github.com/imsouza/mochila-binaria" target="_blank" class="item">
      <img src="/assets/portfolio/mochila.png" alt="" class="img">
      <div class="overlay">
        <p class="text">
          Problema da Mochila (knapsack problem) resolvido para o projeto TEP de Prog II para o curso de Engenharia de Produção.
        </p>
      </div>
    </a>

  </div>
</section>


