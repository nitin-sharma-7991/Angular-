const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/Ticket',{useNewUrlParser: true,useCreateIndex: true, useUnifiedTopology: true},(err)=>{
    if(!err){
        console.log('connection successfull')

    }
    else{
        console.log('Error in connection'+ err)
    }
})

module.exports = mongoose;