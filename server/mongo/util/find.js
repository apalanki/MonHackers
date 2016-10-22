module.exports = function(db, collectionName, query, callback) {
  var collection = db.collection(collectionName);
  collection.find(query).toArray(function(err, docs) {
    callback(err, docs);
  });
};