module.exports = (function () {

var adapter = {
    identity: 'sails-empty',
    create: function(conn, coll, values, cb) {

      setTimeout(function() {
        cb(null, values);
      }, 0);
    }
};

return adapter;
})();
