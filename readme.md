https://github.com/ynovzelab/ci-cd-ex1

// intialisation project node : npm init
// installation de TS : npm i --save-dev typescript
// Config TS : npx tsc --init
// installation de sass : npm i sass
// installation de prettier : npm install --save-dev prettier
// installation de lint : npm install eslint 
// intialisation eslint : npx eslint --init

// Lisibilité : prettier 
// Qualité : Lint
// Transpilation : TS / SASS
... test unitaire : Jest

// Mise en ligne sur une plateforme : Render 
// build : transpiler, controller, vérifier (ts, lint, prettier)
// npm run start 
// variables d'env => à mettre dans le .gitignore
// dist => dans le .gitignore
// Versionner dans un repo : avec deux branches : main et development
// Mise en ligne sur render 
// Déclencher une mise en ligne à l'aide d'un pull request de dev => main

  "scripts": {
    "dev": "nodemon ./dist/app.js",
    "sass:watch": "sass --watch ./src/styles:./public/css",
    "sass:build": "sass ./src/styles:./public/css",
    "start": "node ./dist/app.js",
    "tsc:build": "tsc",
    "ts:watch": "tsc --watch",
    "prettier:fix": "prettier --write ./src/**/*.ts",
    "prettier:check": "prettier --check ./src/**/*.ts",
    "lint": "eslint src --ext .ts",
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npm run tsc:build && npm run sass:build && npm run prettier:check && npm run lint"
  },