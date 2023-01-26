import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth'

export const Header = () => {

    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
      logout();
      navigate('/login', {replace: true});
    }

  return (
    <div className="header">
        <span>
            {user?.name}
        </span>
        <button onClick={ onLogout }>Logout</button>
    </div>
  )
}
