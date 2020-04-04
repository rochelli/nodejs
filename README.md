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

### [DELETE] Suppression d'un ville dans le fichier cities.json

![alt text](./TP3/Screenshot/DELETE200.PNG) 

### [DLETE] L'identifiant de la ville est introuvable dans le fichier cities.json

![alt text](./TP3/Screenshot/DELETE500.PNG) 

# TP 4
## MongoDB : Transformer le serveur des TP précédents pour utiliser MongoDB et Mongoose

* TP4/mongoDb.js : Fichier du serveur.
* TP4/js : Fichiers js permettant de générer les appels à l'API.
* TP4/views : Fichier de template permettant de générer les fichiers HTML.

### [GET] Récupération de la liste des villes dans la base de données

![alt text](./TP4/Screenshot/GET200.PNG) 

### [POST] Ajout d'une ville dans la base de données

![alt text](./TP4/Screenshot/POST200.PNG) 

### [POST] Une ville dans la base de données porte déjà la même nom

![alt text](./TP4/Screenshot/POST500.PNG)

### [PUT] Modification du nom d'une ville dans la base de données

![alt text](./TP4/Screenshot/PUT200.PNG)

### [PUT] Une ville porte déjà le même nom

![alt text](./TP4/Screenshot/PUT500Already.PNG)

### [PUT] L'identifiant n'est pas trouvé dans la base de donnée

![alt text](./TP4/Screenshot/PUT500IdNotFound.PNG)

### [DELETE] Suppression de la ville dans la base de données

![alt text](./TP4/Screenshot/DELETE200.PNG)

### [DELETE] Identifiant non trouvé dans la base de donnée

![alt text](./TP4/Screenshot/DELETE500.PNG)

### [UI GET /] Interface permettant d'ajouter une ville 

![alt text](./TP4/Screenshot/ajouterVille.PNG)

### [UI GET /city] Modification d'un ville via le bouton "Modifier". Redirection vers la liste des villes en cas de succès

![alt text](./TP4/Screenshot/modification.PNG)

### [UI GET /city] Modification d'un ville via le bouton "Supprimer". Redirection vers la liste des villes en cas de succès

![alt text](./TP4/Screenshot/suppression.PNG)

### [UI GET /city] Liste des villes dans la base de données

![alt text](./TP4/Screenshot/liste.PNG)
