import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
        <div>
            <Link to={`home`}>Home</Link>
            <Link to={`favorites`}>My Favorites</Link>
        </div>
        <div>
           <span> {user?.name} </span>
            <button onClick={ onLogout }>Logout</button> 
        </div>
        
    </div>
  )
}
