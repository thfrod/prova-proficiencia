import { useEffect } from "react";

import { useRouter } from "next/navigation";
import { ROUTES } from "../constants";

export const useAuthenticatedRoute = () => {
    const router = useRouter()

    useEffect(() => {
        const user = localStorage.getItem("user")
        
        if (!user) {
            localStorage.clear()
            router.push(ROUTES.login)
        }
    }, [])
}

