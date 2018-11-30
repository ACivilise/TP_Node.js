TP_NodeJS
Installation de typescript :
npm install -g typescript
installation du nest cli :
npm i -g @nestjs/cli
installation de nodemon
npm install -g nodemon
Creation d’un nouveau projet nest
nest new project-name
cd project
Restore les packages
npm install
lance l’application server avec nodemon
nodemon --exec npm start

Il existe différent iew engine pour express : hbs, ejs, angular
main.ts
The entry file of the application. It uses NestFactory to create the Nest application instance.
app.module.ts
Defines AppModule, the root module of the application.
app.controller.ts
Basic controller sample with a single route.

expressjs : https://expressjs.com/fr/ : Infrastructure Web minimaliste, souple et rapide pourNode.js
nodemon : Monitor for any changes in your node.js application and automatically restart the server - perfect for development http://nodemon.io/
prettier : An opinionated code formatter
Ajouter un controller : nest g controller cats
Ajouter un service : nest g service cats/cats

https://docs.nestjs.com

intérêts des middleware : crypter des données;les id etc

npm init
Création de package.json
npm install --save @types/express
npm install --save @types/errorhandler
npm install express --save
npm run build
npm start


With ejs you can have
<% code %>
... which is code that is evaluated but not printed out.
<%= code %>
... which is code that is evaluated and printed out (escaped).
<%- code %>
... which is code that is evaluated and printed out (not escaped).
Since you want to print your variable and NOT escape it, your code would be the last type (with the -<%). In your case:
<%- my_form_content %>




