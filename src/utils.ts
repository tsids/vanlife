import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    if (!isLoggedIn) {
        const res: any = redirect("/login")
        res.body = true
        return res
    }
}