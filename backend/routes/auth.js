import express from 'express'
import {db} from '../db.js'
import {register, login, logout} from '../controller/auth.js'


const router = express.Router();
//api test
router.get('/users', (req,res) =>{
    const q = "select * from users";
    db.query(q, (err, data) =>{
        if(err){
            return res.status(500).json(err);
        }
        return res.status(200).json(data);
    })
})

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)  

export default router;