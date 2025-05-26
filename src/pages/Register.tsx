import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { UserPlus } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../context/useAuth";

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type User = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export const Register = () => {
    //Datos del formulario

    //Manera con useState
    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    // })

    //Manera usada actualmente, con useForm
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormData>();

    const navigate = useNavigate();
    const { login } = useAuth();

    const onSubmit = (data: FormData) => {
        // Obtener usuarios existentes
        const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
        // Verificar si el email ya está registrado
        const exists = users.some((u) => u.email === data.email);
        if (exists) {
            toast.error('El correo ya está registrado');
            return;
        }
        // Agregar el nuevo usuario
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        // Guardar usuario en sesión
        login({ name: data.name, email: data.email });
        localStorage.setItem('userData', JSON.stringify({ name: data.name, email: data.email }));
        toast.success('Registro exitoso!');
        navigate('/Courses');
    };

    //Solo se usa esto cuando se usa el useState
    // const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
    //     //[e.target.name] hace referencia a si su name es = a email o password etc.., asi se crea algo asi => [password]: 1234
    //     //e.target.value seria los datos.
    //     setForm({ ... form, [e.target.name]: e.target.value})
    // }

    return (
        <div className="pt-32 min-h-screen bg-[url('img/fondo_login.png')] bg-cover bg-center text-white relative">
            <div className="absolute inset-0  z-0" />
            <form
                className="relative z-10 bg-[#ed205d]/90 backdrop-blur-sm shadow-lg shadow-black/25 flex flex-col max-w-lg w-full m-auto justify-center px-10 gap-4 rounded-2xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-3xl text-center pt-10">Create your account</h2>
                <span className="text-md text-gray-200 font-normal text-center">
                    Join now and start learning today!
                </span>

                <div className="flex flex-col gap-4 py-2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-normal">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Tu nombre"
                            className="py-2 border rounded-md px-3 font-light text-gray-100 outline-0 focus:border-gray-200 border-gray-400 transition placeholder:text-gray-300 bg-[#1a1a1a]/20"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />
                        {errors.name && (
                            <span className="text-red-200 text-sm">
                                {errors.name?.message && errors.name.message.replace('El nombre es obligatorio', 'Name is required')}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-normal">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="tucorreo@gmail.com"
                            className="py-2 border rounded-md px-3 font-light text-gray-100 outline-0 focus:border-gray-200 border-gray-400 transition placeholder:text-gray-300 bg-[#1a1a1a]/20"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: "Invalid email format",
                                },
                            })}
                        />
                        {errors.email && (
                            <span className="text-red-200 text-sm">
                                {errors.email?.message && errors.email.message.replace('El email es obligatorio', 'Email is required').replace('Formato de email inválido', 'Invalid email format')}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="font-normal">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="*********"
                            className="py-2 border rounded-md px-3 font-light text-gray-100 outline-0 focus:border-gray-200 border-gray-400 transition placeholder:text-gray-300 bg-[#1a1a1a]/20"
                            {...register("password", {
                                required: "Password is required",
                            })}
                        />
                        {errors.password && (
                            <span className="text-red-200 text-sm">
                                {errors.password?.message && errors.password.message.replace('La contraseña es obligatoria', 'Password is required')}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col">
                        <label
                            htmlFor="confirmPassword"
                            className="font-normal"
                        >
                            Confirm password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            placeholder="*********"
                            className="py-2 border rounded-md px-3 font-light text-gray-100 outline-0 focus:border-gray-200 border-gray-400 transition placeholder:text-gray-300 bg-[#1a1a1a]/20"
                            {...register("confirmPassword", {
                                required: "You must confirm the password",
                                validate: (value) =>
                                    value === watch("password") ||
                                    "Passwords do not match",
                            })}
                        />
                        {errors.confirmPassword && (
                            <span className="text-red-200 text-sm">
                                {errors.confirmPassword?.message && errors.confirmPassword.message.replace('Debes confirmar la contraseña', 'You must confirm the password').replace('Las contraseñas no coinciden', 'Passwords do not match')}
                            </span>
                        )}
                    </div>
                </div>

                <button className="bg-black hover:bg-gray-800 p-2 rounded-md text-white transition-all duration-200 hover:scale-105 shadow-md mt-2">
                    <span className="flex justify-center gap-2 text-md">
                        <UserPlus className="w-5" />
                        Register
                    </span>
                </button>

                <span className="font-normal text-center py-10 text-sm">
                    Already have an account?{' '}
                    <Link
                        to="/SignIn"
                        className="text-white underline hover:text-gray-300"
                    >
                        Sign in
                    </Link>
                </span>
            </form>
        </div>
    );
};
