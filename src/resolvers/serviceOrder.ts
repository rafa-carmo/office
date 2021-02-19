const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



module.exports = {
    async type(parent) {
        const type = await prisma.type.findUnique({
            where:{
                id: parent.typeId
            }
        })
        return type
    },
    budget(parent) {
        return parent.Budget
    }
}