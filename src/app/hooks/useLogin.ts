import { MouseEvent, useState } from "react"
import { ENDPOINTS } from "../constants"

export const useLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleLogin = async (e: MouseEvent) => {
        e.preventDefault()
        const body = JSON.stringify({ email, password })

        const url = ENDPOINTS.login

        try {
            const response = await fetch(url, {
                method: 'POST',
                body
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const json = await response.json();
            console.log(json);
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