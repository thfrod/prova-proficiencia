"use client"

import { useRegister } from "../hooks/useRegister"

const Register = () => {
    const {setName, setEmail, setPassword, handleRegister} = useRegister()

    return (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
            <h1>Cadastro</h1>
            
            <form className="flex flex-col p-8 gap-4 rounded bg-slate-200">
                <input type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={(e) => handleRegister(e)}>Entrar</button>
            </form>

            <a href="/cadastro">Ou cadastre-se</a>
        </div>
    )
}

export default Register