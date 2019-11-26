const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.use('/api/users', require('./routes/user'));
app.use('/api/event', require('./routes/event'));

const dbUrl = "mongodb+srv://application:0000@cluster0-roncc.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    dbName: 'projet_test'
}).then(() => {
    console.log("Connection reussie");
}).catch((err) => {
    console.log("Une erreur est survenue: " + err);
})

const PORT = 5000;

app.listen(5000, () => {
    console.log(`Server is running on ${PORT}`);
});