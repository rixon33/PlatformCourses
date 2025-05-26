import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../context/useAuth";

export const NavBar = () => {
    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [showDrawer, setShowDrawer] = useState(false);

    // Abrir con animación
    const handleOpen = () => {
        setShowDrawer(true);
        setTimeout(() => setOpen(true), 10); // Pequeño delay para permitir transición
    };

    // Cerrar con animación
    const handleClose = () => {
        setOpen(false);
        setIsClosing(true);
        setTimeout(() => {
            setShowDrawer(false);
            setIsClosing(false);
        }, 300);
    };

    return (
        <nav className="bg-[#FF0B55] fixed w-full p-4 z-50">
            <div className="flex justify-between items-center">
                <Link
                    to="/"
                    className="text-2xl font-bold tracking-wide text-[#eee]"
                    aria-label="Home RxAcademy"
                >
                    📕RxAcademy
                </Link>
                {/* Botón hamburguesa */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={handleOpen}
                    aria-label="Open menu"
                >
                    <svg
                        className="w-7 h-7"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                {/* Menú en desktop */}
                <ul className="hidden md:flex gap-4 items-center text-white font-bold tracking-wider">
                    {user ? (
                        <>
                            {" "}
                            <li>
                                <Link
                                    to="/Courses"
                                    className="p-2 font-bold text-[#FFDEDE] transition-colors hover:text-white"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <button
                                    className="bg-[#111] hover:bg-[#161616] p-2 border rounded-sm px-4 border-gray-700  cursor-pointer transition-colors"
                                    aria-label="Logout"
                                    onClick={() => {
                                        logout();
                                        navigate("/");
                                    }}
                                >
                                    Logout
                                </button>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link
                                    to="/Courses"
                                    className="p-2 font-bold text-[#FFDEDE] transition-colors hover:text-white"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/SignIn"
                                    className="bg-[#111] hover:bg-[#161616] p-2 rounded-sm px-4   transition-colors "
                                    aria-label="Sign in"
                                >
                                    Sign in
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/Register"
                                    className="bg-[#111] hover:bg-[#161616] p-2 border rounded-sm px-4 border-gray-700   transition-colors"
                                    aria-label="Register"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
            {/* Drawer y fondo mobile con animación */}
            {(showDrawer || isClosing) && (
                <>
                    {/* Fondo difuminado con transición */}
                    <div
                        className={`fixed inset-0 z-40 backdrop-blur-xs bg-black/50 transition-opacity duration-300 ${open && !isClosing ? 'opacity-100' : 'opacity-0'}`}
                        onClick={handleClose}
                    ></div>
                    {/* Drawer con transición */}
                    <div
                        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-[#FF0B55] z-50 shadow-2xl flex flex-col p-6 transition-transform duration-300 ${open && !isClosing ? 'translate-x-0' : 'translate-x-full'}`}
                    >
                        <button
                            className="self-end text-white text-3xl mb-8 focus:outline-none"
                            onClick={handleClose}
                            aria-label="Close menu"
                        >
                            &times;
                        </button>
                        <nav className="flex flex-1 flex-col justify-center gap-8 mt-0">
                            <Link
                                to="/Courses"
                                className="text-xl font-bold text-[#FFDEDE] hover:text-white transition-colors block text-center"
                                onClick={handleClose}
                            >
                                Courses
                            </Link>
                            {user ? (
                                <button
                                    className="bg-[#111] hover:bg-[#161616] text-white p-3 rounded font-bold text-lg transition-colors block mx-auto w-4/5"
                                    aria-label="Logout"
                                    onClick={() => {
                                        logout();
                                        navigate("/");
                                        handleClose();
                                    }}
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link
                                        to="/SignIn"
                                        className="bg-[#111] hover:bg-[#161616] text-white p-3 rounded font-bold text-lg transition-colors block mx-auto w-4/5"
                                        aria-label="Sign in"
                                        onClick={handleClose}
                                    >
                                        Sign in
                                    </Link>
                                    <Link
                                        to="/Register"
                                        className="bg-[#111] hover:bg-[#161616] text-white p-3 rounded font-bold text-lg border border-gray-700 transition-colors block mx-auto w-4/5"
                                        aria-label="Register"
                                        onClick={handleClose}
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </>
            )}
        </nav>
    );
};
