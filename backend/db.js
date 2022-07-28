const mongoose = require('mongoose');
const mongoURI = 'http://mongodb://localhost:27017/transportmanagement';

const connectToMongo = () =>{
    mongoose.connect(mongoURI, ()=>{
        console.log('Connected to mogoDb');
    });

}
module.exports = connectToMongo;