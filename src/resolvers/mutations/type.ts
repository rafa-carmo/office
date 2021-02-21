module.exports = {
    async createType(_, {data}, context) {
        context && context.userValidate()
        if(!data) return null

        const create = await context.prisma.type.create({data:data})

        return create
    }

}