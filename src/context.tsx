module.exports = async ({req}) => {
    
const { PrismaClient } = require('@prisma/client')
const jwt = require('jwt-simple') 
const bcrypt = require('bcrypt-nodejs')

const prisma = new PrismaClient()


const auth = req.headers.authorization
const token = auth && auth.substring(7)

let user = null
let userLogged = 0
let admin = false

if (token) {
    try { 

        let tokenContent = jwt.decode(token,process.env.APP_AUTH_SECRET)

        if (new Date(tokenContent.exp * 1000) > new Date()) {

            user = tokenContent
            admin = await prisma.user.findUnique({
                where: {
                    id: user.id
                },
                select: {
                    isAdmin: true
                }
            })

        }
    } catch (e) {

    }

}
if (user) {
    userLogged = user.id
}


return { 
    prisma,
    admin,
    bcrypt,
    userLogged,
    userValidate() {
        if(!user) throw Error
    }

    }
    
}
