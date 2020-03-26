# TP 1

## Mini TP : Script de lecture de fichier

* TP1/script.js : Ce fichier lit le fichier data.csv et affiche son  contenu dans la console.

## Utilisation
  `node script.js FILE_NAME`

## Mini TP : appel du script de lecture via une API web

* TP1/server.js : Code du serveur Web
* TP1/template.pug : template de génération du code HTML
* TP1/style.css : feuille de style 

## Utilisation
  `node server.js FILE_NAME`

# TP 2
## Mini TP : Transformation du serveur avec Express

* TP2/expressServer.js : Ce fichier lit le fichier data.csv et affiche son contenu dans la console.
* TP2/views : Dossier contenant le template .pug et le style.css

## Utilisation
  `node expressServer.js FILE_NAME`

## Screenshot Postman 

![alt text](./TP2/Screenshot/TP2.PNG) 

# TP 3
## Mini TP : API d’écriture et de modification d’un fichier cities.json

* TP3/expressServer.js : Ce fichier lit le fichier cities.json et effectue les changements.
* TP3/public : Fichier cities.json

## Utilisation
  `node expressServer.js`

## Screenshot Postman 

### [GET] Retourne le contenu du fichier cities.json

![alt text](./TP3/Screenshot/GET200.PNG) 

### [GET] Le fichier cities.json n'existe pas 

![alt text](./TP3/Screenshot/GET404.PNG) 

### [POST] Ajout d'un ville dans le fichier cities.json

![alt text](./TP3/Screenshot/POSTAdd.PNG) 

### [POST] Ajout d'une seconde ville dans le fichier cities.json

![alt text](./TP3/Screenshot/POSTAdd2.PNG) 

### [POST] Une ville avec le même nom existe déjà dans le fichier cities.json

![alt text](./TP3/Screenshot/POSTAlreadyExist.PNG) 

### [POST] Le body de la requête est vide

![alt text](./TP3/Screenshot/POSTInvalid.PNG) 

### [PUT] Modification du nom d'une ville dans le fichier cities.json

![alt text](./TP3/Screenshot/PUT200.PNG) 

### [PUT] L'identifiant est introuvable ou une ville porte déjà le même nom dans le fichier cities.json

![alt text](./TP3/Screenshot/PUT500.PNG) 
