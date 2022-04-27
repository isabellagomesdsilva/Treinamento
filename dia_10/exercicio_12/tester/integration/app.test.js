const request = require("supertest");
const { ObjectId } = require("mongodb");
const app = require("../../app");
const { connectMongodb } = require("../../database/connect");
const { faker } = require("@faker-js/faker");

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomNameCreate = faker.name.findName();
const randomEmailCreate = faker.internet.email();
const randomNameCreateError = faker.name.findName();
const randomEmailCreateError = faker.internet.email();
const randomNamePut = faker.name.findName();
const randomEmailPut = faker.internet.email();

const id = new ObjectId();

const _id = String(id);

let idCreated = null;

const agent = request.agent(app);

beforeEach(async () => {
  const collection = await connectMongodb("banco_de_dados", "users");
  const { insertedId } = await collection.insertOne({
    name: randomName,
    email: randomEmail,
  });
  idCreated = insertedId;
});

afterAll(async () => {
  const collection = await connectMongodb("banco_de_dados", "users");
  await collection.deleteMany({});
});

test("request GET - /user expected to status 200.", async () => {
  const result = await agent.get("/user");
  expect(result.statusCode).toBe(200);
  expect(true).toBe(Array.isArray(result.body));
  expect(result.body.length).toBe(1);
  expect(result.body).toEqual([
    { _id: String(idCreated), name: randomName, email: randomEmail },
  ]);
});

test("request GET - /user/:id expected to status 400, formato id inválido.", async () => {
  const result = await agent.get(`/user/a`);
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

test("request GET - /user/:id expected to status 200, busca de usuário específico", async () => {
  const result = await agent.get(`/user/${idCreated}`);
  expect(result.statusCode).toBe(200);
  expect("object").toBe(typeof result.body);
  expect([result.body].length).toBe(1);
  expect(result.body).toEqual({
    _id: String(idCreated),
    name: randomName,
    email: randomEmail,
  });
});

test("request GET - /user/:id expected to status 404, busca de usuário não existente", async () => {
  const result = await agent.get(`/user/${_id}`);
  expect(result.statusCode).toBe(404);
  expect("object").toBe(typeof result.body);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual("Usuário não cadastrado");
});

test("request POST - /user expected to status 201, cadastro realizado com sucesso.", async () => {
  const result = await agent
    .post(`/user`)
    .send({ name: randomNameCreate, email: randomEmailCreate });
  expect(result.statusCode).toBe(201);
  expect([result.body].length).toBe(1);
  expect([result.body]).toEqual([
    {
      _id: result.body._id,
      name: randomNameCreate,
      email: randomEmailCreate,
    },
  ]);
});

test("request POST - /user expected to status 400, email já cadastrado.", async () => {
  const result = await agent
    .post(`/user`)
    .send({ name: randomEmailCreate, email: randomEmailCreate });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual("Email já cadastrado!");
});

test("request POST - /user expected to status 400, campo nome faltando.", async () => {
  const result = await agent
    .post(`/user`)
    .send({ name: "", email: randomEmailCreateError });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "name",
      location: "body",
    },
  ]);
});

test("request POST - /user expected to status 400, campo email faltando.", async () => {
  const result = await agent
    .post(`/user`)
    .send({ name: "Isabella", email: "" });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
  ]);
});

test("request POST - /user expected to status 400.", async () => {
  const result = await agent
    .post(`/user`)
    .send({ name: randomNameCreateError, email: "isabella.gmail.com" });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "isabella.gmail.com",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
  ]);
});

test("request POST - /user expected to status 400.", async () => {
  const result = await agent.post(`/user`).send({});
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "name",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
  ]);
});

test("request PUT - /user/:id expected to status 400, atualização de um id com formato inválido.", async () => {
  const result = await agent.put(`/user/a`);
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
      param: "name",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
    {
      value: "",
      msg: "Invalid value",
      param: "email",
      location: "body",
    },
  ]);
});

test("request PUT - /user/:id expected to status 200, atualização realizada.", async () => {
  const result = await agent
    .put(`/user/${idCreated}`)
    .send({ name: randomNamePut, email: randomEmailPut });
  expect(result.statusCode).toBe(200);
  expect([result.body].length).toBe(1);
  expect([result.body]).toEqual([
    {
      _id: String(idCreated),
      name: randomNamePut,
      email: randomEmailPut,
    },
  ]);
});

test("request PUT - /user/:id expected to status 400, atualização com um email já cadastrado.", async () => {
  const result = await agent
    .put(`/user/${idCreated}`)
    .send({ name: randomNameCreate, email: randomEmail });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual("Email já cadastrado!");
});

test("request PUT - /user/:id expected to status 400, atualização com o campo nome faltando.", async () => {
  const result = await agent
    .put(`/user/${idCreated}`)
    .send({ name: "", email: randomEmailCreateError });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual([
    {
      value: "",
      msg: "Invalid value",
      param: "name",
      location: "body",
    },
  ]);
});

test("request PUT - /user/:id expected to status 400, atualização com o campo email faltando", async () => {
  const result = await agent
    .put(`/user/${idCreated}`)
    .send({ name: randomEmailCreateError, email: "" });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual(
  [
    {
      value: '',
      msg: 'Invalid value',
      param: 'email',
      location: 'body'
    },
    {
      value: '',
      msg: 'Invalid value',
      param: 'email',
      location: 'body'
    }
  ])
});

test("request PUT - /user/:id expected to status 400, atualização com um email errado.", async () => {
  const result = await agent
    .put(`/user/${idCreated}`)
    .send({ name: randomNameCreateError, email: "isabella.gmail.com" });
  expect(result.statusCode).toBe(400);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual(
  [
    {
      value: 'isabella.gmail.com',
      msg: 'Invalid value',
      param: 'email',
      location: 'body'
    }
  ])
});

test("request PUT - /user/:id expected to status 404, atualização de usuário inexistente", async () => {
  const result = await agent
    .put(`/user/${_id}`)
    .send({ name: "Isabella", email: "isabellags@gmail.com" });
  expect(result.statusCode).toBe(404);
  expect("object").toBe(typeof result.body);
  expect([result.body].length).toBe(1);
  expect(result.body.MessageError).toEqual("Usuário não cadastrado");
});

test("request DELETE - /user/:id expected to status 400, delete de usuário com id de formato inválido.", async () => {
  const result = await agent.delete(`/user/a`);
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

test("request DELETE - /user/:id expected to status 200, delete ok", async () => {
  const result = await agent.delete(`/user/${idCreated}`);
  expect(result.statusCode).toBe(200);
  expect([result.body].length).toBe(1);
  expect(result.body).toEqual({
    _id: String(idCreated),
    name: randomName,
    email: randomEmail,
  });
});
