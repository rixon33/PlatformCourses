import { type Curso } from "../data/cursos";
import { Star, BookOpen, Clock, User } from "lucide-react";

export const CourseCard = ({titulo,descripcion,categoria,dificultad,imagen,duracion_minutos,lecciones,autor}: Curso) => {
  // Asignar color según dificultad
  let difficultyColor = '';
  if (dificultad === 'Beginner') difficultyColor = 'bg-[#26723a]'; // verde
  else if (dificultad === 'Intermediate') difficultyColor = 'bg-[#FFB800]'; // amarillo
  else if (dificultad === 'Advanced') difficultyColor = 'bg-[#D7263D]'; // rojo

  return (
    <div
    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-102 hover:shadow-2xl min-h-[420px] flex flex-col border border-gray-100 hover:border-[#FF0B55] group"
>
    <div className="relative">
        <img
            src={imagen}
            alt={titulo}
            loading="lazy"
            className="w-full h-48 object-cover object-center group-hover:brightness-75 transition duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80 group-hover:opacity-70 transition duration-300" />
    </div>
    <div className="flex flex-row justify-between items-center px-3 py-2">
        <span className="m-2 p-1 px-3 text-white bg-[#111] rounded-2xl">{categoria}</span>
        <span className={`m-2 p-1 px-3 text-white rounded-2xl ${difficultyColor}`}>{dificultad}</span>
    </div>
    <div className="flex flex-col gap-2 px-3">
        <span className="text-xl font-bold px-3">
            {titulo}
        </span>
        <span className="text-gray-700 px-3 line-clamp-2 font-semibold text-secondary">
            {descripcion}
        </span>
    </div>
    <div className="flex flex-row justify-between items-center px-10">
        <div className="flex flex-row items-center gap-2 py-1">
            <Clock className="text-gray-500" />
            <span className="text-gray-500">
                {duracion_minutos} min
            </span>
        </div>
        <div className="flex flex-row items-center gap-2">
            <BookOpen className="text-gray-500" />
            <span className="text-gray-500 text-secondary">
                {lecciones} lecciones
            </span>
        </div>
    </div>
    <hr className="my-2 text-gray-300" />
    <div className="flex flex-row justify-between items-center px-5 pb-2">
        <div className="flex flex-row items-center gap-2">
            <User className="text-gray-500" />
            <span className="text-gray-500 text-secondary">
                {autor}
            </span>
        </div>
        <div className="flex flex-row items-center gap-2 py-2">
            <Star className="text-gray-500" />
            <span className="text-gray-500 text-secondary">
                4.5
            </span>
        </div>
    </div>
</div>
  )
}
