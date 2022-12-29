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
	border: 3.5px solid #353535;
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
  background-color: rgba(0, 0, 0, 0.5);
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
  font-size: 60%;
  position: relative;
  transform: translateY(-10%);
  opacity: 0;
  visibility: hidden;
  color: white;
  transition: all 0.3s ease-in-out;
}

.category {
  text-align: center;
  font-size: 8px;
  padding: 2% 5% 2% 2%;
  background-color: #353535;
  top: 2.3%;
  transform: translateY(-10%);
  position: absolute;
  opacity: 0;
  font-weight: bolder;
  visibility: hidden;
  color: white;
  text-align: center;
}

.overlay:hover, .overlay:active {
-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-user-select: none;
-webkit-touch-callout: none /
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
-->

<section class="portfolio">  
  <div class="showcase">
    <a href="https://github.com/imsouza/account-balance" aria-haspopup="true" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
    <a href="https://github.com/imsouza/account-balance" target="_blank" onclick="" class="item">
      <img src="/assets/portfolio/verificador.png" alt=""  class="img">
      <div class="overlay">
        <p class="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          <i class="fa-solid fa-up-right-from-square"></i>
        </p>
        <p class="text category">
          <i class="fa-solid fa-code"></i>&nbsp;Desenvolvimento Web
        </p>
      </div>
    </a>
  </div>
</section>