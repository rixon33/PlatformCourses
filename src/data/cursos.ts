export interface Curso {
    titulo: string;
    descripcion: string;
    categoria: string;
    dificultad: string;
    imagen: string;
    duracion_minutos: number;
    lecciones: number;
    autor: string;
}

export const cursos : Curso[] = [
    {
        titulo: "HTML, CSS y JavaScript",
        descripcion:
            "Aprende los fundamentos del desarrollo web utilizando HTML, CSS y JavaScript para crear sitios web interactivos.",
        categoria: "Development",
        dificultad: "Beginner",
        imagen: "https://cdn.agapea.com/ANAYA-MULTIMEDIA/Curso-de-desarrollo-Web-HTML-CSS-y-JavaScript-Edicion-2021-i1n20824967.jpg",
        duracion_minutos: 180,
        lecciones: 12,
        autor: "Mario Rubiales Gómez",
    },
    {
        titulo: "Diseño Gráfico",
        descripcion:
            "Comprende los principios de composición en el diseño gráfico, aplicando retículas y detalles visuales.",
        categoria: "Design",
        dificultad: "Beginner",
        imagen: "https://d3puay5pkxu9s4.cloudfront.net/curso/12890/800_imagen.jpg",
        duracion_minutos: 300,
        lecciones: 20,
        autor: "Edutin Academy",
    },
    {
        titulo: "Construye tu Negocio Paso a Paso",
        descripcion:
            "Aprende a crear tu propio negocio online desde elegir el mejor nicho de mercado hasta automatizar procesos.",
        categoria: "Business",
        dificultad: "Intermediate",
        imagen: "https://www.redbai.com/wp-content/uploads/2018/02/curso-de-negocios-online-4.jpg",
        duracion_minutos: 240,
        lecciones: 15,
        autor: "Redbai",
    },
    {
        titulo: "Marketing Digital",
        descripcion:
            "Aprende las estrategias, herramientas y técnicas necesarias para diseñar, implementar y gestionar campañas de marketing efectivas en el entorno digital.",
        categoria: "Marketing",
        dificultad: "Beginner",
        imagen: "https://d3puay5pkxu9s4.cloudfront.net/curso/12446/800_imagen.jpg",
        duracion_minutos: 360,
        lecciones: 18,
        autor: "Edutin Academy",
    },
    {
        titulo: "Diseño Gráfico Digital",
        descripcion:
            "Estudia Photoshop, Illustrator e InDesign en este curso de formación profesional, con horas de taller para trabajar en tu propio proyecto.",
        categoria: "Design",
        dificultad: "Intermediate",
        imagen: "https://www.pixel-ar.com/wp-content/uploads/diseno-grafico-creativo-pixel-ar.jpg",
        duracion_minutos: 480,
        lecciones: 24,
        autor: "Instituto de Diseño y Tecnología",
    },
    {
        titulo: "Introducción al Desarrollo Web",
        descripcion:
            "Curso introductorio al desarrollo web utilizando HTML y CSS para crear páginas web básicas.",
        categoria: "Development",
        dificultad: "Beginner",
        imagen: "https://www.creati.edu.sv/wp-content/uploads/2023/12/logo-disen%CC%83o.png",
        duracion_minutos: 150,
        lecciones: 10,
        autor: "UDGVirtual",
    },
    {
        titulo: "Diseño Gráfico para Principiantes",
        descripcion:
            "Mejora tus oportunidades con Photoshop e Illustrator, aprendiendo a crear folletos, flyers y más.",
        categoria: "Design",
        dificultad: "Beginner",
        imagen: "https://www.creati.edu.sv/wp-content/uploads/2023/12/illustrator.png",
        duracion_minutos: 200,
        lecciones: 12,
        autor: "Creati - Escuela de Diseño Gráfico",
    },
    {
        titulo: "Gestión de Tráfico Pago",
        descripcion:
            "Aprende a gestionar campañas de tráfico pago en plataformas digitales para aumentar la visibilidad de tu negocio.",
        categoria: "Marketing",
        dificultad: "Intermediate",
        imagen: "https://wiy.com.br/noticias/wp-content/uploads/2019/08/curso-de-marketing-digital-gratis.jpg",
        duracion_minutos: 180,
        lecciones: 14,
        autor: "Jean Sobrinho",
    },
    {
        titulo: "Illustrator y Photoshop",
        descripcion:
            "Curso orientado a la estampación, donde aprenderás a utilizar Illustrator y Photoshop de manera efectiva.",
        categoria: "Design",
        dificultad: "Intermediate",
        imagen: "https://expertdigital.net/wp-content/uploads/2023/12/Curso-de-Facebook-e-Instagram-Ads-Presencial-03-768x768.jpeg.webp",
        duracion_minutos: 270,
        lecciones: 9,
        autor: "Taller Creasolco",
    },
    {
        titulo: "Marketing Digital - COMPLETO",
        descripcion:
            "Curso completo de marketing digital que abarca desde los fundamentos hasta técnicas avanzadas para alcanzar el éxito online.",
        categoria: "Marketing",
        dificultad: "Advanced",
        imagen: "https://expertdigital.net/wp-content/uploads/2023/06/curso-de-marketing-digital-Completo-768x768.jpeg.webp",
        duracion_minutos: 400,
        lecciones: 20,
        autor: "Expert Digital",
    },
];
