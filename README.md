# Readdit

Aplicação em React e TypeScript com objetivo de buscar os posts do subreddit [reactjs](https://www.reddit.com/r/reactjs/) no reddit.

## Índice

- [Funcionalidades](#funcionalidades)
- [Principais tecnologias](#principais-tecnologias)
- [Iniciando aplicação](#iniciando-aplicação)
- [Rodando testes](#rodando-testes)

## Funcionalidades

- Lista os posts de 10 em 10, utilizando um botão para buscar os próximos posts.
- Cada post exibe o seu título, thumbnail, tempo de publicação, autor e link do post no reddit.
- O click no autor redireciona para a página do mesmo e o click no link redireciona para o post no reddit.
- 3 tipos diferentes de filtros para os posts: Hot, News e Rising.
- Alternância de temas em um switch sendo eles um tema claro e um escuro, a opção selecionada é guardada no localStorage para ser resgatada em um próximo acesso a página.

## Principais tecnologias

A aplicação foi feita com **React** e **TypeScript**, juntamente com **Styled Components** para estilização de componentes e manipulação de temas na aplicação, em conjunto com o **Axios** para a realização da requisição de obtenção dos posts.

Para a realização tanto de testes unitários quanto testes end-to-end foi utilizado o **Cypress**.

Quanto à hospedagem é usado o **GitHub Pages** ao qual envia o build da aplicação para a branch [gh-pages](https://github.com/leonardolopesinf/readdit/tree/gh-pages) e hospeda o projeto em [leonardolopesinf.github.io/readdit](https://leonardolopesinf.github.io/readdit/).

## Iniciando aplicação

### Npm:

```
$ npm i
$ npm start
```

### Yarn:

```
$ yarn
$ yarn start
```

## Rodando testes

Para a realização dos testes são usados 2 scripts: `test-unit` para testes unitários e `test` para testes end-to-end.

### Npm:

```
$ npm run test
$ npm run test-unit
```

### Yarn:

```
$ yarn test
$ yarn test-unit
```
