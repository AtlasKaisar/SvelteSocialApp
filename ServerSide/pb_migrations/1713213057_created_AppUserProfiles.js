/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "psfzlx0700q6s14",
    "created": "2024-04-15 20:30:57.710Z",
    "updated": "2024-04-15 20:30:57.710Z",
    "name": "AppUserProfiles",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bdq2bsnt",
        "name": "Username",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 3,
          "max": 20,
          "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
        }
      },
      {
        "system": false,
        "id": "3gxtibzi",
        "name": "Email",
        "type": "email",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": [],
          "onlyDomains": []
        }
      },
      {
        "system": false,
        "id": "ghp7bzuu",
        "name": "Password",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 8,
          "max": 128,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dxgwuonq",
        "name": "Avatar",
        "type": "file",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg"
          ],
          "thumbs": [
            "100x100"
          ],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "3lbt9zw9",
        "name": "Status",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "qhcnews2",
        "name": "Last_Active",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "fw4zibua",
        "name": "Bio",
        "type": "editor",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "oyqxevix",
        "name": "Roles",
        "type": "select",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "Admin",
            "Moderator",
            "Member",
            "Guest",
            "VIP",
            "Verified"
          ]
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("psfzlx0700q6s14");

  return dao.deleteCollection(collection);
})
