import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";


export const LoginPage = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {    

    login('Belen');

    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="login">

      <img src="https://media.vandal.net/i/1200x630/10-2021/2021105724573_1.jpg" alt="logo"/>

      <button 
        onClick={ onLogin }
      >
        Log into the pokemon app
      </button>
    </div>
  )
}
