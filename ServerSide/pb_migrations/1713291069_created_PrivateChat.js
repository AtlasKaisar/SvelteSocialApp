/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "fugl37t338cns5d",
    "created": "2024-04-16 18:11:09.452Z",
    "updated": "2024-04-16 18:11:09.452Z",
    "name": "PrivateChat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mgxaq39p",
        "name": "Participants",
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
        "id": "bjtuze3k",
        "name": "Messages",
        "type": "editor",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "convertUrls": false
        }
      },
      {
        "system": false,
        "id": "wfltomxg",
        "name": "Sender",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 2,
          "max": 20,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xosnhtgx",
        "name": "Timestamp",
        "type": "date",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("fugl37t338cns5d");

  return dao.deleteCollection(collection);
})
