"use client"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
    const {email, setEmail, password, setPassword, handleLogin} = useLogin()

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
            <h1>Entrar</h1>

            <form className="flex flex-col p-8 gap-4 rounded bg-slate-200">
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                <button onClick={(e) => handleLogin(e)}>Entrar</button>
            </form>

            <a href="/cadastro" >Ou cadastre-se</a>
        </div>
    )
}

export default Login