const express = require('express');
const trailerRouter = require('./routers/trailer')

require('./database/dbConnection')

const app = express();
const port = 3000;

//RMiddlewares
app.use(express.json())
app.use(trailerRouter)

app.listen(port, () => {
    console.log(`The server is running on PORT ${port}`)
})