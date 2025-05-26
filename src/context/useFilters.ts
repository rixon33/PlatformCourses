import { useContext } from "react";
import { FilteredContext } from "./FiltersContext";

//Creamos el hook, el hook unicamente sirve para comprobar si existe o no el contexto.
export const useFiltered = () => {
    const context = useContext(FilteredContext);
    if (!context) {
        throw new Error("useFiltered debe usarse dentro de <FilteredProvider>");
    }
    return context;
};
