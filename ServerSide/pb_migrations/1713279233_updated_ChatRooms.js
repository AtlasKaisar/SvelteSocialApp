/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y89nbjtqpagworf")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": "^[a-zA-Z0-9_\\s]{1,100}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y89nbjtqpagworf")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": "^[a-zA-Z0-9_]{1,100}$"
    }
  }))

  return dao.saveCollection(collection)
})
