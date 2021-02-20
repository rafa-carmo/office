const bcrypt = require('bcrypt-nodejs')


module.exports = {
    async newUser(_, {data}, context){

        try {
            const salt = bcrypt.genSaltSync()
            data.password = bcrypt.hashSync(data.password, salt)
            const newUser= await context.prisma.user.create({data: {...data}})

        return newUser
        }
        catch(e) {
            throw new Error(e)
        }
        return null
    },

    async updateUser(_, {data}, context) {
        
        if(!data) return null
        
        const id = 1

        if(data.password) {
            const salt = bcrypt.genSaltSync()
            data.password = bcrypt.hashSync(data.password, salt)
        }



        const updateUser = await context.prisma.user.update({
            where: {
                id: id
            }, 
            data: {
                ...data
            }
        })
        return updateUser
    }
}