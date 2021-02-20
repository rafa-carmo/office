


module.exports = {
    async type(parent, obj, context) {
        const type = await context.prisma.type.findUnique({
            where:{
                id: parent.typeId
            }
        })
        return type
    },
    budget(parent) {
        return parent.Budget
    },
    async client(parent, obj, context) {
        const client = await context.prisma.client.findUnique({
            where: { 
                id: parent.client
            },
            include: {
                phone: true
            }
        })
        return client
    }, 
    date(parent) {
        const date = {"createdAt": parent.createdAt, "closedAt": parent.closedAt}
        return date
    }

}