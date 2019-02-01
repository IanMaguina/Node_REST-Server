//////////////////////////        
//       puerto
//////////////////////////

process.env.PORT = process.env.PORT || 3000;


//////////////////////////
//      Entorno
//////////////////////////

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//////////////////////////
//   Base de Datos
//////////////////////////

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://cafe-user:abc123@ds119085.mlab.com:19085/cafe';
}

process.env.URLDB = urlDB;