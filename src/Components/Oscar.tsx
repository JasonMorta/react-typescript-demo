import { ReactNode } from "react"

type OscarProps = {
    children: ReactNode // ReactNode is a built-in TypeScript type used for describing the children of a React component when a child can be a string, number, or an array of React elements or other React components
}   

export const Oscar = (props: OscarProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}