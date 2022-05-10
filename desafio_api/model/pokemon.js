const { connectMongodb } = require("../database/connect");
const { ObjectId } = require("mongodb");

exports.getAllPokemon = async (page = 0, limit = 10) => {
  const { collection } = await connectMongodb("pokedex", "pokemons");
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
  return { data, status: 200 };
};

exports.getOnePokemon = async (name) => {
  const { collection } = await connectMongodb("pokedex", "pokemons");
  const data = await collection.findOne({ Name: name });
  return { data, status: 200 };
};

exports.createPokemon = async (bodyPoke) => {
  const { collection } = await connectMongodb("pokedex", "pokemons");
  const { insertedId } = await collection.insertOne(bodyPoke);
  return { data: { _id: insertedId, ...bodyPoke }, status: 201 };
};

exports.putPokemon = async (id, bodyPoke) => {
  const { collection } = await connectMongodb("pokedex", "pokemons");
  console.log(bodyPoke)
  await collection.updateOne({ _id: ObjectId(id) }, { $set: bodyPoke });
  return { data: { _id: id, bodyPoke }, status: 200 };
}; 

exports.deletePokemon = async (id) => {
  const { collection } = await connectMongodb("pokedex", "pokemons");
  const dUser = await collection.findOne({ _id: ObjectId(id) });
  const data = await collection.deleteOne({ _id: ObjectId(id) });
  return { data: dUser, status: 200 };
};