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
        {% for project in site.data.projects %}
            <a href="{{ project.url }}" aria-haspopup="true" target="_blank" onclick="" class="item">
              <p class="category">
                <i class="{{ project.icon }}"></i>&nbsp;{{ project.category }}
              </p>
              <img src="{{ project.image }}" alt="{{ project.alt }}" class="img">
              <div class="overlay">
                <p class="text">
                  {{ project.description }}
                  <br>
                  <p class="text keywords">Palavras-chave: {{ project.keywords }}</p>
                </p>
              </div>
            </a>
        {% endfor %}
      </div>
    </section>
  <script src="{{ '/assets/js/button.js' | relative_url }}"></script>
</body>
</html>
