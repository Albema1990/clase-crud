// importar dns de node dns
import dns from 'node:dns';
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// crear conexión a la base de datos
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDb connected'))
    .catch((error) => console.error(error));