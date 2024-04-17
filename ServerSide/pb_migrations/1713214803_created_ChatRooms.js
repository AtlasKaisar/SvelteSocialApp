/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y89nbjtqpagworf",
    "created": "2024-04-15 21:00:03.625Z",
    "updated": "2024-04-15 21:00:03.625Z",
    "name": "ChatRooms",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9nlcpwr8",
        "name": "RoomName",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": "^[a-zA-Z0-9_ -]{1,100}$"
        }
      },
      {
        "system": false,
        "id": "d0csnvsm",
        "name": "Description",
        "type": "text",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 0,
          "max": 250,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bqwqlfw3",
        "name": "Members",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "psfzlx0700q6s14",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "7yq20eob",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y89nbjtqpagworf");

  return dao.deleteCollection(collection);
})
