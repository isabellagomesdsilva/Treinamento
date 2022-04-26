const {integrationHttp} = require('../service/http')

const url = 'https://624df93353326d0cfe55cbf7.mockapi.io/users'

exports.createUser = ({name, email}) => {
    return integrationHttp (url, 'POST', {name, email})
}
exports.getUsers = () => {
     return integrationHttp (url, 'GET')
}
exports.getOneUser = (id) => {
     return integrationHttp(`${url}/${id}`, 'GET')
}
exports.putUser = (id, {name, email}) => {
     return integrationHttp(`${url}/${id}`, 'PUT', {name, email})
}
exports.deleteUser = (id) => {
    return integrationHttp(`${url}/${id}`, 'DELETE')
}
