import { MouseEvent, useState } from "react"
import { ENDPOINTS, ROUTES } from "../constants"
import { useRouter } from "next/navigation"


export const useRegister = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()

    const handleRegister = async (e: MouseEvent) => {
        e.preventDefault()
        const body = JSON.stringify({ name, email, password })

        const url = ENDPOINTS.register

        try {
            const response = await fetch(url, {
                method: 'POST',
                body,
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }

            const data = await response.json();

            router.push(ROUTES.login)
        } catch (error) {
            setError(true)
        }
    }




    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        error,
        handleRegister
    }
}