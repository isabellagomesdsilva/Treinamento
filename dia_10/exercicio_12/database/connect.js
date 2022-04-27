const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

var connect = null;

const retry = 5

const sleep = (timing) => new Promise((resolve) => 
setTimeout(() => { resolve()}, timing))

const retryConnect = async (dbName, collection, tryN = 1) => {
    try{
        if (connect === null) {
          await client.connect();
          await client.db("admin").command({ ping: 1 });
          connect = client.db(dbName);
        }
        if (connect != null) {
          await connect.command({ ping: 1 });
        }
        return {
          collection: connect.collection(collection),
        };
      } catch (err) {
          connect = null
         if (tryN > retry) throw new Error (err.message)
         await sleep(1000)
         return retryConnect(dbName, collection, tryN + 1)
      }

}
exports.connectMongodb = async (dbName, collection) => {
  return retryConnect(dbName, collection) 
};
