import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../fetchData';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();  
  const navigate  = useNavigate();

  const handleLogin = async () => {
    const response = await fetchData('login', 'POST', {'email': email, 'password': password});
      
    if (response.token) {
      login(response.token);
      navigate('/home'); 
    } else {
      alert('Credenciales incorrectas');
    }
  };


  return (
    <div>
      <h1>Inicio </h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default LoginView;
