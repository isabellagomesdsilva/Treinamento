const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

var connect = null;

exports.connectMongodb = async (dbName, collection) => {
  if (connect === null) {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    return connect = client.db(dbName);
  }
  if (connect != null) {
    await connect.command({ ping: 1 });
  }
  return {
    collection: connect.collection(collection),
  };
};
