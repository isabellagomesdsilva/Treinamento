const axios = require('axios')
const integrationHttp = (method, url, data) => axios({method: method, url: url, data: data})