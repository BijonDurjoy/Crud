import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
app.use(express.json());

//cors
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true, 
}))

app.use("/api/auth", authRoutes);

app.listen(4000, () =>{
    console.log('Server is running on port 4000');
})