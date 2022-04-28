const { createClient } = require("redis");
var connect = null;
exports.connectRedis = async () => {
  try {
    if (connect === null) {
      const client = createClient();
      await client.connect();
      await client.ping();
      connect = client;
      return connect
    }
    await connect.ping();
    return connect;
  } catch (err) {
    connect = null;
    throw new Error(err.message);
  }
};
