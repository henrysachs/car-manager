# Wie erstelle ich eine API

## Vorraussetzung

Node js > 8
Npm > 5
Express framework

``` bash
npm init
npm install express body-parser
npm install -D nodemon
```

oder

```bash
git clone https://github.com/henrysachs/car-manager.git
npm install
```

Postman zum apiaufruf

http://localhost:5000/hello im browser

nodemon erlaubt den "Hot reload" wenn änderung am code => server neustart
nodemon KANN global installiert werden dann kann man den server starten 
nodemon server js
durch installation mit -d geht aber auch 
./node_modules/nodemon/bin/nodemon.js server.js
damit der pfad nicht so lang ist kann man in npm scripte hinterlegen und diese mit npm run aufrufen
in unserem fall könnte scripts so aussehen

 ``` json
 "scripts": {
    "start": "node server.js",
    "server": "./node_modules/nodemon/bin/nodemon.js server.js"
  }
```

dann kann der server mit npm run server gestartet werden
in step 1 ist die Datenbank lediglich "in memory" heißt bei jedem neustart verliert sie ihren Zustand deshalb benötigt man eine Datenbank die in Step 2 angebunden wird.

## Deployment

Das deployment geschieht auf Heroku, da dies eine schnelle kostenlose möglichkeit ist seine api zu testen. Hierfür benötigen wir einen Account sowie die Heroku CLI
Installationsanleitung siehe: <https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up>

danach muss man sich via ```heroku Login``` auf der kommandozeile anmelden.

Heroku erlaubt leider nur ein projekt pro Repository deshalb benötigen wir ein 2. Repository für den 2. Step.

nun können wir über die heroku website ein projekt erstellen hier wählen wir create project aus. Danach wählen wir die region und verbinden es mit unserem Git repository. falls bis hierhin noch keins erstellt wurde kann ich github empfehlen dies macht das erstellen sehr einfach. Nach dem verbinden mit unserem github account und dem konkreten projekt können wir den Branch der deployed werden soll auswählen. Standardmässig ist dies master. Danach klicken wir auf deploy app und bekommen danach die möglichkeit view. Dadurch erhalten wir unsere URL für die Api zugriffe. Die Oberfläche hat außerdem oben rechts den button open app der dasselbe macht. Nun geben wir bespielsweise im Browser

https://<APPNAME>.herokuapp.com/api/cars ein und erhalten eine Liste von autos.
z.b: <https://car-manager-step1.herokuapp.com/api/cars>