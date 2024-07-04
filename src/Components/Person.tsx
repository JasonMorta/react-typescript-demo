import { personProps } from "./person.types"


export const Person = (props: personProps) => {
    return (
        <div>
            <h1>{props.name.first} {props.name.last}</h1>
        </div>
    )
}