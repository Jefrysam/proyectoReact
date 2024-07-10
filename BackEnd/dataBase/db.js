import {Sequelize} from "sequelize"

const db = new Sequelize('DateGustoBD','root','',{
    host: '127.0.0.1',
    dialect:'mysql',
    logging: false
}) 


db.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

export default db 