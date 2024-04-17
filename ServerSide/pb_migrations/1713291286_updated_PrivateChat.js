/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fugl37t338cns5d")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xosnhtgx",
    "name": "Timestamp",
    "type": "date",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fugl37t338cns5d")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
