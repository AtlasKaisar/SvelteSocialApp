/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("psfzlx0700q6s14")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": "^[a-zA-Z0-9_\\s]{3,20}$"
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("psfzlx0700q6s14")

  // update
  collection.schema.addField(new SchemaField({
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
      "pattern": "^[a-zA-Z0-9_]{3,20}$"
    }
  }))

  return dao.saveCollection(collection)
})
