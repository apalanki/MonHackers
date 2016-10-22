module.exports = function(db, collectionName, callback) {
  var collection = db.collection(collectionName);
  collection.find({}).toArray(function(err, docs) {
    callback(err, docs);
  });
};