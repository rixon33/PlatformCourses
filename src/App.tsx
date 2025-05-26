import { Award, BookOpen, TrendingUp, Users } from "lucide-react";
import "./App.css";
import { Footer } from "./components/Footer";
import { CourseCard } from "./components/CourseCard";
import { cursos } from "./data/cursos";
import { Link } from "react-router";

function App() {
    return (
        <>
        
            <div className="h-screen">
                <div
                    className="w-full h-7/8 md:flex justify-center gap-20"
                    style={{
                        background:
                            "linear-gradient(to left, #FF0B55 1%, #000000 40%)",
                    }}
                >
                    <div className="flex flex-col justify-center text-center md:text-left  w-1/1 sm:w-1/2 md:w-1/3 h-full ">
                        <h1 className="text-5xl text-center text-[#FFDEDE] py-2">
                            Expand your knowledge with RxAcademy
                        </h1>
                        <span className="text-center text-2xl text-white">
                        Access high-quality courses taught by industry experts and boost your skills in various fields, technologies, tools, and frameworks.
                        </span>
                        <div className="flex justify-center items-center pt-6 gap-8 md:gap-20 text-white">
                            <Link to="/Courses">
                                <button className="p-2 px-8 text-xl bg-[#FF0B55]  rounded-sm cursor-pointer hover:bg-[#ff0b54da]">
                                    courses
                                </button>
                            </Link>
                            <Link to="/Register">
                                <button className="p-2 px-8 text-xl border rounded-sm cursor-pointer bg-black hover:bg-[#1a1a1ae1]">
                                    Register
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/2 md:w-1/3 h-full flex justify-center items-center">
                        <img
                            src="/img/banner.png"
                            alt="Banner de la academia"
                            className="rounded-lg shadow-lg hidden md:block"
                        />
                    </div>
                </div>
                <div className="bg-[#FFDEDE] pb-20">
                    <div className="text-center pt-10 pb-0">
                        <h1 className="text-3xl text-[#1a1a1ae1] font-bold">
                            Why choose RxAcademy?
                        </h1>
                        <h3 className="text-gray-500 text-2xl font-normal py-4">
                            Our platform offers the best learning experience for students
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2  text-black gap-10 px-10 py-10">
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-gradient-to-br from-[#FF0B55] to-[#1a1a1a] text-white rounded-full p-4 mb-4 ">
                                <BookOpen size={48} />
                            </div>
                            <h4 className="text-3xl">Quality content</h4>
                            <span className="text-xl text-gray-600 font-normal text-center max-w-130">
                                All our courses are created by industry experts with real-world experience.
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-gradient-to-br from-[#FF0B55] to-[#1a1a1a] text-white rounded-full p-4 mb-4 ">
                                <Award size={48} />
                            </div>
                            <h4 className="text-3xl">
                                Completion certificate
                            </h4>
                            <span className="text-xl text-gray-600 font-normal text-center max-w-130">
                                Get certificates upon completing courses to showcase your new skills.
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-gradient-to-br from-[#FF0B55] to-[#1a1a1a] text-white rounded-full p-4 mb-4 ">
                                <Users size={48} />
                            </div>
                            <h4 className="text-3xl">Community support</h4>
                            <span className="text-gray-600 text-xl font-normal text-center max-w-130">
                                Join a vibrant community of students and instructors to enhance your learning.
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <div className="bg-gradient-to-br from-[#FF0B55] to-[#1a1a1a] text-white rounded-full p-4 mb-4 ">
                                <TrendingUp size={48} />
                            </div>
                            <h4 className="text-3xl">Track your progress</h4>
                            <span className="text-gray-600 font-normal text-center text-xl max-w-130">
                                Monitor your learning journey with detailed progress tracking for each course.
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bg-[#f3e9e9] py-15">
                    <div className="text-black   md:gap-10 px-10 py-10 max-w-7xl mx-auto">
                        <div className="flex flex-row justify-between items-center">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-semibold">
                                    Featured courses
                                </h2>
                                <span className="text-gray-600 text-xl font-normal">
                                    Start learning with our most popular courses
                                </span>
                            </div>

                            <Link
                                to={"/courses"}
                                className="p-2 tracking-wide border rounded-lg bg-black text-white hover:bg-[#161616] cursor-pointer"
                            >
                                Ver todos los cursos
                            </Link>
                        </div>
                        {/* Aquí van los cursos */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 text-black">
                            {cursos
                                .slice(0, 3)
                                .map(
                                    (
                                        {
                                            titulo,
                                            descripcion,
                                            categoria,
                                            dificultad,
                                            imagen,
                                            duracion_minutos,
                                            lecciones,
                                            autor,
                                        },
                                        index
                                    ) => (
                                        <CourseCard
                                            key={index}
                                            titulo={titulo}
                                            descripcion={descripcion}
                                            categoria={categoria}
                                            dificultad={dificultad}
                                            imagen={imagen}
                                            duracion_minutos={duracion_minutos}
                                            lecciones={lecciones}
                                            autor={autor}
                                        />
                                    )
                                )}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}

export default App;
