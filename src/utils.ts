import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    if (!isLoggedIn) {
        const res: any = redirect("/login?message=You must login first")
        res.body = true
        return res
    }
}