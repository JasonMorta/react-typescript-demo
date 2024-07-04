import React, { useState } from 'react'

const loginStyles: React.CSSProperties = {
    border: '2px solid red',
    padding: '10px',
    margin: '10px',
};
const buttonStyles: React.CSSProperties = {
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
};

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div style={loginStyles}>
            <button
                style={buttonStyles}
                onClick={handleLogin}
                disabled={isLoggedIn}
            > Login </button>

            <button
                style={buttonStyles}
                onClick={handleLogout}
                disabled={!isLoggedIn}
            > Logout </button>
            <p> {isLoggedIn ? "Your are logged in" : "You are logged out" } </p>


        </div>
    )
}