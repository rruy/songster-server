const Author = require('../models/Author');

exports.authors_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

exports.author_songs = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

