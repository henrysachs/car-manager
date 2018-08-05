Vorraussetzung
Node js Npm 

npm init 
npm install express body-parser
npm install -D nodemon

http://localhost:5000/hello im browser

nodemon erlaubt den "Hot reload" wenn änderung am code => server neustart
nodemon KANN global installiert werden dann kann man den server starten 
nodemon server js
durch installation mit -d geht aber auch 
./node_modules/nodemon/bin/nodemon.js server.js
damit der pfad nicht so lang ist kann man in npm scripte hinterlegen und diese mit npm run aufrufen
in unserem fall könnte scripts so aussehen
  "scripts": {
    "start": "node server.js",
    "server": "./node_modules/nodemon/bin/nodemon.js server.js"
  },
dann kann der server mit npm run server gestartet werden
in step 1 ist die Datenbank lediglich "in memory" heißt bei jedem neustart verliert sie ihren Zustand deshalb benötigt man eine Datenbank die in Step 2 angebunden wird.