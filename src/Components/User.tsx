import React, { useState } from 'react'

type AuthUser = {
    name: string
    lastName: string
    password?: string

}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null)
    // state type is AuthUser or null
        
    const handLogin = () => {
        setUser({
            name: 'John',
            lastName: 'Doe'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <h2>User</h2>
            <button onClick={handLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>{user ? `User ${user.name} ${user.lastName} iss logged in` : 'User is logged out'}</p>
            
        </div>
    )
}