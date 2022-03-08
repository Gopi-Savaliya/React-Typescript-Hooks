import { useState } from 'react'

function Login() {

    const [isLoggedIn, setisLoggedIn] = useState(false);

    const loginHandler = () => {
        setisLoggedIn(true);
    }

    const logoutHandler = () => {
        setisLoggedIn(false);
    }

  return (
    <div>
        <button onClick={ loginHandler }>Login</button>
        <button onClick={ logoutHandler }>Log out</button>
        <h2>User is {isLoggedIn ? 'Logged in' : 'Logged Out'} </h2>
    </div>
  )
}

export default Login