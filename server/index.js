import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import StudentRoutes from './routes/student.js';

const app=express();
app.use(cors());
app.use(express.json());
app.use('/students', StudentRoutes);
app.use(express.json({limit:"20mb",extended:true}));
app.use(express.urlencoded({limit:"20mb",extended:true}));
const CONNECTION_URL="mongodb+srv://hacksight:ram@cluster0.44vsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT= process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
}).then(() => app.listen(PORT,() =>
    console.log(`Connection is established on port: ${PORT}`)
)).catch((err)=>console.log(err.message));

mongoose.set(`useFindAndModify`,false);