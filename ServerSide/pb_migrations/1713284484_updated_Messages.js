/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b1h1op6ktehujj")

  collection.name = "Group_Messages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b1h1op6ktehujj")

  collection.name = "Messages"

  return dao.saveCollection(collection)
})
