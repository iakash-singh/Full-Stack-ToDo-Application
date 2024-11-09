const mongoose = require("mongoose");

const DBconnect = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully");
    }
    catch(e){
        console.error("Database Connection Failed",e);
        process().exit(1);
    }
};

module.exports = DBconnect;