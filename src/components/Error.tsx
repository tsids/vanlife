import { useRouteError } from "react-router-dom"

type Error = {
    message: string,
    statusText: string,
    status: number
}

export default function Error() {
    const error = useRouteError() as Error

    return (
        <>
            <h1>Error: {error.message}</h1>
            <pre>{error.status} - {error.statusText}</pre>
        </>
    )
}