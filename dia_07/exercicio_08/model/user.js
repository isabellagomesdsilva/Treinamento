const { Db } = require('mongodb')
const { connectMongodb } = require('../database/connect')

exports.getSearchs = async(busca) => {
     const collection = await connectMongodb('banco_de_dados', 'searchs')
     const data = await collection.find({$text: {$search: `${busca}`}}, {score:{$meta: "textScore"}}).sort({score: {$meta:"textScore"}}).toArray()
     return { data, status: 200 }
}

db.searchs.find({$or:[{$text: {$search: `d`}}]}) - FUNCIONA
db.searchs.find({$or:[{"name": /DNA/i}, {"body": /DNA/i}]}) - FUNCIONA
db.searchs.find({$or:[{$text: {$search: `d`}},{"name": /DNA/i}, {"body": /DNA/i}]}) - DA ERRO