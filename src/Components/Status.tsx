type StatusProps = {
    status: 'loading' | 'success' | 'error' // union type
}
export const Status = (props: StatusProps) => {
    let message

    if (props.status === 'loading') {
        message = 'Loading...'
    } else if (props.status === 'success') {
        message = 'Success'
    } else if (props.status === 'error') {
        message = 'Error'
    }

    return (
        <div>
            <h3>Status - {message}</h3>
            
            
        </div>
    )
}