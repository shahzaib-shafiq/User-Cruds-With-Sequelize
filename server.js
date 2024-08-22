const express = require('express')
const app = express()
const connectToDatabase = require('./src/Config/db')
const port = process.env.port || 3000

const dbConnect = async () => {
    try {
        await connectToDatabase();
        console.log('Database connected successfully.');
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
};

dbConnect();




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})