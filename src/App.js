import { useState } from 'react';
import { Login } from './components/Login';

import './App.css';

function App() {

  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  function handleLogin( userName, password ) {
    if(userName === "admin" && password === "123") {
      setIsLoggedIn(true);
    } else {
      alert("Usuário ou senha inválida!!!")
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin}/>
  };

}

export default App;