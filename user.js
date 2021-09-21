const mongoose =require('mongoose');
// var jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');


const users = mongoose.model('users',{
    name :{type :String,required : true},
    email :{type : String, required : true,index:{unique:true},
                match:/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/},
    password :{type:String, 
        required: true
    },
    mobile : {type : String,
            required:true},
    role : {type : String,
                required:true},
    date:{
        type: Date, 
        default: Date.now }
});

// userSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//   };

//   userSchema.methods.validPassword = function(password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//     return this.hash === hash;
//   };

//   router.post('/login',(req,res,next)=>{
//     users.find({email:req.body.email})
//     .exec()
//     .then(users=>{
//       if(users.length<1){
//         return res.status(401).json({
//           msg:'User does not Exit'
//         })  
//       }
//       bcrypt.compare(req.body.password,users[0].password,(err,result)=>{
//         if(!result){
//           return res.status(401).json({
//             msg:'password matching Failed'
//           })
//         }
//         if(result){
//             const token = jwt.sign({
//               email:users[0].email,
//               role:users[0].role,
//               name:users[0].name,
//               mobile:users[0].mobile
//             },
//             'this is dummy text',
//             {
//               expiresIn:"24h"
//             }
//             );
//             res.status(200).json({
//               email:users[0].email,
//               role:users[0].role,
//               name:users[0].name,
//               mobile:users[0].mobile,
//               token:token
//             })
//         }
//       })
//     })
//     .catch(err=>{
//       res.status(500).json({
//         err:err
//       })
//     })
//   })
module.exports = users;