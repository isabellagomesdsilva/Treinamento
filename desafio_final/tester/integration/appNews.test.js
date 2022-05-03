const request = require("supertest");
const { ObjectId } = require("mongodb");
const app = require("../../app");
const { connectMongodb } = require("../../database/connect");
const { faker } = require("@faker-js/faker");

const randomTitle = faker.lorem.paragraph((nb_sentences = 1));
const randomBody = faker.lorem.paragraph((nb_sentences = 1));
const randomTitleCreate = faker.lorem.paragraph((nb_sentences = 1));
const randomBodyCreate = faker.lorem.paragraph((nb_sentences = 1));
const randomTitleCreateError = faker.lorem.paragraph((nb_sentences = 1));
const randomBodyCreateError = faker.lorem.paragraph((nb_sentences = 1));
const randomTitlePut = faker.lorem.paragraph((nb_sentences = 1));
const randomBodyPut = faker.lorem.paragraph((nb_sentences = 1));

const id = new ObjectId();

const _id = String(id);

let idCreated = null;

const agent = request.agent(app);

beforeEach(async () => {
  const { collection } = await connectMongodb("desafio", "noticias");
  const { insertedId } = await collection.insertOne({
    title: randomTitle,
    body: randomBody,
  });
  idCreated = insertedId;
});

afterAll(async () => {
  const { collection } = await connectMongodb("desafio", "noticias");
  await collection.deleteMany({});
});

test("request GET - /noticias expected to status 200, busca geral com sucesso.", async () => {
  const result = await agent.get("/noticias/all");
  expect(result.statusCode).toBe(200);
  expect(true).toBe(Array.isArray(result.body));
  expect(result.body).toEqual([
    { _id: String(idCreated), title: randomTitle, body: randomBody },
  ]);
});

test("request GET - /noticias/:id expected to status 400, formato id inválido.", async () => {
  const result = await agent.get(`/noticias/a`);
  expect(result.statusCode).toBe(400);
  expect(true).toBe(Array.isArray(result.body.MessageError));
  expect(result.body.MessageError.length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "a",
      msg: "Invalid value",
      param: "id",
      location: "params",
    },
  ]);
});

test("request GET - /noticias/:id expected to status 200, busca de usuário específico", async () => {
  const result = await agent.get(`/noticias/${idCreated}`);
  expect(result.statusCode).toBe(200);
  expect("object").toBe(typeof result.body);
  expect([result.body].length).toBe(1);
  expect(result.body).toEqual({
    _id: String(idCreated),
    title: randomTitle,
    body: randomBody,
  });
});

test("request GET - /noticias/:id expected to status 404, busca de usuário não existente", async () => {
  const result = await agent.get(`/noticias/${_id}`);
  expect(result.statusCode).toBe(404);
  expect("object").toBe(typeof result.body);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual("Usuário não cadastrado");
});

test("request POST - /noticias expected to status 201, cadastro realizado com sucesso.", async () => {
  const result = await agent
    .post(`/noticias`)
    .send({ title: randomTitleCreate, body: randomBodyCreate });
  expect(result.statusCode).toBe(201);
  expect([result.body].length).toBe(1);
  expect([result.body]).toEqual([
    {
      _id: result.body._id,
      title: randomTitleCreate,
      body: randomBodyCreate,
    },
  ]);
});

test("request POST - /noticias expected to status 400, campo title faltando.", async () => {
  const result = await agent
    .post(`/noticias`)
    .send({ title: "", body: randomBodyCreateError });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "title",
      location: "body",
    },
  ]);
});

test("request POST - /noticias expected to status 400, campo body faltando.", async () => {
  const result = await agent
    .post(`/noticias`)
    .send({ title: randomTitleCreateError, body: "" });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  console.log(result.body.MessageError);
  expect(result.body.MessageError).toEqual([
    { value: "", msg: "Invalid value", param: "body", location: "body" },
  ]);
});

test("request POST - /noticias expected to status 400.", async () => {
  const result = await agent.post(`/noticias`).send({});
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "title",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "body",
      location: "body",
    },
  ]);
});

test("request PUT - /noticias/:id expected to status 400, atualização de um id com formato inválido.", async () => {
  const result = await agent.put(`/noticias/a`);
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "a",
      msg: "Invalid value",
      param: "id",
      location: "params",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "title",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "body",
      location: "body",
    }
  ]);
});

test("request PUT - /noticias/:id expected to status 200, atualização realizada.", async () => {
  const result = await agent
    .put(`/noticias/${idCreated}`)
    .send({ title: randomTitlePut, body: randomBodyPut });
  expect(result.statusCode).toBe(200);
  expect([result.body].length).toBe(1);
  console.log(result.body)
  expect([result.body]).toEqual([
    {
      id: String(idCreated),
      title: randomTitlePut,
      body: randomBodyPut,
    },
  ]);
});

test("request PUT - /noticias/:id expected to status 400, atualização com o campo nome faltando.", async () => {
  const result = await agent
    .put(`/noticias/${idCreated}`)
    .send({ title: "", body: randomBodyCreateError });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "title",
      location: "body",
    },
  ]);
});

test("request PUT - /noticias/:id expected to status 400, atualização com o campo email faltando", async () => {
  const result = await agent
    .put(`/noticias/${idCreated}`)
    .send({ title: randomTitleCreateError, body: "" });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "body",
      location: "body",
    }
  ]);
});

test("request PUT - /noticias/:id expected to status 404, atualização de usuário inexistente", async () => {
  const result = await agent
    .put(`/noticias/${_id}`)
    .send({ title: randomTitleCreateError, body: randomBodyCreateError });
  expect(result.statusCode).toBe(404);
  expect("object").toBe(typeof result.body);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual("Usuário não cadastrado");
});

test("request DELETE - /noticias/:id expected to status 400, delete de usuário com id de formato inválido.", async () => {
  const result = await agent.delete(`/noticias/a`);
  expect(result.statusCode).toBe(400);
  expect(true).toBe(Array.isArray(result.body.MessageError));
  expect(result.body.MessageError.length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "a",
      msg: "Invalid value",
      param: "id",
      location: "params",
    },
  ]);
});

test("request DELETE - /noticias/:id expected to status 200, delete ok", async () => {
  const result = await agent.delete(`/noticias/${idCreated}`);
  expect(result.statusCode).toBe(200);
  expect([result.body].length).toBe(1);
  expect(result.body).toEqual({
    _id: String(idCreated),
    title: randomTitle,
    body: randomBody,
  });
});