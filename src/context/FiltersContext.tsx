//Importamos y creamos el contexto
// FiltersContext.tsx
import { createContext } from "react";

type FilterContextType = {
    filtroCategoria: string;
    setFiltroCategoria: (filtro: string) => void;
    filtroDificultad: string;
    setFiltroDificultad: (filtro: string) => void;
};

// El valor inicial debe ser undefined para forzar el uso dentro del provider
export const FilteredContext = createContext<FilterContextType | undefined>(
    undefined
);
