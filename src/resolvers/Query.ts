const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = {
    async usuarios() {
        const allUsers = await prisma.user.findMany()
        return allUsers
    },
    async usuario(_, {data}) {
        if (!data) return null
        const {id, email} = data


        if(id) {
            return await prisma.user.findUnique({
                where: {
                    id: id
                }
            })
            }else if(email) {
                return await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                })
        } else {
            return null
        }
    },
        async budgets() {
        const allBudget = await prisma.budget.findMany()
        

        return allBudget
    },

    async serviceOrder() {
            
        const allOrders = await prisma.serviceOrder.findMany({
            include:{
                services: true,
                Budget: true,
            }
        }) 
        return allOrders
    },
    async serviceOrderFilter(_, {data}) {
            if(!data) return null
            const {id} = data

            const service = await prisma.serviceOrder.findUnique({
                where: {
                    id: id
                },
                include:{
                services: true,
                Budget: true,
            }
            })

            return service
    },
    async services(){
        const allServices = await prisma.services.findMany()
        
        return allServices
    },

    async clients() {
        const allClients = await prisma.client.findMany({
            include: {
                phone: true
            }
        })
        return allClients
    },

    async client(_, {data}) {
        if(!data) return null
        const {name, phone} = data
        if(name) {
            const client = await prisma.client.findMany({
                where: {
                    name: {
                        contains: name
                    }
                }
            })
            return client[0]
        } else if(phone) {



            const searchPhone = await prisma.phone.findMany({
                where: {
                    phone: { 
                        contains: phone
                       }
                }
            })


            const client = await prisma.client.findUnique({
                where: {
                    id: searchPhone[0].clientId
                },
                include:{
                    phone: true
                }
            })
        
            return client
        }else{
            return null
        }
        
    }
}