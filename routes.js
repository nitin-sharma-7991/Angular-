const express = require ('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const users = require('../models/user.js');

//check user and staff email
 
function checkEmail(req,res,next){
  var email=req.body.Email;
  var checkexitemail=users.findOne({email:email},{role:role});
  checkexitemail.exec((err,data)=>{
 if(err) throw err;
 if(data){
  return res.status(200).json({
    msg:"Email Already Exits",
    results:data
});
 }
 next();
  });
}


module.exports = router;

//Get, Post,Put,Delete
//Base Path:http://localhost:3000/users

//Get-fetch Api
router.get('/',(req,res)=>{
    users.find((err,doc)=>{
        if(err){
            console.log('Error in get data'+ err)
        }
        else{
            res.send(doc); 
        }
    })
});

//Get-fetch by id data Api
router.get('/:id',(req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        users.findById(req.params.id,(err,doc)=>{
          if(err){
            console.log('Error in single get data '+ err)  
          }else{
            res.send(doc);
          }  
        });
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }

    
});


//Post-create Api
router.post('/',checkEmail,(req,res,next)=>{
  
    let user = new users({
        name :req.body.name,
    email :req.body.email,
    password :req.body.password,
    mobile : req.body.mobile,
    role : req.body.role
    });
    user.save((err,doc)=>{
        if(err){
            console.log('Error in post data' + err)
        }
        else{
            res.send(doc); 
        }
    })
});

//Put-update Api
router.put('/:id',(req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        let user = {
            name :req.body.name,
        email :req.body.email,
        password :req.body.password,
        mobile : req.body.mobile,
        role : req.body.role
        };
        users.findByIdAndUpdate(req.params.id,{$set:user},{new:true},(err,doc)=>{
          if(err){
            console.log('Error in Update user by id  '+ err)  
          }else{
            res.send(doc);
          }  
        });
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }
});

//Delete data Api
router.delete('/:id',(req,res)=>{

    if(ObjectId.isValid(req.params.id)){
        
        users.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(err){
            console.log('Error in Delete user by id  '+ err)  
          }else{
            res.send(doc);
          }  
        });
    }else{
        return res.status(400).send('No record found with id' + req.params.id)
    }


});

