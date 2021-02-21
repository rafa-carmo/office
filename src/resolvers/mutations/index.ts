const User = require('./user')
const Type = require('./type')

module.exports = {
        ...User,
        ...Type
}
