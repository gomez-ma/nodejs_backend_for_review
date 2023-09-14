const mongoose = require('mongoose');

const connection = mongoose.createConnection(`mongodb+srv://<username>:<password>@cluster0.lytivlw.mongodb.net/ToDoDB`)
.on('open',() => {
    console.log("MongoDB Connected");
})
.on('error', () => {
    console.log("MongoDB Connection error!");
});

module.exports = connection;