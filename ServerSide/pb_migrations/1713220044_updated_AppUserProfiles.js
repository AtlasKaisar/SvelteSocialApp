/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("psfzlx0700q6s14")

  collection.name = "Users"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("psfzlx0700q6s14")

  collection.name = "AppUserProfiles"

  return dao.saveCollection(collection)
})
