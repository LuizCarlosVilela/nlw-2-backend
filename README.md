
# ***Proffy Back-end***

<h1 align=center>
  <img src="assets/img/Banner.PNG" alt="Proffy Banner"/>
</h1>

<div align="center">

![MIT][mit] ![Node_Badge][node_version_badge] ![Npm_Badge][npm_version_badge] ![React_Badge][web_react_badge] ![React_Native_Badge][mobile_react-native_badge] ![NodeJS_Badge][server_nodejs_badge] [![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)
  <a href="https://rocketseat.com.br" target="_blank">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
  </a>
  
  <a href="https://www.linkedin.com/in/luiz-carlos-vilela" target="_blank"> 
    <img src="https://img.shields.io/badge/Developer-Luiz%20Carlos-brightgreen?style=flat&logo=Linkedin&logoColor=white" alt="Developer link" />
  </a>
</div>

<h3 align=center>
  
:books:
Proffy é um projeto **Open Source** desenvolvido na semana **Next Level Week (2.0)** da **[Rocketseat][rocketseat_site]** utilizando as tecnologias ***TypeScript, Node, React e React Native***.

</h3>

<h1 align=center>
  <img src="assets/img/LogoBack.png" alt="Proffy Back-end"/>
</h1>

## **:rocket: OBJETIVO**

<p align=justify> 
O projeto tem como finalidade <strong>estabelecer uma conexão</strong> entre os <strong>professores</strong> (Proffys) e os <strong>alunos</strong> que desejam um professor com qualificação para dar orientações e aulas sobre determinada matéria. Solucionando então um <strong>problema de comunicação</strong> entre <strong>professores</strong> que queira dar aulas, e <strong>alunos</strong> que desejam um professor para orientar nos <strong>estudos em diversas áreas</strong>.
</p>

## **:computer: TECNOLOGIAS**

#### **Server** ([NodeJS][node] + [TypeScript][typescript])

  - **[Express][express]**
  - **[CORS][cors]**
  - **[KnexJS][knex]**
  - **[SQLite][sqlite3]**
  - **[ts-node][tsnode]**
  - **[dotENV][dotenv]**

  Arquivo json do Back-end <kbd>[package.json](https://github.com/LuizCarlosVilela/nlw-2-backend/blob/master/package.json)</kbd>
 

#### **Utilitários**

- Protótipo: **[Figma](https://www.figma.com/)** &rarr; **<kbd>[Protótipo (Proffy)](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/Proffy-Web/duplicate)</kbd>**
- Editor: **[Visual Studio Code][vscode]** &rarr; Extensions: **<kbd>[SQLite][vscode_sqlite_extension]</kbd>**
- Markdown: **[StackEdit][stackedit]**, **<kbd>[Markdown Emoji][markdown_emoji]</kbd>**
- Commit Conventional: **[Commitlint][commitlint]**
- Teste de API: **[Insomnia][insomnia]**
- Ícones: **[Feather Icons][feather_icons]**, **[Font Awesome][font_awesome]**
- Fontes: **[Archivo][font_archivo]**, **[Poopins][font_poopins]**
  
## **:wine_glass: COMO UTILIZAR**

### Configurações Iniciais

Primeiro, você precisa ter o <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd> instalado na sua máquina. 

Se você estiver utilizando o **Linux**, você pode optar por instalar o **Node** através do gerênciador de versões <kbd>[asdf]</kbd> para facilitar o processo de mudança da versão do **Node**, quando for necessário.

Você pode optar também por utilizar o **yarn** no lugar do **npm**. Você pode instalar clicando nesse <kbd>[link][yarn]</kbd>, ou através do <kbd>[asdf]</kbd>.

Instale as dependências contidas nos arquivos `package.json` que se encontram na raíz do repositório (para o gerenciamento de commits), no diretório do **server**. Para instalar as dependências, basta abrir o terminal no diretório e digitar o comando:

```sh
$ npm install

# ou
$ yarn
```

Exemplos:
```sh
# Instalando as dependências do commitlint:
$ cd ./proffy
$ npm install

# Instalando as dependências do server:
$ cd ./sources/server
$ npm install

```

Veja os arquivos **`package.json`** do <kbd>[commitlint](./package.json)</kbd>, <kbd>[server](https://github.com/LuizCarlosVilela/nlw-2-backend/blob/master/package.json)</kbd>, <kbd>[website](https://github.com/LuizCarlosVilela/nlw-2-web/blob/master/package.json)</kbd> e <kbd>[mobile](https://github.com/LuizCarlosVilela/nlw-2-mobile/blob/master/package.json)</kbd>.

### Utilizando o Server

```sh
# Abrindo o terminal no diretório do servidor:
$ cd ./sources/server

# Executando a aplicação em modo de desenvolvimento:
$ npm run dev

# Instanciando o banco de dados:
$ npm run knex:migrate

# Povoando o banco de dados (seeds):
$ npm run knex:seed
```

> Veja a parte de **scripts {}** do arquivo <kbd>[package.json](https://github.com/LuizCarlosVilela/nlw-2-backend/blob/master/package.json)</kbd> para saber quais scripts estão disponíveis.

## **:books: REFERÊNCIAS**

- [Blog Rocketseat](https://blog.rocketseat.com.br/)
- [ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs/home.html)
- [Expo](https://expo.io/learn)
- [Knex][knex]
- [Express](https://expressjs.com/pt-br/)
- [Node](https://nodejs.org/en/)

## **:page_with_curl: LICENÇA**

Este repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<h2 align="center">Feito com ❤️ por <a href="https://www.linkedin.com/in/luiz-carlos-vilela/">Luiz Carlos Vilela</a></h2>

<!-- Website Links -->

[rocketseat_site]: https://rocketseat.com.br/

<!-- Badges -->

[mit]: https://img.shields.io/badge/license-MIT-brightgreen

[github_issues_badge]: https://img.shields.io/github/issues/marcospbrandao/ecoleta?color=green

[repository_license_badge]: https://img.shields.io/github/license/marcospbrandao/ecoleta

[node_version_badge]: https://img.shields.io/badge/node-12.17.0-green

[npm_version_badge]: https://img.shields.io/badge/npm-6.14.4-red

[web_react_badge]: https://img.shields.io/badge/web-react-blue

[mobile_react-native_badge]: https://img.shields.io/badge/mobile-react%20native-blueviolet

[server_nodejs_badge]: https://img.shields.io/badge/server-nodejs-important

<!-- Techs -->

[react]: https://reactjs.org/

[typescript]: https://www.typescriptlang.org/

[node]: https://nodejs.org/en/

[leaflet]: https://react-leaflet.js.org/en/

[vscode]: https://code.visualstudio.com/

[react_native]: http://www.reactnative.com/

[stackedit]: https://stackedit.io

[vscode_sqlite_extension]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite

[markdown_emoji]: https://gist.github.com/rxaviers/7360908

[commitlint]: https://github.com/conventional-changelog/commitlint

[express]: https://expressjs.com/

[cors]: https://expressjs.com/en/resources/middleware/cors.html

[knex]: http://knexjs.org/

[sqlite3]: https://github.com/mapbox/node-sqlite3

[tsnode]: https://github.com/TypeStrong/ts-node

[feather_icons]: https://feathericons.com/

[insomnia]: https://insomnia.rest/

[react_leaflet]: https://react-leaflet.js.org/

[react_router_dom]: https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom

[react_icons]: https://react-icons.github.io/react-icons/

[axios]: https://github.com/axios/axios

[dotenv]: https://github.com/motdotla/dotenv

[expo]: https://expo.io/

[expo_google_fonts]: https://github.com/expo/google-fonts

[react_navigation]: https://reactnavigation.org/

[expo_constants]: https://docs.expo.io/versions/latest/sdk/constants/

[react_native_svg]: https://github.com/react-native-community/react-native-svg

[expo_location]: https://docs.expo.io/versions/latest/sdk/location/

[expo_mail_composer]: https://docs.expo.io/versions/latest/sdk/mail-composer/

[font_archivo]: https://fonts.google.com/specimen/Archivo

[font_poopins]: https://fonts.google.com/specimen/Poppins

[font_awesome]: https://fontawesome.com/

[multer]: https://github.com/expressjs/multer

[celebrate]: https://github.com/arb/celebrate

[joi]: https://github.com/hapijs/joi

[react_dropzone]: https://github.com/react-dropzone/react-dropzone

[asdf]: https://github.com/asdf-vm/asdf

[yarn]: https://classic.yarnpkg.com/en/docs/install/#debian-stable
