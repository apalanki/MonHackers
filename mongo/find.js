module.exports = function(db, collectionName, callback) {
  // Get the documents collection
  var collection = db.collection(collectionName);
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
}
