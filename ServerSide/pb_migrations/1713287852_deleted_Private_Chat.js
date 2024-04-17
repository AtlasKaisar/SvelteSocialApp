/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("tymm3wmf2d6f1sd");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "tymm3wmf2d6f1sd",
    "created": "2024-04-16 16:30:42.337Z",
    "updated": "2024-04-16 16:30:42.337Z",
    "name": "Private_Chat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dg4xo4hg",
        "name": "ChatName",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": "^[a-zA-Z0-9_\\s]{1,100}$"
        }
      },
      {
        "system": false,
        "id": "xraljxwy",
        "name": "CreatedAt",
        "type": "date",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
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
})
