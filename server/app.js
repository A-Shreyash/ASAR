const express = require('express');
const app=express();
let port =3000;
const path = require('path');
const empCollection=require('./model/model');

const temp=path.join(__dirname,'logsign');

app.set('view engine','hbs');
app.set('views',temp);
require('./db/db');

app.use(express.urlencoded({extended:false}));
app.get('/',(req,res)=>{
    res.render('login.hbs')
})
// app.post('/',(req,res)=>{
//     res.render('signin')
// })
app.post('/empdata',async(req,res)=>{

    try {
        const password=req.body.password;
        const cpassword=req.body.cpassword;
        if(password===cpassword){
            const empData=new empCollection({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cpassword:req.body.cpassword
            });
            const postData=await empData.save();
            res.send(postData);
        }else{
            res.send("Password not matching...")
        }
        
    } catch (error) {
        res.send(error);
    }

    console.log(req.body.name);
    res.send(req.body.name);
})
app.listen(port,()=>{
    console.log('listing to the port ${port}');
})
