import express from 'express'
const route = express.Router();
import fs from 'fs';

//get all students
const studentData = JSON.parse(fs.readFileSync('./studenData.json','utf-8'))
route.get('/students',(req,res)=>{
    console.log(studentData);
    
    res.send(studentData)

})

//get specific students
route.get('/students/:id',(req,res)=>{
    const id:string = req.params.id;
    const data = studentData.find((e:any)=>e.ID == id)
    if(data){
        res.send(data)
    }else{
        res.send(`Student with id (${id}) doesn't exists`)
    }
    
})

export = route

