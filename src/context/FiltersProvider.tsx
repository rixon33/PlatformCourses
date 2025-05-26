// FiltersProvider.tsx
import { useState, type ReactNode } from "react";
import { FilteredContext } from "./FiltersContext";

// Este provider gestiona el estado global de los filtros de categoría y dificultad
// para la sección de cursos. Permite que cualquier componente hijo acceda y modifique
// estos filtros de manera independiente.
export const FilteredProvider = ({ children }: { children: ReactNode }) => {
    // Estado para el filtro de categoría
    const [filtroCategoria, setFiltroCategoria] = useState("All");
    // Estado para el filtro de dificultad
    const [filtroDificultad, setFiltroDificultad] = useState("All");

    return (
        // Proveemos ambos filtros y sus setters a través del contexto
        <FilteredContext.Provider value={{ filtroCategoria, setFiltroCategoria, filtroDificultad, setFiltroDificultad }}>
            {children}
        </FilteredContext.Provider>
    );
};
