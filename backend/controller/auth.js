import {db} from '../db.js';

//register
const register = (req,res) =>{
    const q = "select * from users where email = ? or username = ?";
    db.query(q, [req.body.email, req.body.username, req.body.password], (err,data) =>{
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("User already exists!");

        const q = "insert into users(`username`,`email`,`password`) values (?)";
        const values = [
            req.body.username,
            req.body.email,
            req.body.password
        ];
        db.query(q, [values], (err,data)=>{
            if(err) return res.status(500).json(err);
            return res. status(200).json("user has been created.");
        })

    })
}

//Login
const login = (req,res) =>{
    const q = "select * from users where username = ? and password = ?";
    db. query(q, [req.body.username, req.body.password],(err,data) =>{
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status(404).json("User not found");

        //check password
        if(data[0].password === req.body.password){
            return res.status(200).json(data[0]);
        } 
        else {
            return res.status(400).json("Wrong username or password");
        }
    })
}

//Logout
const logout = (req,res) =>{
    res.status(200).json("User has been logged out.");
}

export  {register, login, logout}; 