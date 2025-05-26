import { Search } from "lucide-react";
import { Filters } from "../components/Filters";
import { cursos } from "../data/cursos";
import { CourseCard } from "../components/CourseCard";
import { useFiltered } from "../context/useFilters";
import { useState } from "react";
import { useAuth } from "../context/useAuth";

export const Courses = () => {
    // Obtenemos los filtros de categoría y dificultad del contexto
    const { filtroCategoria, setFiltroCategoria, filtroDificultad, setFiltroDificultad } = useFiltered();
    const { user } = useAuth();

    const [search, setSearch] = useState("");

    // Filtrado combinado: primero por categoría, luego por dificultad, luego por búsqueda
    const cursosFiltrados = cursos
        .filter((curso) =>
            (filtroCategoria === "All" || curso.categoria === filtroCategoria)
        )
        .filter((curso) =>
            (filtroDificultad === "All" || curso.dificultad === filtroDificultad)
        )
        .filter((curso) =>
            curso.titulo.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div className="pt-20 bg-[url('img/fondo_login.png')] min-h-screen bg-cover bg-center pb-10">
            <div className="flex flex-row justify-between w-full px-10 max-w-8xl mx-auto flex-wrap gap-4">
                <h2 className="text-2xl text-white">
                    {user
                        ? `Welcome ${user.name}`
                        : "Browse Courses"}
                </h2>
                <div className="flex items-center gap-2 rounded-lg p-2 w-full md:w-auto">
                    <Search className="text-white" />
                    <input
                        id="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        aria-label="Buscar cursos"
                        className="p-2 px-6 placeholder:text-gray-200 placeholder:font-light bg-[#FF0B55] shadow-sm rounded-sm focus:ring-[#FF0B55] focus:outline-2 focus:outline-gray-100 text-white w-full md:w-auto"
                        placeholder="Search courses..."
                    />
                </div>
            </div>

            {/* Sección Categorías */}
            <div className="px-10 py-10 max-w-7xl mx-auto section-bg mt-10  rounded-lg shadow-sm">
                <div className="flex flex-row justify-between items-center gap-4">
                    {/* Filtros de categoría y dificultad, independientes */}
                    <div>
                        <Filters seccion={"categories"} filtro={filtroCategoria} setFiltro={setFiltroCategoria} />
                    </div>
                    <div>
                        <Filters seccion={"difficulties"} filtro={filtroDificultad} setFiltro={setFiltroDificultad} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 text-black">
                    {cursosFiltrados.length > 0 ? (
                        cursosFiltrados.map(
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
                                <div className="card" key={index}>
                                    <CourseCard
                                        titulo={titulo}
                                        descripcion={descripcion}
                                        categoria={categoria}
                                        dificultad={dificultad}
                                        imagen={imagen}
                                        duracion_minutos={duracion_minutos}
                                        lecciones={lecciones}
                                        autor={autor}
                                    />
                                </div>
                            )
                        )
                    ) : (
                        <h1 className="text-4xl text-center col-span-3 min-h-50 items-center flex justify-center">
                            No courses found 😥
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
};
