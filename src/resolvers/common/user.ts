const jwt = require('jwt-simple')


module.exports = {
    getUser(user) {
        const now = Math.floor(Date.now() / 1000)
        const userInfo = {
            id: user.id,
            name: user.name,
            email: user.email,
            iat: now,
            exp: now + (3*24*60*60)
        }

        const authSecret = process.env.APP_AUTH_SECRET
        return {
            ...userInfo,
            auth: jwt.encode(userInfo, authSecret)
        }
    }
}