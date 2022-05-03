const {
  createPost,
  getPostsAll,
  getOnePost,
  putPost,
  deletePost,
  getJsonPosts,
  getJsonNews,
  getNewsAll,
  getNewsOne,
  createNews,
  putNews, 
  deleteNews
} = require("../model/user");

exports.getAllPosts = async (req, res) => {
  try {
    const { data, status } = await getJsonPosts();
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getAllPosts -> controller" });
  }
};

exports.getAllNews = async (req, res) => {
  try {
      
    const { qty } = req.query;
    const { data, status } = await getJsonNews(qty);
    console.log('estou aqui')
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getAllNews -> controller" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const { data, status } = await getPostsAll();
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getPosts -> controller" });
  }
};

exports.getNews = async (req, res) => {
    try {
      const { data, status } = await getNewsAll();
      return res.status(status).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro não esperado no getNews -> controller" });
    }
  };

exports.getOnePost = async (req, res) => {
  try {
    const { data, status } = await getOnePost(req.params.id);
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no getOnePost -> controller" });
  }
};

  exports.getOneNews = async (req, res) => {
    try {
      const { data, status } = await getNewsOne(req.params.id);
      return res.status(status).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro não esperado no getOneNews -> controller" });
    }
  };
  

exports.createPost = async (req, res) => {
  try {
    const { data, status } = await createPost(req.body);
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no create -> controller" });
  }
};

exports.createNews = async (req, res) => {
    try {
      const { data, status } = await createNews(req.body);
      return res.status(status).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro não esperado no create -> controller" });
    }
  };

exports.putPost = async (req, res) => {
  try {
    const { data, status } = await putPost(req.params.id, req.body);
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no put -> controller" });
  }
};
exports.putNews = async (req, res) => {
    try {
      const { data, status } = await putNews(req.params.id, req.body);
      return res.status(status).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro não esperado no put -> controller" });
    }
  };
exports.removePost = async (req, res) => {
  try {
    const { data, status } = await deletePost(req.params.id);
    return res.status(status).json(data);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Erro não esperado no remove -> controller" });
  }
};
exports.removeNews = async (req, res) => {
    try {
      const { data, status } = await deleteNews(req.params.id);
      return res.status(status).json(data);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Erro não esperado no remove -> controller" });
    }
  };
