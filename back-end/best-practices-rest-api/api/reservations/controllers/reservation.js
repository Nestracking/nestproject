// Ici tu définis plusieurs ACTIONS de controller : une pour ajouter, une pour mettre à jour, etc ...

module.exports = async function(req, res){
    Tank.deleteOne({ "_id.$oid" : req.query.id }, function (err) {
        if (err) return handleError(err);
        // deleted at most one tank document
      });
 }