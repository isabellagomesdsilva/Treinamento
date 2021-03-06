const { connectMongodb } = require("../database/connect");
const { connectRedis, getDataRedis, setDataRedis } = require("../database/redis");
const { ObjectId } = require("mongodb");

const keyPrimary = "users";

exports.createUser = async ({ name, email }) => {
  const { collection } = await connectMongodb("banco_de_dados", "users");
  const { insertedId } = await collection.insertOne({ name, email });
  return { data: { _id: insertedId, name, email }, status: 201 };
};
exports.getUsers = async (page = 0, limit = 10) => {
  /*
    - verifica no cache primeiro para depois ir no banco de dados
  */
  try {
    const key = `users - page: ${page} - limit: ${limit}`;
    const response = await getDataRedis(keyPrimary, key);
    if (response) return { data: response, status: 200 };
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
    await setDataRedis(keyPrimary, key, data);
    return { data, status: 200 };
  } catch {
    console.log("Error model getAll -> ", err.message);
  }
};
exports.getOneUser = async (id) => {
  try {
    const key = `users - id: ${id}`;
    const result = await getDataRedis(keyPrimary, key);

    if (result) return { data: result, status: 200 };

    const { collection } = await connectMongodb("banco_de_dados", "users");
    const data = await collection.findOne({ _id: ObjectId(id) });

    await setDataRedis(keyPrimary, key, data);
    return { data, status: 200 };
  } catch {
    console.log("Error model getOne -> ", err.message);
  }
};
exports.putUser = async (id, { name, email }) => {
  try {
    const { collection } = await connectMongodb("banco_de_dados", "users");
    await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { name, email } }
    );
    return { data: { _id: id, name, email }, status: 200 };
  } catch {
    console.log("Error model putUser -> ", err.message);
  }
};
exports.deleteUser = async (id) => {
  try {
    const { collection } = await connectMongodb("banco_de_dados", "users");
    const dUser = await collection.findOne({ _id: ObjectId(id) });
    const data = await collection.deleteOne({ _id: ObjectId(id) });
    await collection.deleteOne({ _id: ObjectId(id) });
    return { data: dUser, status: 200 };
  } catch {
    console.log("Error model deleteUser -> ", err.message);
  }
};
exports.getOneEmail = async (email) => {
  try {
    const key = `users - email: ${email}`;
    const result = await getDataRedis(keyPrimary);

    if (result) return { data: result, status: 200 };

    const { collection } = await connectMongodb("banco_de_dados", "users");
    const data = await collection.findOne({ email: email });

    await setDataRedis(keyPrimary, key, data);
    return { data, status: 200 };
  } catch {
    console.log("Error model getOneEmail -> ", err.message);
  }
};
