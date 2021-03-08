const { MongoClient } = require("mongodb");
const uri  = 'mongodb://localhost:27017/';

var _db;
// Create a new MongoClient
const client = new MongoClient(uri);

module.exports = {
   connectToServer: async function() {
         await client.connect();
        _db = await client.db('lb-data');
    },

    getDb: function() {
        return _db;
    }

}