const request = require ('supertest');
const app = require('../../app')

const agent = request.agent(app);

test('request GET - /user expected to status 200.', async() => {
    const result = await agent.get('/user')
    expect(result.statusCode).toBe(200)
})

test('request GET - /user/:id expected to status 400.', async() => {
    const result = await agent.get(`/user/a`)
    expect(result.statusCode).toBe(400)
})

test('request GET - /user/62606e658ac3994fc3a4aac5 expected to status 200', async () => {
    const result = await agent.get(`/user/62606e658ac3994fc3a4aac5`)
    expect(result.statusCode).toBe(200)
})

test('request GET - /user/62606e658ac3994fc3a4aac3 expected to status 404', async () => {
    const result = await agent.get(`/user/62606e658ac3994fc3a4aac3`)
    expect(result.statusCode).toBe(404)
})

test('request POST - /user expected to status 201.', async() => {
    const result = await agent.post(`/user`).send({name:"Isabella", email:"iiiii@gmail.com"})
    expect(result.statusCode).toBe(201)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:"Isabella", email:"isabella@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:"", email:"isabella@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:" ", email:"isabella@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:"@i", email:"isabella@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:"Isabella", email:""})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:"Isabella", email:" "})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({name:"Isabella", email:"isabella.gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request POST - /user expected to status 400.', async() => {
    const result = await agent.post(`/user`).send({ })
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/:id expected to status 400.', async() => {
    const result = await agent.put(`/user/a`)
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 200', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"Isabella", email:"isabella_silva@gmail.com"})
    expect(result.statusCode).toBe(200)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"Isabella", email:"isabellagomes@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"", email:"isabellagomes@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:" ", email:"isabellagomes@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"i@", email:"isabellagomes@gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"Isabella", email:""})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"Isabella", email:" "})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac5 expected to status 400', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac5`).send({name:"Isabella", email:"isabella.gmail.com"})
    expect(result.statusCode).toBe(400)
})

test('request PUT - /user/62606e658ac3994fc3a4aac3 expected to status 404', async () => {
    const result = await agent.put(`/user/62606e658ac3994fc3a4aac3`).send({name:"Isabella", email:"isabellags@gmail.com"})
    expect(result.statusCode).toBe(404)
})

test('request DELETE - /user/:id expected to status 400.', async() => {
    const result = await agent.delete(`/user/a`)
    expect(result.statusCode).toBe(400)
})

test('request DELETE - /user/626075037162ba398cc6d22c expected to status 200', async () => {
    const result = await agent.delete(`/user/626075037162ba398cc6d22c`)
    expect(result.statusCode).toBe(200)
})