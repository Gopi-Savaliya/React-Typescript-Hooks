import { useState } from "react";

type AuthUser = {
    Name: string
    Email: string
}

function User() {

    // const [user, setUser] = useState<AuthUser | null>(null);
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const loginHandler = () => {
        setUser({
            Name: 'Gopi',
            Email: 'gopi@gmail.com'
        });
    }

    // const logoutHandler = () => {
    //     setUser(null);
    // }

  return (
    <div>
        <button onClick={ loginHandler }>Login</button>
        {/* <button onClick={ logoutHandler }>Logout</button>
        <div>Welcome { user?.Name }</div>
        <div>Your Email is { user?.Email }</div> */}
        <div>Welcome { user.Name }</div>
        <div>Your Email is { user.Email }</div>
    </div>
  )
}

export default User