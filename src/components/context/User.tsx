import { useContext } from 'react'
import { UserContext } from './UserContext'

function User() {
    const userContext = useContext(UserContext);

    const loginHandler = () => {
        userContext.setUser({
            Name: 'Gopi',
            Email: 'gopi@gmail.com'
        });
    }

    const logoutHandler = () => {
        userContext.setUser(null);
    }

  return (
    <div>
        <button onClick={ loginHandler }>Login</button>
        <button onClick={ logoutHandler }>Logout</button>
        <div>User is { userContext.user?.Name }</div>
        <div>User email is { userContext.user?.Email }</div>
    </div>
  )
}

export default User