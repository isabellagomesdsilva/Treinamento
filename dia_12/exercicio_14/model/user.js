const { connectMongodb } = require("../database/connect");
const { connectRedis } = require("../database/redis");
const { ObjectId } = require("mongodb");

exports.createUser = async ({ name, email }) => {
  const { collection } = await connectMongodb("banco_de_dados", "users");
  const { insertedId } = await collection.insertOne({ name, email });
  return { data: { _id: insertedId, name, email }, status: 201 };
};
exports.getUsers = async (page = 0, limit = 10) => {
  /*
    - verifica no cache primeiro para depois ir no banco de dados
  */
  try {const client = await connectRedis();
  const key = `users - page: ${page} - limit: ${limit}`;
  const result = await client.get(key);
  if (result) return { data: JSON.parse(result), status: 200 };
  const { collection } = await connectMongodb("banco_de_dados", "users");
  const skip = page > 0 ? page * limit : 0;
  const [data] = await collection
    .aggregate([
      {
        $facet: {
          metaData: [{ $count: "total" }, { $addFields: { page } }],
          data: [{ $skip: skip }, { $limit: limit }],
        },
      },
    ])
    .toArray();
  await client.set(key, JSON.stringify(data));
  return { data, status: 200 };}
  catch {
    console.log("Error model getAll -> ", err.message)
  }
};
exports.getOneUser = async (id) => {
  try {const client = await connectRedis();
  const key = `users - id: ${id}`;
  const result = await client.get(key);
  if (result) return { data: JSON.parse(result), status: 200 };
  const { collection } = await connectMongodb("banco_de_dados", "users");
  const data = await collection.findOne({ _id: ObjectId(id) });
  await client.set(key, JSON.stringify(data));
  return { data, status: 200 };}
  catch{
    console.log("Error model getOne -> ", err.message)
  }
};
exports.putUser = async (id, { name, email }) => {
  try {const client = await connectRedis();
  const key = `users - id: ${id}`;
  await client.set(key, null);
  const { collection } = await connectMongodb("banco_de_dados", "users");
  await collection.updateOne({ _id: ObjectId(id) }, { $set: { name, email } });
  return { data: { _id: id, name, email }, status: 200 };
} catch {
  console.log("Error model putUser -> ", err.message)
}

};
exports.deleteUser = async (id) => {
  try {const client = await connectRedis();
  const key = `users - id: ${id}`;
  await client.set(key, null);
  const { collection } = await connectMongodb("banco_de_dados", "users");
  const dUser = await collection.findOne({ _id: ObjectId(id) });
  const data = await collection.deleteOne({ _id: ObjectId(id) });
  await collection.updateOne({ _id: ObjectId(id) }, { $set: { name, email } });
  return { data: dUser, status: 200 };
} catch {
  console.log("Error model deleteUser -> ", err.message)
}
};
exports.getOneEmail = async (email) => {
  try {const client = await connectRedis();
  const key = `users - email: ${email}`;
  const result = await client.get(key);
  if (result) return { data: JSON.parse(result), status: 200 };
  const { collection } = await connectMongodb("banco_de_dados", "users");
  const data = await collection.findOne({ email: email });
  await client.set(key, JSON.stringify(data));
  return { data, status: 200 };
} catch {
  console.log("Error model getOneEmail -> ", err.message)
}
};
