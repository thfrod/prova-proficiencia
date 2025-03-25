import { AuthenticatedUser } from "../types"

export const buildGetHeaders = () => {
    const user: AuthenticatedUser = JSON.parse(localStorage.getItem("user") as string)
    const header = {
        email: user.email,
        apiKey: user.apiKey
    }
    return header
}