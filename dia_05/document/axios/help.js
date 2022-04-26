const axios = require('axios')

exports.integrationHttp = (method, url, data) => axios({ method: method, url: url, data: data })
