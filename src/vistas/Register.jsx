import React, { useState } from 'react';
import { fetchData } from '../fetchData';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [name, setName] = useState('');  

    const registro = async () =>{
        const response = await fetchData( 'register', 'POST', { 'email': email, 'name': name, 'password': password}); 
        console.log(response);
        
        if(response.ok){
            console.log('Registro exitoso');
        } else {
            console.log('Error al registrar');
        }
    }

    
    return(
        <div>
        <h1>Registro</h1>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
         <input 
          type="text" 
          placeholder="nombre" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={registro}>Registrar</button>
      </div>
    )
}

export default Register;