import express from 'express';
import route from './routes/primaryRoutes'

const app = express();



app.use('/',route);

app.listen(3000,()=>{
    console.log("server up and running on port 3000..... ");
    
})
