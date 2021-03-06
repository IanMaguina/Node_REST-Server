//////////////////////////        
//       puerto
//////////////////////////

process.env.PORT = process.env.PORT || 3000;


//////////////////////////
//      Entorno
//////////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//////////////////////////
//      Vecimiento del token
//////////////////////////
// 60 segundos, 60 minutos, 24  hras,  30 dias

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//////////////////////////
//      Seed de autenticación
//////////////////////////

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//////////////////////////
//   Base de Datos
//////////////////////////

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//////////////////////////
// Google CLIENT_ID
//////////////////////////

process.env.CLIENT_ID = process.env.CLIENT_ID || '191635813746-f7srlcqs108iqdh3hva58dte1vjg0l46.apps.googleusercontent.com';