const {ApolloServer} = require('apollo-server')
//import { ApolloServer } from 'apollo-server'



const { typeDefs, resolvers} = require('./schema.ts')
//import { typeDefs, resolvers } from './schema'
const createContext = require('./context.tsx')
//import { createContext } from './context'

const context = {
  ...createContext
}



const server = new ApolloServer({ 
                  typeDefs: typeDefs, 
                  resolvers, 
                  context 
})



server.listen().then(({url}) => {
    console.log(
        `🚀 Server ready at:${url}\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-sdl-first#using-the-graphql-api`,
      )
})