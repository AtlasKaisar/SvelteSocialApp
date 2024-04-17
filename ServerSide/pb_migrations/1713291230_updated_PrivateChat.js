/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fugl37t338cns5d")

  // remove
  collection.schema.removeField("wfltomxg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zvedryhq",
    "name": "Receiver",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mgxaq39p",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fugl37t338cns5d")

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("zvedryhq")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
