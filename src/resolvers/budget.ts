const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = {

        async author(user) {
            
            const author = await prisma.user.findUnique({
                where: {
                    id: user.authorId
                }
            })

            return author
        
    },
    async serviceOrder(service) {
        const serviceOrder = await prisma.serviceOrder.findUnique({
            where: {
                id: service.serviceOrder
            }
        })

        return serviceOrder
    }
}