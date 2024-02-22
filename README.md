# Projet Todo List React

Ce projet est une application Todo List construite avec React. Il permet aux utilisateurs de gérer une liste de tâches à faire.

## Prérequis :

	- Mysql et 
	- Node js


### Installation :
 
	1.Dézipper reactexo1 zip

	2.Exécuter le fichier :project database.Sql (qui se trouve dans le fichier zip)
		- création de la base de données efrei_1
		- création de la table (élève, bulletin, absence) et les données nécessaires
	
	3.lancer le projet: reactexo1
    npm start 
 
### Liste des services implementer:

dossier src/page

#### Table Eleves :

 dossier src/page/acueil
	1. /eleves/add
		- ajout eleve
		
	dossier src/page/tables	
	2. /eleves
		- lecture de toute les éleve

	 dossier src/page/Update
	3. /eleves/update/:id
		- mis a jour eleve

 dossier src/page/Supp
	4. /eleves/delete/:id
		- suppression eleve


##### table Bulletin:

    dossier src/page_bulletin/Create
		1. /bulletin/add
		- ajout bulletin
		
		
	dossier src/page_bulletin/Read
	2. /bulletin/all
		- lecture de toute les bulletin avec les nom et prenom de la table eleves
		
	dossier src/page_bulletin/Modifi
	3. /bulletin/update/:id
		- mis a jour bulletin

	dossier src/page_bulletin/Delt
	4. /bulletin/delete/:id
		- suppression bulletin



###### table Absences:

	dossier src/page_absence/Creer
	5. /absences/add
		- ajout absences
	
	
	dossier src/page_absence/Tableau		
	1. /absences/all
		- lecture de toute les absences avec les nom et prenom de la table eleves

	
	dossier src/page_absence/Upt
	6. /absences/update/:id
		- mis a jour absences

	7. /absences/delete/Sup
		- suppression absences
