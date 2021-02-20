

module.exports = {

        async author(user,args,context) {
            
            const author = await context.prisma.user.findUnique({
                where: {
                    id: user.authorId
                }
            })

            return author
        
    },
    async serviceOrder(service,args,context) {
        const serviceOrder = await context.prisma.serviceOrder.findUnique({
            where: {
                id: service.serviceOrder
            }
        })

        return serviceOrder
    }
}