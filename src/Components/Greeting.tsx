import React from 'react'

type GreetingProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greeting = (props: GreetingProps) => {
    const {messageCount = 0} = props // default value for messageCount

    return (
        <div>
            <h1>Hello, Welcome {props.name} to React TypeScript Demo {props.messageCount}</h1>
            {props.isLoggedIn ? <p>You have {messageCount} messages</p> : <p>Please log in</p>}
        </div>
    )
}