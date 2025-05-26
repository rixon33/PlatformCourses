//Traemos el hook personalizado

// Componente reutilizable para mostrar filtros de categoría o dificultad.
// Recibe el filtro actual y su setter por props, así como el tipo de filtro (seccion).
const allCategories = ["All", "Development", "Design", "Business", "Marketing"];
const allDifficulties = ["All", "Beginner", "Intermediate", "Advanced"];

type seccionProps = {
    seccion: "categories" | "difficulties";
    filtro: string;
    setFiltro: (filtro: string) => void;
};

export const Filters = ({ seccion, filtro, setFiltro }: seccionProps) => {
    // Selecciona las opciones según el tipo de filtro
    const opciones = seccion === "categories" ? allCategories : allDifficulties;

    return (
        <div className="flex gap-2">
            {/* Renderiza un botón por cada opción de filtro */}
            {opciones.map((opcion) => (
                <button
                    key={opcion}
                    onClick={() => setFiltro(opcion)}
                    className={
                        filtro === opcion
                            ? "bg-[#FF0B55] text-white px-4 py-2 rounded shadow transition-all duration-200 scale-105"
                            : "bg-white text-black px-4 py-2 rounded border border-gray-200 hover:bg-[#FF0B55] hover:text-white transition-all duration-200"
                    }
                >
                    {opcion}
                </button>
            ))}
        </div>
    );
};
