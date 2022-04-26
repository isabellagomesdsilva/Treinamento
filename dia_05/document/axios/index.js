var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://624df93353326d0cfe55cbf7.mockapi.io/users',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status

PROTOCOLO: HTTPS
PORT: 443
HOST: developer.mozilla.org
PATH: /pt-BR/docs/Web/HTTP/Status


https://redfox.tech/blog/category/transformacao-digital/

PROTOCOLO: HTTPS
PORT: 443
HOST: redfox.tech
PATH: /blog/category/transformacao-digital

https://www.google.com/search?q=pesquisar+alguma+coisa+

PROTOCOLO: HTTPS
PORT: 443
HOST: www.google.com
PATH: /search
QUERY_PARAMTER: ?q=pesquisar+alguma+coisa+


https://higordiego.com.br/?post=golang&email=higor

PROTOCOLO: HTTPS
HOST: higordiego.com.br
PORT: 443
PATH: /
QUERY_PARAMTER: ?post=golang&email=higor
{
    post: 'golang'
    email: 'higor'
}

https://higordiego.com.br:3000/posts

PROTOCOLO: HTTPS
HOST: higordiego.com.br
PORT: 3000
PATH: /posts
QUERY_PARAMTER: null

