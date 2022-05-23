const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('pensamentos', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate();
    console.log('Conectado com sucesso!');
} catch(err) {
    console.log('Erro de conexão:', err);
}

module.exports = sequelize;