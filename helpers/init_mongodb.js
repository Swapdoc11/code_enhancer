const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,
    {
        dbName: process.env.DB_NAME
    })
    .then(() => {
        console.log("DB is Connected")
    })
    .catch((err) => console.log(err.message))

mongoose.connection.on('connected', () => {
    console.log("Mongoose Database Connected");
})

mongoose.connection.on('err', (err) => {
    console.log(err.message);
})

mongoose.connection.on('disconnected', () => {
    console.log("Mongoose Connection Is Disconnected");
})

/** To stop the connection when you stop the App
 *  by pressing ctrl + c
 */

process.on('SIGINT', async () => {
    await mongoose.connection.close()
    process.exit(0)
})