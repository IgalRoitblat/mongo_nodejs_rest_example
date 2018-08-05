use companies

> db.hightech.insertMany([{name: 'SimilarWeb', empl: 350, salary: 25000}, {name: 'Yotpo', empl: 300, salary: 20000}, {name: 'Taboola', empl: 600, salary: 31000}])

//GET ALL
> db.hightech.find()
{ "_id" : ObjectId("5b66a8e8321233033489e565"), "name" : "SimilarWeb", "empl" : 350, "salary" : 25000 }
{ "_id" : ObjectId("5b66a8e8321233033489e566"), "name" : "Yotpo", "empl" : 300, "salary" : 20000 }
{ "_id" : ObjectId("5b66a8e8321233033489e567"), "name" : "Taboola", "empl" : 600, "salary" : 31000 }

//GET ONE
> db.hightech.find({"_id": ObjectId("5b66a8e8321233033489e565")})

//POST INSERT
db.hightech.insert({name: 'AppsFlyer', empl: 700, salary: 23000})

//PUT UPDATE
db.hightech.update({"_id": ObjectId("5b66a9bc321233033489e568")}, {'$set': {empl: 623}})

//DELETE
db.hightech.deleteOne({"_id": ObjectId("5b66a9bc321233033489e568")})

