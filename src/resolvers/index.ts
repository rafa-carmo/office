const Query = require('./Query')
const Budget = require('./budget')
const Client = require('./client')
const ServiceOrder = require('./serviceOrder')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()



module.exports = {
    Query,
    Budget,
    ServiceOrder,
    Client
}