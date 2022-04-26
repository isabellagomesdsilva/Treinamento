const { connectMongodb } = require("../database/connect");
const { ObjectId } = require("mongodb");

exports.createUser = async ({ name, email }) => {
  const collection = await connectMongodb("banco_de_dados", "users");
  const { insertId } = await collection.insertOne({ name, email });
  return { data: { _id: insertId, name, email }, status: 201 };
};
exports.getUsers = async () => {
  const collection = await connectMongodb("banco_de_dados", "users");
  const data = await collection.find().toArray();
  return { data, status: 200 };
};
exports.getOneUser = async (id) => {
  const collection = await connectMongodb("banco_de_dados", "users");
  const data = await collection.findOne({ _id: ObjectId(id) });
  return { data, status: 200 };
};
exports.putUser = async (id, { name, email }) => {
  const collection = await connectMongodb("banco_de_dados", "users");
  await collection.updateOne({ _id: ObjectId(id) }, { $set: { name, email } });
  return { data: { _id: id, name, email }, status: 200 };
};
exports.deleteUser = async (id) => {
  const collection = await connectMongodb("banco_de_dados", "users");
  const dUser = await collection.findOne({ _id: ObjectId(id) });
  const data = await collection.deleteOne({ _id: ObjectId(id) });
  return { data: dUser, status: 200 };
};
exports.getOneEmail = async (email) => {
  const collection = await connectMongodb("banco_de_dados", "users");
  const data = await collection.findOne({ email: email });
  return { data, status: 200 };
};

