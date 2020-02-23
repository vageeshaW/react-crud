const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8080;

const todoRoutes = require('./routes/item.route');
const app = express();

mongoose.connect('mongodb+srv://admin:123@cluster0-tsiy3.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use(cors());
app.use(bodyParser.json());
app.use('/cats', todoRoutes);
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});