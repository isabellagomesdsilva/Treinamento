const { connectMongodb } = require("../database/connect");
const { ObjectId } = require("mongodb");
const axios = require("axios");
const cheerio = require ('cheerio');
const res = require("express/lib/response");
const { connectRedis, getDataRedis, setDataRedis } = require("../database/redis");

const keyPrimary = "posts"
const keySecundary = "noticias"

exports.getJsonPosts = async () => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const { collection } = await connectMongodb("desafio", "posts");
    const result = await Promise.all(
      data.map(post => {
        return collection.insertOne({ title: post.title,  body: post.body, });
      })
    );
    return { data: result, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getJsonPosts -> model" });
  }
};

exports.getJsonNews = async (qty) => {
  try {
    const { data } = await axios.get(
      `https://www.ifpe.edu.br/noticias?b_start:int=${(qty || 0)*20}`
    );
    const $ = cheerio.load(data, null, false);

    const list = $(".summary.url,.description")
      .toArray()
      .map((value, index, Array) => {
        if (index % 2 == 0) {
          return { title: $(value).text(), body: $(Array[index + 1]).text() };
        }
      });
    const news = list.filter((value) => {
      return value != undefined;
    }); 
    const { collection } = await connectMongodb("desafio", "noticias");
    const result = await Promise.all(
      news.map(post => {
        return collection.insertOne({ title: post.title,  body: post.body, });
      }))
    return { data: result, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getJsonPosts -> model" });
  }
};

exports.getPostsAll = async (page = 0, limit = 10) => {
  try {
    const key = `posts - page: ${page} - limit: ${limit}`;
    const response = await getDataRedis(keyPrimary, key);
    if (response) return { data: response, status: 200 };
    const { collection } = await connectMongodb("desafio", "posts");
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
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getPostsAll -> model" });
  }
};

exports.getNewsAll = async (page = 0, limit = 10) => {
  try {
    const key = `noticias - page: ${page} - limit: ${limit}`;
    const response = await getDataRedis(keySecundary, key);
    if (response) return { data: response, status: 200 };
    const { collection } = await connectMongodb("desafio", "noticias");
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
    await setDataRedis(keySecundary, key, data);
    return { data, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getNewsAll -> model" });
  }
};

exports.getOnePost = async (id) => {
  try {
    const key = `posts - id: ${id}`;
    const result = await getDataRedis(keyPrimary, key);
    if (result) return { data: result, status: 200 };
    const { collection } = await connectMongodb("desafio", "posts");
    const data = await collection.findOne({ _id: ObjectId(id) });
    await setDataRedis(keyPrimary, key, data);
    return { data, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getOnePost -> model" });
  }
};

exports.getNewsOne = async (id) => {
  try {
    const key = `posts - id: ${id}`;
    const result = await getDataRedis(keySecundary, key);
    if (result) return { data: result, status: 200 };
    const { collection } = await connectMongodb("desafio", "noticias");
    const data = await collection.findOne({ _id: ObjectId(id) });
    await setDataRedis(keyPrimary, key, data);
    return { data, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getOnePost -> model" });
  }
};

exports.createPost = async ({ id, title, body }) => {
  try {
    const { collection } = await connectMongodb("desafio", "posts");
    const { insertedId } = await collection.insertOne({ title, body });
    return { data: { _id: insertedId, title, body }, status: 201 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no createPost -> model" });
  }
};

exports.createNews = async ({ id, title, body }) => {
  try {
    const { collection } = await connectMongodb("desafio", "noticias");
    const { insertedId } = await collection.insertOne({ title, body });
    return { data: { _id: insertedId, title, body }, status: 201 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no createPost -> model" });
  }
};
exports.putPost = async (id, { title, body }) => {
  try {
    const { collection } = await connectMongodb("desafio", "posts");
    await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { title, body } }
    );
    return { data: { id: id, title, body }, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no putPost -> model" });
  }
};

exports.putNews = async (id, { title, body }) => {
  try {
    const { collection } = await connectMongodb("desafio", "noticias");
    await collection.updateOne(
      { _id: ObjectId(id) },
      { $set: { title, body } }
    );
    return { data: { id: id, title, body }, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no putPost -> model" });
  }
};

exports.deletePost = async (id) => {
  try {
    const { collection } = await connectMongodb("desafio", "posts");
    const dUser = await collection.findOne({ _id: ObjectId(id) });
    const data = await collection.deleteOne({ _id: ObjectId(id) });
    return { data: dUser, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no deletePosts -> model" });
  }
};

exports.deleteNews = async (id) => {
  try {
    const { collection } = await connectMongodb("desafio", "noticias");
    const dNews = await collection.findOne({ _id: ObjectId(id) });
    const data = await collection.deleteOne({ _id: ObjectId(id) });
    return { data: dNews, status: 200 };
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no deletePosts -> model" });
  }
};
