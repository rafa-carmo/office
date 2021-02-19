const Context = require('./context')

const {importSchema} = require('graphql-import')
const resolvers = require('./resolvers/index.ts')

//import { Context } from './context'

const typeDefs = importSchema('./src/schema/index.graphql')


module.exports = {
    typeDefs,
     resolvers
}