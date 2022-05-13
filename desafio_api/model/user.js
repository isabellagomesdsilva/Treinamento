const { connectMongodb } = require("../database/connect");
const { ObjectId } = require("mongodb");

exports.getAllUsers = async (page = 0, limit = 10) => {
  const  collection  = await connectMongodb("pokedex", "pokeusers");
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
  return { data, status: 200 }
};

exports.getOneUser = async (id) => {
  const collection = await connectMongodb("pokedex", "pokeusers");
  const data = await collection.findOne({ name: `${id}` });
  return { data, status: 200 };
};

exports.getOneEmail = async (email) => {
  const collection  = await connectMongodb("pokedex", "pokeusers");
  const data = await collection.findOne({ email: `${email}` });
  return { data, status: 200 };
};

exports.createUser = async ({ email, senha }) => {
  const  collection  = await connectMongodb("pokedex", "pokeusers");
  const { insertedId } = await collection.insertOne({ email, senha });
  return { data: { _id: insertedId, email, senha }, status: 201 };
};

/* exports.putUser = async (id, { name, email }) => {
  const { collection } = await connectMongodb("pokedex", "pokeusers");
  await collection.updateOne({ _id: ObjectId(id) }, { $set: { name, email } });
  return { data: { _id: id, name, email }, status: 200 };
}; */

/* exports.deleteUser = async (id) => {
  const { collection } = await connectMongodb("pokedex", "pokeusers");
  const dUser = await collection.findOne({ _id: ObjectId(id) });
  const data = await collection.deleteOne({ _id: ObjectId(id) });
  return { data: dUser, status: 200 };
}; */
