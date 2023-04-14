const mongoose = require('mongoose');

const host = 'localhost';
const port = 27017
const database = 'dbTrailer';


const uri = `mongodb://${host}:${port}/${database}`

mongoose.connect(uri);

mongoose.connection.on('open', () => {
    console.log(`Database is connected on URI ${uri}`)
});

mongoose.connection.on('error', (err) => {
    console.log(err)
})