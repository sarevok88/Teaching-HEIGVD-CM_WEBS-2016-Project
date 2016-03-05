/**
 * @api {get} /users 01. Get users
 * @apiVersion 0.1.0
 * @apiName GetUser
 * @apiGroup Users
 *                
 * @apiDescription Fonction permettant d'obtenir tous les users enregistré sur notre API. 
 * 
 * 
 * @apiSuccess {Object[]} users               Liste des users. 
 * @apiSuccess {String}   users.id            Id du user.
 * @apiSuccess {String}   users.forname       Prénom du User.
 * @apiSuccess {String}   users.surname       Nom du User.
 * @apiSuccess {String}   users.nickname      Pseudonyme du User.
 * @apiSuccess {String}   users.dob           Date de naissance du User.
 * @apiSuccess {Date}     users.email         Email du User.
 * @apiSuccess {Object[]} users.role          Liste des Roles du User.
 *
 * @apiError NoUsersFound   Il n'y a pas de User sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):     
 *     []
 *     
 */
function getUser() { return; }

/**
 * @api {get} /users/:id 02. Get user via ID
 * @apiVersion 0.1.0
 * @apiName GetUserById
 * @apiGroup Users
 *
 * @apiDescription Fonction permettant d'obtenir un user spécifique via son ID.
 *
 * @apiParam {String} id Identifiant unique des Users.
 *
 * @apiExample Exemple d'utilisation:
 * http://localhost:3000/api/users/56d05eefa0b1214c16facb19
 *
 * @apiSuccess {String}   id            Id du user.
 * @apiSuccess {String}   forname       Prénom du User.
 * @apiSuccess {String}   surname       Nom du User.
 * @apiSuccess {String}   nickname      Pseudonyme du User.
 * @apiSuccess {String}   dob           Date de naissance du User.
 * @apiSuccess {Date}     email         Email du User.
 * @apiSuccess {Object[]} role          Role du User (staff ou citoyen).
 *
 * @apiError Error500   L'<code>id</code> du User saisi n'a pas été trouvé.
 *
 * @apiErrorExample Réponse (Error 500):
 *     Error 500: Internal Server Error
 *     {
 *       "message": "Cast to ObjectId failed for value \"{value}\" at path \"_id\""
 *     }
 */
function getUserById() { return; }

/**
 * @api {get} /users?issues=nbrIssuesCreated 03. Get users avec le plus d'issues
 * @apiVersion 0.1.0
 * @apiName GetUserWithMostIssues
 * @apiGroup Users
 *
 * @apiDescription Fonction permettant d'obtenir le users ayant soulevé le plus d'issues.
 *
 * @apiParam {Nombre} nbrIssues Nombre d'Issues reliée à un User.
 *
 *
 * @apiSuccess {String}   id            Id du user.
 * @apiSuccess {String}   forname       Prénom du User.
 * @apiSuccess {String}   surname       Nom du User.
 * @apiSuccess {String}   nickname      Pseudonyme du User.
 * @apiSuccess {String}   dob           Date de naissance du User.
 * @apiSuccess {Date}     email         Email du User.
 * @apiSuccess {Object[]} role          Role du User (staff ou citoyen).
 *
 * @apiError UserNotFound   Il n'y a pas de User sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 */
function GetUserWithMostIssues() { return; }

/**
 * @api {get} /users?issues=solved 04. Get users résolvant le plus d'issues
 * @apiVersion 0.1.0
 * @apiName GetUserSolvedMost
 * @apiGroup Users
 *
 * @apiDescription Fonction permettant d'obtenir une liste de users ayant résolu le plus d'issues.
 *
 *
 * @apiSuccess {Number}   id            Id du user.
 * @apiSuccess {String}   firstName     Prénom du User.
 * @apiSuccess {String}   name          Nom du User.
 * @apiSuccess {String}   nickname      Pseudonyme du User.
 * @apiSuccess {String}   email         Email du User.
 * @apiSuccess {Date}     birth         Date de naissance du User.
 * @apiSuccess {String}   role          Role du User (staff ou citoyen).
 *
 * @apiError NoUsersFound   Il n'y a pas de User sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):     
 *     []
 */
function GetUserSolvedMost() { return; }

/**
 * @api {get} /users?issues=unsolved&issues=unrejected 05. Get user ayant le moins d'Issues
 * @apiVersion 0.1.0
 * @apiName GetUserLeastIssues
 * @apiGroup Users
 *
 * @apiDescription Fonction permettant d'obtenir une liste des users ayant le moins d'issues assignées.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/user/01
 *
 * @apiSuccess {Number}   id            Id du user.
 * @apiSuccess {String}   firstName     Prénom du User.
 * @apiSuccess {String}   name          Nom du User.
 * @apiSuccess {String}   nickname      Pseudonyme du User.
 * @apiSuccess {String}   email         Email du User.
 * @apiSuccess {Date}     birth         Date de naissance du User.
 * @apiSuccess {String}   role          Role du User (staff ou citoyen).
 *
 * @apiError UserNotFound    Il n'y a pas de User sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User not found"
 *     }
 */
function GetUserSolvedMost() { return; }

/**
 * @api {post} /users 06. Créer un nouveau User
 * @apiVersion 0.1.0
 * @apiName PostUser
 * @apiGroup Users
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de créer un nouveau User.
 *
 * @apiParam {String}   forname       Prénom du User.
 * @apiParam {String}   surname       Nom du User.
 * @apiParam {String}   nickname      Pseudonyme du User.
 * @apiParam {String}   dob           Date de naissance du User.
 * @apiParam {Date}     email         Email du User.
 * @apiParam {Object[]} role          Role du User (staff ou citoyen).
 * 
 * @apiSuccess {String} forname        Prénom du nouvel utilisateur.
 * @apiSuccess {String} surname        Nom du nouvel utilisateur.
 * @apiSuccess {String} nickname       Pseudonyme du nouvel utilisateur.
 * @apiSuccess {String} dob            Date de naissance du nouvel utilisateur (jj-mm-aaaa).
 * @apiSuccess {String} email          Email du nouvel utilisateur.
 * @apiSuccess {String} id             Id du nouvel utilisateur.
 * @apiSuccess {Object[]} role         Role du nouvel utilisateur.
 * 
 * 
 * @apiUse CreateElementError
 * 
 * 
 * 
 * 
 */
function postUser() { return; }

/**
 * @api {put} /users/:id 07. Modifier un User éxistant.
 * @apiVersion 0.1.0
 * @apiName PutUser
 * @apiGroup Users
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de modifier les paramètres d'un utilisateur.
 *
 * @apiParam {String}   id            Id du User.
 * @apiParam {String}   forname       Nouveau prénom du User.
 * @apiParam {String}   surname       Nouveau nom du User.
 * @apiParam {String}   nickname      Nouveau pseudonyme du User.
 * @apiParam {String}   dob           Nouvelle date de naissance du User.
 * @apiParam {Date}     email         Nouvel email du User.
 * @apiParam {Object[]} role          Nouveau role du User (staff ou citoyen).
 * 
 * @apiSuccess {String} forname        Prénom à jour de l'utilisateur.
 * @apiSuccess {String} surname        Nom à jour de l'utilisateur.
 * @apiSuccess {String} nickname       Pseudonyme à jour de l'utilisateur.
 * @apiSuccess {String} dob            Date de naissance à jour de l'utilisateur (jj-mm-aaaa).
 * @apiSuccess {String} email          Email à jour de l'utilisateur.
 * @apiSuccess {String} id             Id à jour de l'utilisateur.
 * @apiSuccess {Object[]} role         Role à jour de l'utilisateur.
 *
 *
 *
 *
 * @apiUse CreateElementError
 * @apiUse IdNotFound
 */
function putUser() { return; }

/**
 * @api {delete} /users/:id 08. Supprimer un User éxistant.
 * @apiVersion 0.1.0
 * @apiName DeleteUser
 * @apiGroup Users
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de supprimer un user.
 *
 * @apiParam {Number}     id            Id du user.
 * 
 *
 * @apiUse IdNotFound
 */
function DeleteUser() { return; }

/**
 * @api {get} /comments 01. Get comments
 * @apiVersion 0.1.0
 * @apiName GetComments
 * @apiGroup Comments
 *
 * @apiDescription Fonction permettant d'obtenir tous les comments poster sur notre API.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/comments
 * 
 * 
 * @apiSuccess {Object[]} comments            Liste des comments. 
 * @apiSuccess {Number}   comments.authorId   Id de l'auteur du comment.
 * @apiSuccess {Number}   comments.commentId  Id du comment.
 * @apiSuccess {String}   comments.text       Contenu du comment.
 *
 * @apiError CommentNotFound   Il n'y a pas de Comment sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Comment(s) not found"
 *     }
 */
function GetComments() { return; }

/**
 * @api {get} /comments?issueId={id} 02. Get comment via Id.
 * @apiVersion 0.1.0
 * @apiName GetCommentsById
 * @apiGroup Comments
 *
 * @apiDescription Fonction permettant d'obtenir un commentaire spécifique via son ID.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/comments/01
 * 
 * @apiParam {Nombre} id Identifiant unique du comment.
 * 
 * @apiSuccess {Number}   authorId   Id de l'auteur du comment.
 * @apiSuccess {Number}   commentId  Id du comment.
 * @apiSuccess {String}   text       Contenu du comment.
 *
 * @apiError CommentNotFound   Il n'y a aucun comment correspondant à cet Id sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Comment not found"
 *     }
 */
function GetCommentsById() { return; }

/**
 * @api {get} /comments?issueId={id} 03. Get comments appartenant à une issue.
 * @apiVersion 0.1.0
 * @apiName GetCommentsByIssue
 * @apiGroup Comments
 *
 * @apiDescription Fonction permettant d'obtenir un commentaire spécifique via son ID.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/comments?issueId=01
 * 
 * @apiParam {Nombre} id Identifiant unique de l'Issue.
 * 
 * @apiSuccess {Object[]} comments            Liste des comments. 
 * @apiSuccess {Number}   comments.authorId   Id de l'auteur du comment.
 * @apiSuccess {Number}   comments.commentId  Id du comment.
 * @apiSuccess {String}   comments.text       Contenu du comment.
 *
 * @apiError CommentNotFound   Il n'y a aucun comment associer à cet Id sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Comment(s) not found"
 *     }
 */
function GetCommentsByIssue() { return; }

/**
 * @api {post} /comments 04. Créer un nouveau comment
 * @apiVersion 0.1.0
 * @apiName PostComment
 * @apiGroup Comments
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de créer un nouveau Comment.
 *
 * @apiParam {Number}   authorId     Id de l'auteur du comment.
 * @apiParam {number}   commentId    Id du comment.
 * @apiParam {String}   text         Contenu du comment.
 * 
 * @apiSuccess {Number} id            Id du nouveau comment.
 *
 * @apiUse CreateElementError
 */
function postComment() { return; }

/**
 * @api {put} /comments/:id 05. Modifier un comment éxistant.
 * @apiVersion 0.1.0
 * @apiName PutComment
 * @apiGroup Comments
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de modifier les paramètres d'un comment.
 *
 * @apiParam {Number}   authorId     Id de l'auteur du comment.
 * @apiParam {number}   commentId    Id du comment.
 * @apiParam {String}   text         Contenu du comment.
 *
 *@apiSuccess {Number} id            Id du comment mis à jour.
 *
 * @apiUse CreateElementError
 */
function putComment() { return; }

/**
 * @api {delete} /comments/:id 06. Supprimer un comment éxistant.
 * @apiVersion 0.1.0
 * @apiName DeleteComment
 * @apiGroup Comments
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de supprimer un comment.
 *
 * @apiParam {Number}    authorId      Id de l'auteur du comment.
 * 
 * @apiSuccess {Number}  id            Id du comment supprimer.
 *
 * @apiSuccess {Number}  id            Id du comment mis à jour.
 *
 * @apiUse CreateElementError
 */
function deleteComment() { return; }

/**
 * @api {get} /issues 01. Get issues
 * @apiVersion 0.1.0
 * @apiName GetIssues
 * @apiGroup Issues
 *                
 * @apiDescription Fonction permettant d'obtenir toutes les issues enregistrée sur notre API. 
 *
 * 
 * 
 * @apiSuccess {Object[]} issues                            Liste des issues. 
 * @apiSuccess {String}   issues._id                        Id de l'issue.
 * @apiSuccess {String}   issues.name                       Nom de l'issue.
 * @apiSuccess {String}   issues.type                       Type de l'issue.
 * @apiSuccess {String}   issues.status                     Statut de l'issue.
 * @apiSuccess {String}   issues.descritpion                Description de l'issues.
 * @apiSuccess {String}   issues.photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {String}   issues.user                       Id du user signalant l'issue.
 * @apiSuccess {Object[]} issues.action                     Tableau d'information liées au actions effectuées.
 * @apiSuccess {object[]} issues.localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   issues.localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} issues.localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String} issues.responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {object[]} issues.tags                       Tableau des tags liés à l'issue.
 * @apiSuccess {String}   issues.responsable                Id du user responsable de l'issue.
 * 
 *
  * @apiError NoIssueFound   Il n'y a pas d'Issue sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):     
 *     []
 */
function getIssues() { return; }


/**
 * @api {get} /issues/:id 02. Get issues via ID
 * @apiVersion 0.1.0
 * @apiName GetIssueById
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une issue spécifique via son ID.
 *
 * @apiParam {String} _id Identifiant unique de l'issue.
 *
 * @apiExample Exemple d'utilisation:
 * http://localhost:3000/api/issues/56d2d706e76014600d42f982
 *
 * @apiSuccess {String}   _id                        Id de l'issue.
 * @apiSuccess {String}   name                       Nom de l'issue.
 * @apiSuccess {String}   type                       Type de l'issue.
 * @apiSuccess {String}   status                     Statut de l'issue.
 * @apiSuccess {String}   descritpion                Description de l'issues.
 * @apiSuccess {String}   photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {String}   user                       Id du user signalant l'issue.
 * @apiSuccess {Object[]} action                     Tableau d'information liées au actions effectuées.
 * @apiSuccess {object[]} localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String}   responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {object[]} tags                       Tableau des tags liés à l'issue.
 * @apiSuccess {String}   responsable                Id du user responsable de l'issue.
 *
 * @apiError Error500   L'<code>id</code> du de l'issue saisie n'a pas été trouvé.
 *
 * @apiErrorExample Réponse (Error 500):
 *     Error 500: Internal Server Error
 *     {
 *       "message": "Cast to ObjectId failed for value \"{value}\" at path \"_id\""
 *     }
 */
function getIssueById() { return; }

/**
 * @api {get} /issues?userId={id} 03. Get issues soulevée par un user.
 * @apiVersion 0.1.0
 * @apiName GetIssuesByUser
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une liste d'issues soulevée par un user.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/issues?userId=01
 * 
 * @apiParam {Nombre} id Identifiant unique de l'Issue.
 * 
 * @apiSuccess {Object[]} issues                            Liste des issues. 
 * @apiSuccess {Number}   issues.id                         Id de l'issue.
 * @apiSuccess {String}   issues.name                       Nom de l'issue.
 * @apiSuccess {String}   issues.type                       Type de l'issue.
 * @apiSuccess {String}   issues.tags                       Tags de l'issue.
 * @apiSuccess {String}   issues.status                     Statut de l'issue.
 * @apiSuccess {object[]} issues.localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   issues.localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} issues.localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String}   issues.descritpion                Description de l'issues.
 * @apiSuccess {String}   issues.photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {Object[]} issues.action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} issues.responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {Number}   issues.responsable.id             Id du user responsable de l'issue.
 * @apiSuccess {object[]} issues.user                       Information du user signalant l'issue.
 * @apiSuccess {Number}   issues.user.id                    Id du user signalant l'issue.
 * 
 *
 * @apiError IssueNotFound   Il n'y a aucune issue associée à cet Id sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Issue(s) not found"
 *     }
 */
function GetIssueByUser() { return; }

/**
 * @api {get} /issues?issuesType={type} 04. Get issues appartenant à un type spécifique.
 * @apiVersion 0.1.0
 * @apiName GetIssuesByType
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une liste d'issues appartenant à un type donné.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/issues?issuesType=graffiti
 * 
 * @apiParam {string} Nom du type d'issue.
 * 
 * @apiSuccess {Object[]} issues                            Liste des issues. 
 * @apiSuccess {Number}   issues.id                         Id de l'issue.
 * @apiSuccess {String}   issues.name                       Nom de l'issue.
 * @apiSuccess {String}   issues.type                       Type de l'issue.
 * @apiSuccess {String}   issues.tags                       Tags de l'issue.
 * @apiSuccess {String}   issues.status                     Statut de l'issue.
 * @apiSuccess {object[]} issues.localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   issues.localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} issues.localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String}   issues.descritpion                Description de l'issues.
 * @apiSuccess {String}   issues.photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {Object[]} issues.action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} issues.responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {Number}   issues.responsable.id             Id du user responsable de l'issue.
 * @apiSuccess {object[]} issues.user                       Information du user signalant l'issue.
 * @apiSuccess {Number}   issues.user.id                    Id du user signalant l'issue.
 * 
 *
 * @apiError IssueNotFound   Il n'y a aucune issue associée à ce Type sur votre base de donnée.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Issue(s) not found"
 *     }
 */
function GetIssueByType() { return; }

/**
 * @api {get} /actions?issueId={id} 05. Get liste des actions sur une issue.
 * @apiVersion 0.1.0
 * @apiName GetActionsOnIssue
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une liste d'action entreprise sur une issue.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/actions?issueId=01
 * 
 * @apiParam {number} Id de l'issue.
 * 
 * @apiSuccess {Number}   id                         Id de l'issue.
 * @apiSuccess {object[]} actions                    Tableau d'informations liées aux actions entreprises.
 * @apiSuccess {Number}   actions.id                 Id de l'action.
 * @apiSuccess {String}   actions.description        Déscription de l'action.
 *
 * @apiError ActionNotFound   Il n'y a aucune action entreprise sur l'issue.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Action(s) not found"
 *     }
 */
function GetActionsOnIssue() { return; }

/**
 * @api {get} /issues?startDate={date1}&endDate={date2}&status=solved 06. Get liste des issues résolue entre deux dates.
 * @apiVersion 0.1.0
 * @apiName GetSolvedIssuesTwoDates
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une liste des issues ayant un status égal à solved entre deux dates.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/issues?startDate=22-01-2016&endDate=25-01-2016&status=solved
 * 
 * @apiParam {date} Date1 Date de début.
 * @apiParam {date} Date2 date de fin.
 * 
 * @apiSuccess {Object[]} issues                            Liste des issues. 
 * @apiSuccess {Number}   issues.id                         Id de l'issue.
 * @apiSuccess {String}   issues.name                       Nom de l'issue.
 * @apiSuccess {String}   issues.type                       Type de l'issue.
 * @apiSuccess {String}   issues.tags                       Tags de l'issue.
 * @apiSuccess {String}   issues.status                     Statut de l'issue.
 * @apiSuccess {object[]} issues.localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   issues.localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} issues.localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String}   issues.descritpion                Description de l'issues.
 * @apiSuccess {String}   issues.photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {Object[]} issues.action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} issues.responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {Number}   issues.responsable.id             Id du user responsable de l'issue.
 * @apiSuccess {object[]} issues.user                       Information du user signalant l'issue.
 * @apiSuccess {Number}   issues.user.id                    Id du user signalant l'issue.
 *
 * @apiError IssueNotFound   Il n'y a aucune issue résolue entre ces deux dates.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Issue(s) not found"
 *     }
 */
function GetActionsOnIssue() { return; }

/**
 * @api {get} /issues?startDate={date1}&endDate={date2}&status=unsolved 07. Get liste des issues non-résolue entre deux dates.
 * @apiVersion 0.1.0
 * @apiName GetUnsolvedIssuesTwoDates
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une liste des issues ayant un status égal à unsolved entre deux dates.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/issues?startDate=22-01-2016&endDate=25-01-2016&status=unsolved
 * 
 * @apiParam {date} Date1 Date de début.
 * @apiParam {date} Date2 date de fin.
 * 
 * @apiSuccess {Object[]} issues                            Liste des issues. 
 * @apiSuccess {Number}   issues.id                         Id de l'issue.
 * @apiSuccess {String}   issues.name                       Nom de l'issue.
 * @apiSuccess {String}   issues.type                       Type de l'issue.
 * @apiSuccess {String}   issues.tags                       Tags de l'issue.
 * @apiSuccess {String}   issues.status                     Statut de l'issue.
 * @apiSuccess {object[]} issues.localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   issues.localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} issues.localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String}   issues.descritpion                Description de l'issues.
 * @apiSuccess {String}   issues.photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {Object[]} issues.action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} issues.responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {Number}   issues.responsable.id             Id du user responsable de l'issue.
 * @apiSuccess {object[]} issues.user                       Information du user signalant l'issue.
 * @apiSuccess {Number}   issues.user.id                    Id du user signalant l'issue.
 *
 * @apiError IssueNotFound   Il n'y a aucune issue non-résolue entre ces deux dates.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Issue(s) not found"
 *     }
 */
function GetActionsOnIssue() { return; }

/**
 * @api {get} /issues?coordX={valeurX}&coordY={valeurY}&rad={valeurRadius} 08. Get liste des issues dans une région.
 * @apiVersion 0.1.0
 * @apiName GetIssuesInRadius
 * @apiGroup Issues
 *
 * @apiDescription Fonction permettant d'obtenir une liste des issues dans un rayon défini autour d'une coordonée.
 *
 *
 * @apiExample Exemple d'utilisation:
 * curl -i http://localhost/issues?coordX=15&coordY=28&rad=10
 * 
 * @apiParam {number} valeurX Coordonée en X.
 * @apiParam {number} valeurY Coordonée en Y.
 * @apiParam {number} valeurRadius Taille du rayon de recherche.
 * 
 * @apiSuccess {Object[]} issues                            Liste des issues. 
 * @apiSuccess {Number}   issues.id                         Id de l'issue.
 * @apiSuccess {String}   issues.name                       Nom de l'issue.
 * @apiSuccess {String}   issues.type                       Type de l'issue.
 * @apiSuccess {String}   issues.tags                       Tags de l'issue.
 * @apiSuccess {String}   issues.status                     Statut de l'issue.
 * @apiSuccess {object[]} issues.localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   issues.localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} issues.localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {String}   issues.descritpion                Description de l'issues.
 * @apiSuccess {String}   issues.photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {Object[]} issues.action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} issues.responsable                Information du user s'occupant de l'issue.
 * @apiSuccess {Number}   issues.responsable.id             Id du user responsable de l'issue.
 * @apiSuccess {object[]} issues.user                       Information du user signalant l'issue.
 * @apiSuccess {Number}   issues.user.id                    Id du user signalant l'issue.
 *
 * @apiError IssueNotFound   Il n'y a aucune issue dans ce secteur.
 *
 * @apiErrorExample Réponse (exemple):
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Issue(s) not found"
 *     }
 */
function GetActionsOnIssue() { return; }

/**
 * @api {post} /issues 09. Créer une nouvelle issue
 * @apiVersion 0.1.0
 * @apiName PostIssue
 * @apiGroup Issues
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de créer une nouvelle Issue.
 *
 * @apiParam {String}   name                       Nom de l'issue.
 * @apiParam {String}   type                       Type de l'issue.
 * @apiParam {String}   status                     Statut de l'issue.
 * @apiParam {object[]} tags                       Tags de l'issue.
 * @apiParam {object[]} localisation               Tableau d'informations liées  à la localisation.
 * @apiParam {string}   localisation.type          Type de géomètrie.
 * @apiParam {object[]} localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiParam {String}   descritpion                Description de l'issues.
 * @apiParam {String}   photo                      Lien vers l'image présentant l'issue.
 * @apiParam {String}   user                       Id du user signalant l'issue.
 * @apiParam {Object[]} action                     Tableau d'information liées au actions entreprises.
 * 
 *
 * @apiSuccess {String}   name                       Nom de l'issue.
 * @apiSuccess {String}   type                       Type de l'issue.
 * @apiSuccess {String}   status                     Statut de l'issue.
 * @apiSuccess {String}   descritpion                Description de l'issues.
 * @apiSuccess {String}   photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {String}   user                       Id du user signalant l'issue.
 * @apiSuccess {String}   _id                        Id de l'issue.
 * @apiSuccess {Object[]} action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {object[]} tags                       Tags de l'issue.
 *
 * @apiUse CreateElementError
 * @apiUse IdNotFound
 * @apiUse UserRequired
 */
function postIssue() { return; }

/**
 * @api {put} /issues/:id 10. Modifier une Issue éxistante.
 * @apiVersion 0.1.0
 * @apiName PutIssue
 * @apiGroup Issues
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de modifier les paramètres d'une issue.
 *
 * @apiParam {String}   id                        Id de l'issue.
 * @apiParam {String}   name                       Nom de l'issue.
 * @apiParam {String}   type                       Type de l'issue.
 * @apiParam {String}   status                     Statut de l'issue.
 * @apiParam {object[]} tags                       Tags de l'issue.
 * @apiParam {object[]} localisation               Tableau d'informations liées  à la localisation.
 * @apiParam {string}   localisation.type          Type de géomètrie.
 * @apiParam {object[]} localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiParam {String}   descritpion                Description de l'issues.
 * @apiParam {String}   photo                      Lien vers l'image présentant l'issue.
 * @apiParam {String}   user                       Id du user signalant l'issue.
 * @apiParam {Object[]} action                     Tableau d'information liées au actions entreprises.
 * 
 *
 * @apiSuccess {String}   name                       Nom de l'issue.
 * @apiSuccess {String}   type                       Type de l'issue.
 * @apiSuccess {String}   status                     Statut de l'issue.
 * @apiSuccess {String}   descritpion                Description de l'issues.
 * @apiSuccess {String}   photo                      Lien vers l'image présentant l'issue.
 * @apiSuccess {String}   user                       Id du user signalant l'issue.
 * @apiSuccess {String}   _id                        Id de l'issue.
 * @apiSuccess {Object[]} action                     Tableau d'information liées au actions entreprises.
 * @apiSuccess {object[]} localisation               Tableau d'informations liées  à la localisation.
 * @apiSuccess {string}   localisation.type          Type de géomètrie.
 * @apiSuccess {object[]} localisation.coordinates   Tableau d'informations liées  aux coordonées.
 * @apiSuccess {object[]} tags                       Tags de l'issue.
 *
 * @apiUse CreateElementError
 * @apiUse IdNotFound
 */
function putIssue() { return; }

/**
 * @api {delete} /issues/:id 11. Supprimer une Issue éxistante.
 * @apiVersion 0.1.0
 * @apiName DeleteIssue
 * @apiGroup Issues
 * @apiPermission none
 *
 * @apiDescription Fonction permettant de supprimer une Issue.
 *
 * @apiParam {Number}     id            Id de l'issue.
 * 
 * @apiSuccess {Number}   id            Id de l'issue supprimée.
 *
 * @apiUse CreateElementError
 */
function DeleteIssue() { return; }