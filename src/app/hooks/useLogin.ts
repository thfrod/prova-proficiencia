import { MouseEvent, useState } from "react"
import { ENDPOINTS } from "../constants"
import { LoginApiResponse } from "../types"
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleLogin = async (e: MouseEvent) => {
        e.preventDefault()
        const body = JSON.stringify({ email, password })

        const url = ENDPOINTS.login

        try {
            const response = await fetch(url, {
                method: 'POST',
                body,
                headers : {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data: LoginApiResponse = await response.json()
            localStorage.setItem("user", JSON.stringify(data.user))
            router.push("/dashboard")
        } catch (error) {
            setError(true)
        }
    }




    return {
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleLogin
    }
}