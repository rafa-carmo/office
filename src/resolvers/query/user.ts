const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = {
   
    async serviceOrder(parent, obj, context) {
        const orders = await context.prisma.serviceOrder.findMany({ 
            where: {
                tech: parent.id
            },
            include:{
                services: true,
                Budget: true,
                pictures: true
            }
        })
        return orders
    }
}