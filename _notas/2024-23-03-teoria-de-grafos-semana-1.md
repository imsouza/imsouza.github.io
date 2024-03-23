---
layout: note
title: "Resumo de Teoria de Grafos Semana #1"
author: "Mateus Almeida"
categories: [notas]
tags: [Teoria de Grafos]
---

- **Grafo trivial**: aquele com um único vértice (n=1) e nenhuma aresta.
- **Grafo nulo**: aquele cujo conjunto de vértices é vazio.
- **Grafo simples**: grafos que não possuem laços ou arestas múltiplas.
- **Laços**: uma aresta é chamada de laço se seu vértice de partida é o mesmo que o de chegada. ou seja, a aresta conecta o vértice a ele mesmo.
- **Grau**: o grau de um vértice V é o número de arestas que incidem V (laços são contados duas vezes).
- **Digrafo**: grafo direcionado, possui grau de entrada e saída.
- **Aresta múltipla / paralela**: um grafo que possui arestas múltiplas é chamado de multigrafo. Tratase de um tipo de grafo que permite mais de uma aresta conectando o mesmo par de vértices.

- **Vértice universal**: quando está conectado por arestas a todos os demais vértices. Temos que o grau de um vértice úniversal é n-1.

- **Grau mínimo / máximo**: é denotado por δ(G) e Δ(G):

  - δ(G) = mín { d(v) = v ∈ V(G) }.

  - Δ(G) = máx { d(v) = v ∈ V(G) }.

- **Grau médio**: é denotado por $$\Gamma(G) = \frac{1}{\left| \\V(G) \right|}\sum_{v \in V}^{}d(v)$$.
- **Teorema 1**: em qualquer grafo simples G temos que $$\sum_{v \in V}^{}d(v) = 2\left|E \right|$$.
- **Lema 1**: todo grafo não direcionado têm um número par de vértices de grau ímpar (arestas).
