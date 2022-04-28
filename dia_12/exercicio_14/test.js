(async () => {
    const { connectRedis } = require('./database/redis')
    const connect = await connectRedis()
    const value = await connect.get('users');
    console.log("value", value)
})()