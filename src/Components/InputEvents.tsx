type InputEventsProps = {
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void
    value?: string
}

export const InputEvents = (props: InputEventsProps) => {
    return (
        <div>
            <input
                type="text"
                defaultValue={props.value}
                onChange={(e) => props.handleInput(e)}
            />
        </div>
    )
}