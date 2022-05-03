const {getAllPosts, getPosts, createPost, putPost, getAllNews, getNews, getOnePost, getOneNews, createNews, putNews, removePost, removeNews} = require("../controller/user");
const {paramsId, validateCreate, validateError, validateFoundByIdNews, validateFoundByIdPosts, validateGetAllNews, validateGetAllPost } = require('../middleware/user');

module.exports = (app) => {
  app.get("/posts", getAllPosts);
  app.get("/noticias", getAllNews);
  app.get("/posts/all", validateGetAllPost, getPosts);
  app.get("/noticias/all", validateGetAllNews, getNews);
  app.get("/noticias/:id", paramsId, validateError, validateFoundByIdNews, getOneNews);
  app.get("/posts/:id", paramsId, validateError, validateFoundByIdPosts, getOnePost);
  app.post("/posts", validateCreate, validateError, createPost);
  app.post("/noticias", validateCreate, validateError, createNews);
  app.put("/posts/:id", paramsId, validateCreate, validateError, validateFoundByIdPosts, putPost);
  app.put("/noticias/:id", paramsId, validateCreate, validateError, validateFoundByIdNews, putNews);
  app.delete("/posts/:id", paramsId, validateError, validateFoundByIdPosts, removePost);
  app.delete("/noticias/:id", paramsId, validateError, validateFoundByIdNews, removeNews);
};
