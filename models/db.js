const Sequelize = require('sequelize')
const banco = 'mynotesbasic'
const dbUser = 'root'
const dbPassword = ''
const dbHost = 'localhost'
const sequelize = new Sequelize(banco, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}