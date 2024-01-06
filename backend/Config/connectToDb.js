const mongoose = require('mongoose');

connectToDb().catch(err => console.log(err))

async function connectToDb(){
    try {
        await mongoose.connect('mongodb+srv://sikanderahmed40:S1k4nd3r5501@clusterarasco.1uhuho9.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected to db")
    }
    catch(err) {
        console.log(err)
    }
}

module.exports = connectToDb;