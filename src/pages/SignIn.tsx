import { LogIn } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const { login } = useAuth();

    const handleLogin = (e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find((u: { email: string; password: string; name: string }) => u.email === email && u.password === password);
        if (!user){
            toast.error('Correo o contraseña incorrecta o usuario no existe!')
            return
        }
        login({ name: user.name, email: user.email });
        localStorage.setItem('userData', JSON.stringify({ name: user.name, email: user.email }));
        toast.success(`Bienvenido ${user.name}!`)
        navigate('/Courses')
    }


    return (
        <div className="pt-32 min-h-screen bg-[url('img/fondo_login.png')] bg-cover bg-center text-white">
            <form
                className="bg-[#ed205d]/90 backdrop-blur-sm shadow-lg shadow-black/25 flex flex-col max-w-lg w-full m-auto justify-center px-10 gap-4 rounded-2xl"
                onSubmit={handleLogin}
            >
                <h2 className="text-3xl text-center pt-10">Welcome back</h2>
                <span className="text-md text-gray-200 font-normal text-center">
                    Sign in to your account
                </span>

                <div className="flex flex-col gap-4 py-2">
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-normal">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="tucorreo@gmail.com"
                            className="py-2 border rounded-md px-3 font-light text-gray-100 outline-0 focus:border-gray-200 border-gray-400 bg-[#1a1a1a]/20"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-normal">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*********"
                            className="py-2 border rounded-md px-3 font-light text-gray-100 outline-0 focus:border-gray-200 border-gray-400 bg-[#1a1a1a]/20"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex font-normal justify-between py-2 text-sm">
                    <label htmlFor="remember" className="flex gap-2 items-center">
                        <input type="checkbox" id="remember" className="accent-red-800 "/>
                        Remember me
                    </label>
                    <a href="#" className="text-white hover:underline">
                        Forgot your password?
                    </a>
                </div>

                <button className="bg-black hover:bg-gray-800 p-2 rounded-md text-white transition">
                    <span className="flex justify-center gap-2 text-md">
                        <LogIn className="w-5" />
                        Sign in
                    </span>
                </button>

                <span className="font-normal text-center py-10 text-sm">
                    Don't have an account?{' '}
                    <Link to="/Register" className="text-white underline hover:text-gray-300">
                        Register
                    </Link>
                </span>
            </form>
        </div>
    );
};
