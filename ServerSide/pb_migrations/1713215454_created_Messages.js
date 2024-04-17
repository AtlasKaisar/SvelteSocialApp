/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6b1h1op6ktehujj",
    "created": "2024-04-15 21:10:54.881Z",
    "updated": "2024-04-15 21:10:54.881Z",
    "name": "Messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x2alxhql",
        "name": "Content",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ytaymdo4",
        "name": "Sender",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "psfzlx0700q6s14",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "awhpzhm0",
        "name": "Room",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "y89nbjtqpagworf",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "dnt7e8ep",
        "name": "Timestamp",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6b1h1op6ktehujj");

  return dao.deleteCollection(collection);
})
