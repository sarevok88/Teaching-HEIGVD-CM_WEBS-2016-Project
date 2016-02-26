define({ "api": [
  {
    "type": "delete",
    "url": "/comments/:id",
    "title": "06. Supprimer un comment éxistant.",
    "version": "0.1.0",
    "name": "DeleteComment",
    "group": "Comments",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de supprimer un comment.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du comment supprimer.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/comments/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/comments",
    "title": "01. Get comments",
    "version": "0.1.0",
    "name": "GetComments",
    "group": "Comments",
    "description": "<p>Fonction permettant d'obtenir tous les comments poster sur notre API.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/comments",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Liste des comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.commentId",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Contenu du comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>Il n'y a pas de Comment sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Comment(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/comments"
      }
    ]
  },
  {
    "type": "get",
    "url": "/comments?issueId={id}",
    "title": "02. Get comment via Id.",
    "version": "0.1.0",
    "name": "GetCommentsById",
    "group": "Comments",
    "description": "<p>Fonction permettant d'obtenir un commentaire spécifique via son ID.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/comments/01",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nombre",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique du comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "commentId",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Contenu du comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>Il n'y a aucun comment correspondant à cet Id sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Comment not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/comments?issueId={id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/comments?issueId={id}",
    "title": "03. Get comments appartenant à une issue.",
    "version": "0.1.0",
    "name": "GetCommentsByIssue",
    "group": "Comments",
    "description": "<p>Fonction permettant d'obtenir un commentaire spécifique via son ID.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/comments?issueId=01",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nombre",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de l'Issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "comments",
            "description": "<p>Liste des comments.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "comments.commentId",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "comments.text",
            "description": "<p>Contenu du comment.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CommentNotFound",
            "description": "<p>Il n'y a aucun comment associer à cet Id sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Comment(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/comments?issueId={id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/comments",
    "title": "04. Créer un nouveau comment",
    "version": "0.1.0",
    "name": "PostComment",
    "group": "Comments",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de créer un nouveau Comment.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "commentId",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Contenu du comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du nouveau comment.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/comments"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/comments/:id",
    "title": "05. Modifier un comment éxistant.",
    "version": "0.1.0",
    "name": "PutComment",
    "group": "Comments",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de modifier les paramètres d'un comment.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "commentId",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>Contenu du comment.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du comment mis à jour.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/comments/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/issues/:id",
    "title": "11. Supprimer une Issue éxistante.",
    "version": "0.1.0",
    "name": "DeleteIssue",
    "group": "Issues",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de supprimer une Issue.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'issue supprimée.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/actions?issueId={id}",
    "title": "05. Get liste des actions sur une issue.",
    "version": "0.1.0",
    "name": "GetActionsOnIssue",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste d'action entreprise sur une issue.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/actions?issueId=01",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>de l'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "actions",
            "description": "<p>Tableau d'informations liées aux actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "actions.id",
            "description": "<p>Id de l'action.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "actions.description",
            "description": "<p>Déscription de l'action.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ActionNotFound",
            "description": "<p>Il n'y a aucune action entreprise sur l'issue.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Action(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/actions?issueId={id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues/{id}",
    "title": "02. Get issues via ID",
    "version": "0.1.0",
    "name": "GetIssueById",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une issue spécifique via son ID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nombre",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de l'issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issue/01",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>L'<code>id</code> de l'issue saisie n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues",
    "title": "01. Get issues",
    "version": "0.1.0",
    "name": "GetIssues",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir toutes les issues enregistrée sur notre API.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issues",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues",
            "description": "<p>Liste des issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "issues.localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Issue",
            "description": "<p>(s)NotFound   Il n'y a pas d'issue sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?issuesType={type}",
    "title": "04. Get issues appartenant à un type spécifique.",
    "version": "0.1.0",
    "name": "GetIssuesByType",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste d'issues appartenant à un type donné.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issues?issuesType=graffiti",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Nom",
            "description": "<p>du type d'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues",
            "description": "<p>Liste des issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "issues.localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>Il n'y a aucune issue associée à ce Type sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues?issuesType={type}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?userId={id}",
    "title": "03. Get issues soulevée par un user.",
    "version": "0.1.0",
    "name": "GetIssuesByUser",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste d'issues soulevée par un user.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issues?userId=01",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nombre",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de l'Issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues",
            "description": "<p>Liste des issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "issues.localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>Il n'y a aucune issue associée à cet Id sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues?userId={id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?coordX={valeurX}&coordY={valeurY}&rad={valeurRadius}",
    "title": "08. Get liste des issues dans une région.",
    "version": "0.1.0",
    "name": "GetIssuesInRadius",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste des issues dans un rayon défini autour d'une coordonée.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issues?coordX=15&coordY=28&rad=10",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "valeurX",
            "description": "<p>Coordonée en X.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "valeurY",
            "description": "<p>Coordonée en Y.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "valeurRadius",
            "description": "<p>Taille du rayon de recherche.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues",
            "description": "<p>Liste des issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "issues.localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>Il n'y a aucune issue dans ce secteur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues?coordX={valeurX}&coordY={valeurY}&rad={valeurRadius}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?startDate={date1}&endDate={date2}&status=solved",
    "title": "06. Get liste des issues résolue entre deux dates.",
    "version": "0.1.0",
    "name": "GetSolvedIssuesTwoDates",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste des issues ayant un status égal à solved entre deux dates.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issues?startDate=22-01-2016&endDate=25-01-2016&status=solved",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Date1",
            "description": "<p>Date de début.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Date2",
            "description": "<p>date de fin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues",
            "description": "<p>Liste des issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "issues.localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>Il n'y a aucune issue résolue entre ces deux dates.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues?startDate={date1}&endDate={date2}&status=solved"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?startDate={date1}&endDate={date2}&status=unsolved",
    "title": "07. Get liste des issues non-résolue entre deux dates.",
    "version": "0.1.0",
    "name": "GetUnsolvedIssuesTwoDates",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste des issues ayant un status égal à unsolved entre deux dates.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/issues?startDate=22-01-2016&endDate=25-01-2016&status=unsolved",
        "type": "json"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Date1",
            "description": "<p>Date de début.</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "Date2",
            "description": "<p>date de fin.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues",
            "description": "<p>Liste des issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.id",
            "description": "<p>Id de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "issues.localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "issues.user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IssueNotFound",
            "description": "<p>Il n'y a aucune issue non-résolue entre ces deux dates.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Issue(s) not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues?startDate={date1}&endDate={date2}&status=unsolved"
      }
    ]
  },
  {
    "type": "post",
    "url": "/issues",
    "title": "09. Créer une nouvelle issue",
    "version": "0.1.0",
    "name": "PostIssue",
    "group": "Issues",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de créer une nouvelle Issue.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la nouvelle issue.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/issues/:id",
    "title": "10. Modifier une Issue éxistante.",
    "version": "0.1.0",
    "name": "PutIssue",
    "group": "Issues",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de modifier les paramètres d'une issue.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Type de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tags de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "localisation",
            "description": "<p>Tableau d'informations liées  à la localisation.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "localisation.type",
            "description": "<p>Type de géomètrie.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "localisation.coordinates",
            "description": "<p>Tableau d'informations liées  aux coordonées.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "descritpion",
            "description": "<p>Description de l'issues.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "photo",
            "description": "<p>Lien vers l'image présentant l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions entreprises.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "responsable.id",
            "description": "<p>Id du user responsable de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "user",
            "description": "<p>Information du user signalant l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>Id du user signalant l'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de la nouvelle issue.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/issues/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/user/:id",
    "title": "08. Supprimer un User éxistant.",
    "version": "0.1.0",
    "name": "DeleteUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de supprimer un user.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user supprimer.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/user/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users",
    "title": "01. Get users",
    "version": "0.1.0",
    "name": "GetUser",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir toutes les users enregistré sur notre API.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/users",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Liste des users.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "users.id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>(s)NotFound   Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/{id}",
    "title": "02. Get user via ID",
    "version": "0.1.0",
    "name": "GetUserById",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir un user spécifique via son ID.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nombre",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique des Users.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/user/01",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>L'<code>id</code> du User saisi n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/users/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users?issues=unsolved&issues=unrejected",
    "title": "05. Get user ayant le moins d'Issues",
    "version": "0.1.0",
    "name": "GetUserLeastIssues",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir une liste des users ayant le moins d'issues assignées.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost/user/01",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/users?issues=unsolved&issues=unrejected"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users?issues=solved",
    "title": "04. Get users résolvant le plus d'issues",
    "version": "0.1.0",
    "name": "GetUserSolvedMost",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir une liste de users ayant résolu le plus d'issues.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/users?issues=solved"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users?issues=nbrIssuesCreated",
    "title": "03. Get users avec le plus d'issues",
    "version": "0.1.0",
    "name": "GetUserWithMostIssues",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir une liste de users ayant soulevé le plus d'issues.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Nombre",
            "optional": false,
            "field": "nbrIssues",
            "description": "<p>Nombre d'Issues reliée à un User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nbrIssues",
            "description": "<p>Nombre d'issues soulevée par le User.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"User not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/users?issues=nbrIssuesCreated"
      }
    ]
  },
  {
    "type": "post",
    "url": "/user",
    "title": "06. Créer un nouveau User",
    "version": "0.1.0",
    "name": "PostUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de créer un nouveau User.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du nouvel utilisateur.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/user"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "07. Modifier un User éxistant.",
    "version": "0.1.0",
    "name": "PutUser",
    "group": "Users",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>Fonction permettant de modifier les paramètres d'un utilisateur.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birth",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>Role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user mis à jour.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://github.com/sarevok88/Teaching-HEIGVD-CM_WEBS-2016-Project/user/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNameTooShort",
            "description": "<p>Minimum of 5 characters required.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (example):",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"Le format ne correspond pas au modèle\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });