const { createClient } = require("redis");

const connectRedis = async () => {
      const client = createClient();
      await client.connect();
      await client.ping();
      return client
};

exports.getDataRedis = async(keyPrimary, key) => {
  try{ 
    const client = await connectRedis()
    const result = await client.hGetAll(keyPrimary)
    await client.disconnect()
    if(result && result[key]) return JSON.parse(result[key])
    return null
  } catch (error) {
    return null
  }
}

exports.setDataRedis = async (keyPrimary, key, data) => {
  try {
    const client = await connectRedis()
    await client.hSet(keyPrimary, key, JSON.stringify(data))
    await client.disconnect()
    return true
  } catch (error) {
    return false
  }
}
