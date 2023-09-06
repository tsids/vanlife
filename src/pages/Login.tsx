import React from "react"
import { useLoaderData } from "react-router-dom"

export function loader({ request }: { request: any }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const message = useLoaderData() as string
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })

    function handleSubmit(e: any) {
        e.preventDefault()
        console.log(loginFormData)
    }

    function handleChange(e: any) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {message && <h3 className="red">{message}</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button>Log in</button>
            </form>
        </div>
    )

}