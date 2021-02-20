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

        context && context.userValidate()
        if(!data) return null
        let id = context.userLogged
        if ( data.id && context.userLogged != data.id || data.isAdmin!=null){
            console.log("aqui")
            if (context.admin.isAdmin){
                id = data.id
            } else {
             throw new Error("Somente Administradores podem alterar esses dados")
            }
            
        }
        

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