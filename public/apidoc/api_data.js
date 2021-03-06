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
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/comments/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
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
            "type": "number",
            "optional": false,
            "field": "comments.Id",
            "description": "<p>Id du comment.</p>"
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
            "field": "NoCommentsFound",
            "description": "<p>Il n'y a pas de comment sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):     ",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/comments"
      }
    ]
  },
  {
    "type": "get",
    "url": "/comments/:id",
    "title": "02. Get comment via son Id.",
    "version": "0.1.0",
    "name": "GetCommentsById",
    "group": "Comments",
    "description": "<p>Fonction permettant d'obtenir un comments via son ID.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost:3000/api/comments/56d05eefa0b1214c16facb19",
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
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
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
            "field": "Error500",
            "description": "<p>L'<code>id</code> du comment saisi n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (Error 500):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"{value}\\\" at path \\\"_id\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/comments/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/comments?issueId=:id",
    "title": "03. Get comment via issue Id.",
    "version": "0.1.0",
    "name": "GetCommentsByIssueId",
    "group": "Comments",
    "description": "<p>Fonction permettant d'obtenir les comments appartenant à une issue spécifique via son ID.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "curl -i http://localhost:3000/api/comments?issueId=56d05eefa0b1214c16facb19",
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
            "field": "id",
            "description": "<p>Identifiant unique de l'issue.</p>"
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
            "type": "number",
            "optional": false,
            "field": "comments.Id",
            "description": "<p>Id du comment.</p>"
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
            "field": "Error500",
            "description": "<p>L'<code>id</code> de l'issue saisie n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (Error 500):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"{value}\\\" at path \\\"_id\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Comments",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/comments?issueId=:id"
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
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
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
        "url": "http://localhost:3000/api/comments"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
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
            "type": "number",
            "optional": false,
            "field": "Id",
            "description": "<p>Id du comment.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "authorId",
            "description": "<p>Id de l'auteur du comment.</p>"
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
        "url": "http://localhost:3000/api/comments/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
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
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>Id de l'issue.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-2",
            "description": "<p>L'<code>id</code> de l'élément saisi n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-2):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\":id\\\" at path \\\"_id\\\"\n}",
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
        "content": "http://localhost:3000/api/actions?issueId=01",
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
        "url": "http://localhost:3000/api/actions?issueId={id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues/:id",
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
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Identifiant unique de l'issue.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "http://localhost:3000/api/issues/56d2d706e76014600d42f982",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
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
            "field": "Error500",
            "description": "<p>L'<code>id</code> de l'issue saisie n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (Error 500):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"{value}\\\" at path \\\"_id\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues/:id"
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
            "type": "String",
            "optional": false,
            "field": "issues._id",
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
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Id du user responsable de l'issue.</p>"
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
            "field": "NoIssueFound",
            "description": "<p>Il n'y a pas d'Issue sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):     ",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?issuesType=:type",
    "title": "04. Get issues appartenant à un type spécifique.",
    "version": "0.1.0",
    "name": "GetIssuesByType",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste d'issues appartenant à un type donné.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "http://localhost:3000/api/issues?issuesType=dégat",
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
            "type": "String",
            "optional": false,
            "field": "issues._id",
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
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Id du user responsable de l'issue.</p>"
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
            "field": "Error500",
            "description": "<p>Le<code>type</code> de l'issue saisie n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (Error 500):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"{type}\\\" at path \\\"type\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues?issuesType=:type"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?userId=:id",
    "title": "03. Get issues soulevée par un user.",
    "version": "0.1.0",
    "name": "GetIssuesByUser",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste d'issues soulevée par un user.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "http://localhost:3000/api/issues?userId=56d2d706e76014600d42f982",
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
            "description": "<p>Identifiant unique du user.</p>"
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
            "type": "String",
            "optional": false,
            "field": "issues._id",
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
            "field": "issues.status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "issues.user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "issues.action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "type": "object[]",
            "optional": false,
            "field": "issues.tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "issues.responsable",
            "description": "<p>Id du user responsable de l'issue.</p>"
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
            "field": "Error500",
            "description": "<p>L'<code>id</code> de l'issue saisie n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (Error 500):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"{value}\\\" at path \\\"_id\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues?userId=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?coordX=:value1&coordY=:value2&rad=:valueRadius",
    "title": "08. Get liste des issues dans une région.",
    "version": "0.1.0",
    "name": "GetIssuesInRadius",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste des issues dans un rayon défini autour d'une coordonée.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "http://localhost:3000/api/issues?coordX=0.333&coordY=3.222&rad=0.2",
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
            "field": "value1",
            "description": "<p>Coordonée en X.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "value2",
            "description": "<p>Coordonée en Y.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "valueRadius",
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
            "type": "String",
            "optional": false,
            "field": "_id",
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
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
        "url": "http://localhost:3000/api/issues?coordX=:value1&coordY=:value2&rad=:valueRadius"
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
            "type": "String",
            "optional": false,
            "field": "_id",
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
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
        "url": "http://localhost:3000/api/issues?startDate={date1}&endDate={date2}&status=solved"
      }
    ]
  },
  {
    "type": "get",
    "url": "/issues?startDate=:date1&endDate=:date2&status=unsolved",
    "title": "07. Get liste des issues non-résolue entre deux dates.",
    "version": "0.1.0",
    "name": "GetUnsolvedIssuesTwoDates",
    "group": "Issues",
    "description": "<p>Fonction permettant d'obtenir une liste des issues ayant un status égal à unsolved entre deux dates.</p>",
    "examples": [
      {
        "title": "Exemple d'utilisation:",
        "content": "http://localhost/issues?startDate=22-01-2016&endDate=25-01-2016&status=unsolved",
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
            "type": "String",
            "optional": false,
            "field": "_id",
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
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
        "url": "http://localhost:3000/api/issues?startDate=:date1&endDate=:date2&status=unsolved"
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
            "field": "_id",
            "description": "<p>Id de l'issue.</p>"
          },
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error400-2",
            "description": "<p>L'<code>id</code> du user est nécessaire.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
          "type": "json"
        },
        {
          "title": "Response (Error400-2):",
          "content": "Error 400: Bad Request\n{\n  User ID is required\n}",
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
            "field": "_id",
            "description": "<p>Id de l'issue.</p>"
          },
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Parameter",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
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
            "field": "status",
            "description": "<p>Statut de l'issue.</p>"
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
            "type": "String",
            "optional": false,
            "field": "user",
            "description": "<p>Id du user signalant l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "action",
            "description": "<p>Tableau d'information liées au actions effectuées.</p>"
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
            "field": "responsable",
            "description": "<p>Information du user s'occupant de l'issue.</p>"
          },
          {
            "group": "Success 200",
            "type": "object[]",
            "optional": false,
            "field": "tags",
            "description": "<p>Tableau des tags liés à l'issue.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Issues",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/issues/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-2",
            "description": "<p>L'<code>id</code> de l'élément saisi n'a pas été trouvé.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error400-2",
            "description": "<p>L'<code>id</code> du user est nécessaire.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
          "type": "json"
        },
        {
          "title": "Response (Error500-2):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\":id\\\" at path \\\"_id\\\"\n}",
          "type": "json"
        },
        {
          "title": "Response (Error400-2):",
          "content": "Error 400: Bad Request\n{\n  User ID is required\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:id",
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
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-2",
            "description": "<p>L'<code>id</code> de l'élément saisi n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-2):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\":id\\\" at path \\\"_id\\\"\n}",
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
    "description": "<p>Fonction permettant d'obtenir tous les users enregistré sur notre API.</p>",
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
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.forname",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.surname",
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
            "field": "users.dob",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.role",
            "description": "<p>Liste des Roles du User.</p>"
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
            "field": "NoUsersFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):     ",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users/:id",
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
            "type": "String",
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
        "content": "http://localhost:3000/api/users/56d05eefa0b1214c16facb19",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forname",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
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
            "field": "dob",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
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
            "field": "Error500",
            "description": "<p>L'<code>id</code> du User saisi n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (Error 500):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\"{value}\\\" at path \\\"_id\\\"\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users?issues=unsolved&issues=unrejected",
    "title": "05. Get user ayant le moins d'Issues réglée",
    "version": "0.1.0",
    "name": "GetUserLeastIssues",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir une le user ayant le moins d'issues réglée.</p>",
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
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.forname",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.surname",
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
            "field": "users.dob",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.role",
            "description": "<p>Liste des Roles du User.</p>"
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
            "field": "NoUsersFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):     ",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users?issues=unsolved&issues=unrejected"
      }
    ]
  },
  {
    "type": "get",
    "url": "/users?issues=:status",
    "title": "04. Get users résolvant le plus d'issues",
    "version": "0.1.0",
    "name": "GetUserSolvedMost",
    "group": "Users",
    "description": "<p>Fonction permettant d'obtenir une liste de users ayant résolu le plus d'issues.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Statut de l'issues qui doit être solved.</p>"
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
            "field": "users",
            "description": "<p>Liste des users.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.forname",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.surname",
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
            "field": "users.dob",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "users.email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users.role",
            "description": "<p>Liste des Roles du User.</p>"
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
            "field": "NoUsersFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):     ",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users?issues=:status"
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
    "description": "<p>Fonction permettant d'obtenir le users ayant soulevé le plus d'issues.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id du user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forname",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
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
            "field": "dob",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
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
            "field": "NoUsersFound",
            "description": "<p>Il n'y a pas de User sur votre base de donnée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Réponse (exemple):     ",
          "content": "[]",
          "type": "json"
        }
      ]
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users?issues=nbrIssuesCreated"
      }
    ]
  },
  {
    "type": "post",
    "url": "/users",
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
            "field": "forname",
            "description": "<p>Prénom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
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
            "field": "dob",
            "description": "<p>Date de naissance du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "email",
            "description": "<p>Email du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
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
            "type": "String",
            "optional": false,
            "field": "forname",
            "description": "<p>Prénom du nouvel utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Nom du nouvel utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme du nouvel utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Date de naissance du nouvel utilisateur (jj-mm-aaaa).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email du nouvel utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id du nouvel utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "role",
            "description": "<p>Role du nouvel utilisateur.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/users/:id",
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
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "forname",
            "description": "<p>Nouveau prénom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Nouveau nom du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Nouveau pseudonyme du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Nouvelle date de naissance du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "email",
            "description": "<p>Nouvel email du User.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "role",
            "description": "<p>Nouveau role du User (staff ou citoyen).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "forname",
            "description": "<p>Prénom à jour de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surname",
            "description": "<p>Nom à jour de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nickname",
            "description": "<p>Pseudonyme à jour de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>Date de naissance à jour de l'utilisateur (jj-mm-aaaa).</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email à jour de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Id à jour de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "role",
            "description": "<p>Role à jour de l'utilisateur.</p>"
          }
        ]
      }
    },
    "filename": "doc/example.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "http://localhost:3000/api/users/:id"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-1",
            "description": "<p>Le format de données saisies n'est pas valide.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Error500-2",
            "description": "<p>L'<code>id</code> de l'élément saisi n'a pas été trouvé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response (Error500-1):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Element validation failed\"\n}",
          "type": "json"
        },
        {
          "title": "Response (Error500-2):",
          "content": "Error 500: Internal Server Error\n{\n  \"message\": \"Cast to ObjectId failed for value \\\":id\\\" at path \\\"_id\\\"\n}",
          "type": "json"
        }
      ]
    }
  }
] });
