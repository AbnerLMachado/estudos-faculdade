# Estudos de Direito · UNIP

Plataforma única de estudos para as provas bimestrais (NP1 e NP2) do curso de Direito.
Em vez de uma página por matéria, um só site: escolha o **semestre**, a **matéria** e o **módulo** (NP1, NP2 ou geral) e estude no visor ao lado.

> Material de estudo compilado e organizado por alunos. Não substitui as aulas, os livros nem as orientações dos professores.

## Como usar

1. Abra o site e escolha o semestre.
2. Escolha a matéria na lista (as que ainda não têm página aparecem como "em breve").
3. Escolha NP1, NP2 ou Geral e clique no material (guia de estudos, simulado, banco de questões, mapa mental).
4. Cada endereço do site pode ser compartilhado: o link guarda o semestre, a matéria e o material escolhidos.

## Como o conteúdo é organizado

Tudo sai de um catálogo único em `ferramentas/catalogo-fonte.js`. Para incluir uma página nova, acrescente uma linha e rode:

```
node ferramentas/gerar-catalogo.js
```

Isso atualiza `conteudo/catalogo.json` e `catalogo.js`, que o site lê. Não há servidor, banco de dados nem login.

## Publicação

Site estático publicado pelo GitHub Pages (gratuito), a partir da branch `main`.
