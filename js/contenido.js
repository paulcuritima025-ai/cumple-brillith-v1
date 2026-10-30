const contenido = {
  nombre: "Brillith",
  edad: 20,
  cumple: "2026-10-31T00:00:00-05:00",

  // Reemplaza esta fecha por el día real en que comenzaron.
  fechaInicio: "2025-01-01",

  ninez: [
    { edad: "0 años", titulo: "Aquí comenzó todo", texto: "Una pequeña niña que todavía no sabía todas las cosas bonitas que le esperaban.", foto: "" },
    { edad: "3 años", titulo: "Primeros recuerdos", texto: "Pequeños momentos que con el tiempo se convertirían en recuerdos enormes.", foto: "" },
    { edad: "6 años", titulo: "Una sonrisa que crecía", texto: "La vida empezaba a llenarse de aventuras, juegos y personas importantes.", foto: "" },
    { edad: "9 años", titulo: "Descubriendo el mundo", texto: "Más historias, más sueños y esa forma tan tuya de hacer especial cada momento.", foto: "" },
    { edad: "12 años", titulo: "Un nuevo capítulo", texto: "La niña iba creciendo y comenzaba a aparecer la persona que eres hoy.", foto: "" },
    { edad: "15 años", titulo: "Aprendiendo quién eres", texto: "Nuevos caminos, nuevas experiencias y recuerdos que se quedaron para siempre.", foto: "" },
    { edad: "18 años", titulo: "Ya no tan niña", texto: "Llegó una etapa nueva. Y con ella, muchas cosas que todavía estaban por comenzar.", foto: "" },
    { edad: "20 años", titulo: "Y aquí estás", texto: "Veinte años de historias, personas, aprendizajes y momentos que hicieron de ti quien eres.", foto: "fotos/ninez/Actual.jpeg" }
  ],

  familia: [
    { nombre: "Mamá", relacion: "La que estuvo desde el principio", mensaje: "Ejemplo de mensaje familiar. Aquí irá un mensaje real.", foto: "" },
    { nombre: "Papá", relacion: "Parte de tus primeros recuerdos", mensaje: "Ejemplo de mensaje familiar. Aquí irá un mensaje real.", foto: "" },
    { nombre: "Familia", relacion: "Los que siempre están", mensaje: "Un pequeño mensaje de las personas que te quieren.", foto: "" }
  ],

  nosotros: [
    {
      titulo: "El comienzo",
      fecha: "Nuestro primer capítulo",
      texto: "Aquí cuando me diste el si, el día mas feliz de mi vida.",
      foto: "",
      video: "fotos/nosotros/comienzo.mp4",
    },

    {
      titulo: "La primera salida",
      fecha: "Ese día que recuerdo",
      texto: "Aquí empezó nuestra historia; nuestra primera salida como enamorados.",
      foto: "fotos/nosotros/nuestra-primera-salida1.jpeg",
      video: "fotos/nosotros/nuestra-primera-salida2.mp4"
    },

    {
      titulo: "Un momento especial",
      fecha: "Lo que nos pasó por primera vez",
      texto: "Aquí la oportunidad de estar contigo por primera vez en tu cumpleaños como enamorados y nuestro primer aniversario.",
      fotos: [
        "fotos/nosotros/momento-especial2.jpeg",
        "fotos/nosotros/momento-especial1.jpeg"
      ],
      video: ""
    },

    {
      titulo: "Y seguimos aquí",
      fecha: "Hasta hoy",
      texto: "Y entre todas esas pequeñas cosas, seguimos construyendo nuestra propia historia.",
      foto: "fotos/nosotros/seguimos-aqui1.jpeg",
      video: "fotos/nosotros/seguimos-aqui.mp4"
    }
  ],
  carta: [
    "No sé si existen las palabras perfectas para explicarte todo lo que siento por ti, pero hoy quiero intentarlo. Porque es tu cumpleaños y quería regalarte algo que no se quede solamente en un día, sino que puedas volver a leer cada vez que necesites recordar lo mucho que significas para mí.",
    "A veces me pongo a pensar en la suerte que tengo de tenerte en mi vida. En tu sonrisa, en tu mirada, en tu forma de ser y en esos pequeños detalles que quizá tú no notas, pero que a mí me enamoran cada día un poquito más. No necesitas hacer nada extraordinario para hacerme feliz; muchas veces, con solo ser tú, consigues alegrarme el día.",
    "Hoy cumples 20 años y deseo de todo corazón que la vida te regale muchísimas razones para sonreír. Que nunca te falten las fuerzas para perseguir tus sueños, el valor para superar los momentos difíciles y la confianza para recordar lo increíble que eres. Quiero verte crecer, cumplir tus metas y celebrar cada uno de tus logros, porque tu felicidad también se ha convertido en una de las cosas que más me importan.",
    "Quiero que sepas que admiro muchísimo a la mujer que eres y todo lo bonito que llevas dentro. Me hace feliz compartir mis días contigo, crear recuerdos a tu lado y pensar en todas las experiencias que todavía nos quedan por vivir. No sé exactamente qué nos tiene preparado el futuro, pero sí sé que me encanta tenerte en mi presente y que, si pudiera elegir de nuevo, me seguiría quedando contigo.",
    "Ojalá pudiera guardar en una cajita cada una de tus sonrisas, tus abrazos, tus besos y esos momentos en los que te veo feliz, para volver a ellos cada vez que te extrañe. Y si algún día sientes que las cosas no van bien, quiero que recuerdes que tienes a un chico que te quiere muchísimo, que cree en ti y que desea verte alcanzar cada uno de tus sueños. No tienes que ser fuerte todo el tiempo; también quiero estar para ti cuando necesites un abrazo, tranquilidad o simplemente alguien que te escuche.",
    "Esta página es solo un pequeño detalle, pero detrás de ella hay tiempo, ilusión y todo mi cariño. Quería hacer algo que fuera tuyo, algo que pudieras guardar y volver a mirar con una sonrisa. Porque hoy no solo celebro tus 21 años; también celebro tu existencia, la persona tan bonita que eres y la suerte que tengo de compartir esta historia contigo.",
    "Feliz cumpleaños, mi niña hermosa. ❤️ Deseo que este nuevo año de vida esté lleno de momentos inolvidables, sueños cumplidos, abrazos que te hagan sentir en casa y razones para sonreír incluso en los días más difíciles. Nunca dejes de ser esa chica tan especial que llegó a mi vida y que, sin darse cuenta, se ganó un lugar enorme en mi corazón. Y ojalá que, cuando vuelvas a leer estas palabras dentro de muchos años, sonrías al recordar que hubo un chico que quiso hacerte sentir amada, importante y especial en un día como hoy.",
    "Te amo muchísimo, mi niña. Feliz cumpleaños, mi amor. ❤️"
  ],

  // Sorpresa secreta: se abre con contraseña dentro de "Abrir sorpresa".
  // Sube tus 2 fotos a fotos/entradas/ y ajusta aquí los nombres si son distintos.
  entradas: {
    clave: "31100621",
    mensaje: "Estas son nuestras entradas. Te invito al teatro, mi amor.",
    fotos: [
      "fotos/entradas/entrada1.jpg",
      "fotos/entradas/entrada2.jpg"
    ]
  },

  sorpresa: "Nunca olvides que eres una persona increíble y que, pase lo que pase, siempre habrá alguien que se alegra de haberte encontrado en este mundo."
};
