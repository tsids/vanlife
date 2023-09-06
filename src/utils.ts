import { redirect } from "react-router-dom"

export const requireAuth = async () => {
    const isLoggedIn = false
    if (!isLoggedIn) {
        const res: any = redirect("/login")
        res.body = true
        return res
    }
}