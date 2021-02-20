const {getUser } = require('../common/user');

module.exports = {
      async users(obj,args,context) {

        const allUsers = await context.prisma.user.findMany()
        return allUsers
    },
    async user(_, {data}, context) {
        if (!data) return null
        const {id, email} = data


        if(id) {
            return await context.prisma.user.findUnique({
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
    async userLogin(_, {data}, context) {
        if (!data) return null

            const {password} = data


            if (data.email) {

                const {email } = data

                let user = await context.prisma.user.findUnique({ 
                    where: {
                        email: email
                    }
                })
                if(!user) throw new Error("Usuário/Senha Invalido")

                
                const verify = context.bcrypt.compareSync(password, user.password)


                if(!verify) throw new Error("Usuário/Senha Invalido")

                const token = getUser(user)

                user = {
                    ...token
                }
                return user

            }   else if (data.login){

                const {login } = data

                let user = await context.prisma.user.findUnique({ 
                    where: {
                        login: login
                    }
                })
                if(!user) throw new Error("Usuário/Senha Invalido")
                
                const verify = context.bcrypt.compareSync(password, user.password)

                if(!verify) throw new Error("Usuário/Senha Invalido")

                const token = getUser(user)

                user = {
                    ...token
                }

                return user
            } else {
                return null
            }




            return null
    },
        async budgets(obj,args,context) {
        const allBudget = await context.prisma.budget.findMany()
        

        return allBudget
    },

    async serviceOrder(obj,args,context) {
            
        const allOrders = await context.prisma.serviceOrder.findMany({
            include:{
                services: true,
                Budget: true,
                pictures: true
            }
        }) 


        return allOrders
    },
    async serviceOrderFilter(_, {data},context) {
            if(!data) return null
            const {id} = data

            const service = await context.prisma.serviceOrder.findUnique({
                where: {
                    id: id
                },
                include:{
                services: true,
                Budget: true,
                pictures: true
            }
            })



            return service
    },
    async services(obj,args,context){
        const allServices = await context.prisma.services.findMany()
        
        return allServices
    },

    async clients(obj,args,context) {
        const allClients = await context.prisma.client.findMany({
            include: {
                phone: true
            }
        })
        return allClients
    },

    async client(_, {data},context) {
        if(!data) return null
        const {name} = data

        if(name) {
            const clients = await context.prisma.client.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: "insensitive",
                    }
                },
                include: {
                    phone: true
                }
            })
            return clients
        
        }else{
            return null
        }
        
    },

    async phones(obj, args,context) {
        const phones = await context.prisma.phone.findMany({
            include: {
                client: {
                    include: {
                        serviceOrder: true
                    }
                }
            }
        })

        return phones
    }
}