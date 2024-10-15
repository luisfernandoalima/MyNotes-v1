const Sequelize = require('sequelize')
const banco = ''
const dbUser = 'root'
const dbPassword = ''
const dbHost = 'localhost'
const sequelize = new Sequelize(banco, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
})