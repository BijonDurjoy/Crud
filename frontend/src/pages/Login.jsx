import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });
    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/api/auth/login", inputs);
            navigate("/");
        } catch (err) {
            setError(err.response?.data);
        }
    };

    return (
        <div className='auth'>
            <h1>Welcome to the login page</h1>
            <form onSubmit={handleSubmit}>
                <input required type="text" placeholder='username' name='username' onChange={handleChange} />
                <input required type="password" placeholder='password' name='password' onChange={handleChange} />
                <button type="submit">Log in</button>
                {err && <p>{err.sqlMessage || err}</p>}
                <span>
                    Don't have an account? <Link to="/register">Register</Link>
                </span>
            </form>
        </div>
    );
};

export default Login;