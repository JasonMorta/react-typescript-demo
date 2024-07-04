import { Name } from "./person.types"

type personListProps = {
    names: Name[] // array of objects
}

export const PersonList = (props: personListProps) => {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <p>{name.first} {name.last}</p>
                )
            })}
        </div>
    )
}