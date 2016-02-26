define({
  "name": "Teaching-HEIGVD-CM_WEBS-2016-Project",
  "version": "0.1.0",
  "description": "Documentation de l'API REST Teaching-HEIGVD-CM_WEBS-2016-Project",
  "title": "apiDoc Teaching-HEIGVD-CM_WEBS-2016-Project",
  "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project",
  "sampleUrl": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project",
  "header": {
    "title": "Introduction",
    "content": "<h1>Introduction</h1>\n<h2>Préface</h2>\n<p>Ceci est une documentation relative au projet &quot;Teaching-HEIGVD-CM_WEBS-2016-Project&quot;. Ce projet fut développé durant le cours de Web Service dispense a la HEIG-VD de Yverdon-les-Bains par M. Thelin, M. Darbellay et M. Donnet. Pour toutes informations complémentaires, veuillez nous contacter via le mail suivant: tddwebservice@heig-vd.ch</p>\n<h2>Le projet</h2>\n<p>Le projet &quot;Teaching-HEIGVD-CM_WEBS-2016-Project&quot;, est une API REST &quot;simple&quot; comprenant 3 ressources. Les utilisateurs, les défauts et les comments, correspondant en français aux utilisateurs, aux défauts et aux commentaires. En gros le concept est de proposer un outil permettant aux utilisateurs de signaler des problèmes qu'ils rencontrent sur la voie publique, par exemple un lampadaire défectueux. Ainsi l'info est relayée est on peut lancer un processus de réparation. Les règles suivantes s'appliquent à notre API :</p>\n<ul>\n<li>\n<p>Les citoyens (détecteur de problèmes) et le staff (responsable des réparations et de l'archivage) sont des utilisateurs. Un utilisateur peut avoir l'un ou l'autre de ces rôles tout comme les deux.</p>\n</li>\n<li>\n<p>Le staff peut définir le type d'un défaut, pour catégoriser ce dernier. Un type peut-être par exemple lampadaire détruit, graffiti etc. Un défaut type est défini par un nom et une description.</p>\n</li>\n<li>\n<p>Tous les utilisateurs peuvent signaler des défauts. Chaque défaut est initialement défini par un auteur, un type, une description et des coordonnées géographiques. Chaque défaut a aussi un statut (créer, en-cours, assigné, résolu, non-résolu, rejeté). Quand un défaut est assigné à un membre du staff, ce dernier est responsable des réparations du défaut.</p>\n</li>\n<li>\n<p>Tous les utilisateurs peuvent commenter les défauts. Un commentaire est défini par son auteur, sa date and son contenu textuel.</p>\n</li>\n<li>\n<p>Tous les utilisateurs peuvent aussi taguer les défauts avec des mots-clés de leur choix.</p>\n</li>\n<li>\n<p>Lorsqu'une action est entreprise sur un problème, son statut peut changer passant de non-résolu a résolu par exemple.</p>\n</li>\n</ul>\n<p>Les utilisateurs veulent pouvoir effectuer certaines requêtes :</p>\n<ul>\n<li>\n<p>Obtenir la liste des défauts soulevée par un utilisateur en particulier.</p>\n</li>\n<li>\n<p>Obtenir la liste des défauts appartenant à un certain type.</p>\n</li>\n<li>\n<p>Obtenir la liste des défauts dans une certaine région.</p>\n</li>\n<li>\n<p>Obtenir la liste des défauts résolus entre deux dates.</p>\n</li>\n<li>\n<p>Obtenir la liste des défauts non-résolus entre deux dates.</p>\n</li>\n<li>\n<p>Obtenir l'historique des actions entreprises sur un défaut.</p>\n</li>\n<li>\n<p>Obtenir la liste des utilisateurs ayant soulevé le plus de défauts.</p>\n</li>\n<li>\n<p>Obtenir la liste des utilisateurs ayant résolus le plus de défauts.</p>\n</li>\n<li>\n<p>Obtenir la liste des utilisateurs ayant le moins de défauts assignés.</p>\n</li>\n</ul>\n"
  },
  "footer": {
    "title": "Ressources & technologies",
    "content": "<h2>Technologies</h2>\n<p>Afin de mener ce projet a terme, nous avons eu recours a de nombreuses technos tels que : Yo, Grunt, Bower,\nMongoDB, Mongoose, Postman, npm, nodejs, apidoc et express.</p>\n<h2>Ressources</h2>\n<p>Nous avons aussi beneficier du cours theorique de webservice dispenser a la HEIG-VD par M.Simon Oulevay &amp; M. Olivier Leitchli, ainsi\nque de leur support disponible sous : https://github.com/SoftEng-HEIGVD/Teaching-HEIGVD-CM_WEBS-2016/tree/master/slides</p>\n"
  },
  "template": {
    "withCompare": true,
    "withGenerator": true
  },
  "apidoc": "0.2.0",
  "generator": {
    "name": "apidoc",
    "time": "2016-02-26T12:02:48.231Z",
    "url": "http://apidocjs.com",
    "version": "0.15.1"
  }
});
