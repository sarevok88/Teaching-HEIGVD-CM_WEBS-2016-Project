# Introduction

## Préface

Ceci est une documentation relative au projet "Teaching-HEIGVD-CM_WEBS-2016-Project". Ce projet fut développé durant le cours de Web Service dispense a la HEIG-VD de Yverdon-les-Bains par M. Thelin, M. Darbellay et M. Donnet. Pour toutes informations complémentaires, veuillez nous contacter via le mail suivant: tddwebservice@heig-vd.ch

## Le projet

Le projet "Teaching-HEIGVD-CM_WEBS-2016-Project", est une API REST "simple" comprenant 3 ressources. Les utilisateurs, les défauts et les comments, correspondant en français aux utilisateurs, aux défauts et aux commentaires. En gros le concept est de proposer un outil permettant aux utilisateurs de signaler des problèmes qu'ils rencontrent sur la voie publique, par exemple un lampadaire défectueux. Ainsi l'info est relayée est on peut lancer un processus de réparation. Les règles suivantes s'appliquent à notre API :


- Les citoyens (détecteur de problèmes) et le staff (responsable des réparations et de l'archivage) sont des utilisateurs. Un utilisateur peut avoir l'un ou l'autre de ces rôles tout comme les deux.

- Le staff peut définir le type d'un défaut, pour catégoriser ce dernier. Un type peut-être par exemple lampadaire détruit, graffiti etc. Un défaut type est défini par un nom et une description.

- Tous les utilisateurs peuvent signaler des défauts. Chaque défaut est initialement défini par un auteur, un type, une description et des coordonnées géographiques. Chaque défaut a aussi un statut (créer, en-cours, assigné, résolu, non-résolu, rejeté). Quand un défaut est assigné à un membre du staff, ce dernier est responsable des réparations du défaut.

- Tous les utilisateurs peuvent commenter les défauts. Un commentaire est défini par son auteur, sa date and son contenu textuel.

- Tous les utilisateurs peuvent aussi taguer les défauts avec des mots-clés de leur choix.

- Lorsqu'une action est entreprise sur un problème, son statut peut changer passant de non-résolu a résolu par exemple.


Les utilisateurs veulent pouvoir effectuer certaines requêtes :


- Obtenir la liste des défauts soulevée par un utilisateur en particulier.

- Obtenir la liste des défauts appartenant à un certain type.

- Obtenir la liste des défauts dans une certaine région.

- Obtenir la liste des défauts résolus entre deux dates.

- Obtenir la liste des défauts non-résolus entre deux dates.

- Obtenir l'historique des actions entreprises sur un défaut.

- Obtenir la liste des utilisateurs ayant soulevé le plus de défauts.

- Obtenir la liste des utilisateurs ayant résolus le plus de défauts.

- Obtenir la liste des utilisateurs ayant le moins de défauts assignés.
