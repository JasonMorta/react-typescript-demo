import { MouseEvent } from "react"

type ButtonProps = {
    handleClick: (event: MouseEvent<HTMLButtonElement>, id: number) => void // returns nothing
    // Parameters must be defined in the same order as they are passed in the function
}

export const EventClick = (props: ButtonProps) => {
    return (
        <button onClick={(event) => props.handleClick(event,45)}>
            Click button
        </button>
    )
}