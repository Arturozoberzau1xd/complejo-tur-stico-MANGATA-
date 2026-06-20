export const siteConfig = {
  name: "Complejo Turístico Mangata",
  location: "Huasca de Ocampo, Hidalgo",
  phone: "+52 55 8187 7829", // Actualizado con el número real de tu imagen
  whatsappNumber: "5581877829", // Actualizado con el número real de tu imagen
  email: "reservas@cabanasbosqueencantado.com",
  address: "Huasca de Ocampo, Hidalgo, México",
  whatsappMessage: "Hola, quiero información para reservar una cabaña en Complejo Turístico Mangata.",
  socials: {
    facebook: "https://facebook.com/tu_pagina",
    instagram: "https://instagram.com/tu_perfil",
    tiktok: "https://tiktok.com/@tu_cuenta",
  }
};

// Pasamos de 8 enlaces estorbosos a solo 5 esenciales y bien distribuidos
export const navLinks = [
  { label: "Cabañas", href: "#cabanas" },
  { label: "Servicios", href: "#servicios" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Preguntas", href: "#faq" }, // <-- ¡Listo! Ya aparece el FAQ aquí
  { label: "Contacto", href: "#contacto" },
];

export const cabins = [
  {
    id: 1,
    title: "Casa del Árbol",
    image: "/images/cabanas/casaarbol.jpg",
    people: "2 personas",
    price: "$2,500 / noche",
    description:
      "Cabaña única en la región, ideal para parejas que buscan privacidad y descanso en medio de la naturaleza.",
    features: [
      "Cama matrimonial",
      "Chimenea",
      "Baño completo",
      "Asador",
      "Desayunador",
      "Frigobar",
      "Parrilla eléctrica",
      "Cafetera",
    ],
  },
  {
    id: 2,
    title: "Cabaña Matrimonial",
    image: "/images/cabanas/casamatrimonial.jpg",
    people: "2 personas",
    price: "$1,500 / noche",
    description:
      "Cabaña acogedora ideal para una estancia romántica rodeada de naturaleza.",
    features: [
      "Cama matrimonial",
      "Chimenea",
      "Baño completo",
      "Asador",
      "Desayunador",
      "Frigobar",
      "Parrilla eléctrica",
      "Cafetera",
    ],
  },
  {
    id: 3,
    title: "Cabaña King Size",
    image: "/images/cabanas/kingzize.jpg",
    people: "2 personas",
    price: "$1,800 / noche",
    description:
      "Versión premium para parejas con cama King Size y mayor comodidad.",
    features: [
      "Cama King Size",
      "Chimenea",
      "Baño completo",
      "Asador",
      "Desayunador",
      "Frigobar",
      "Parrilla eléctrica",
      "Cafetera",
    ],
  },
  {
    id: 4,
    title: "Casa Mangata",
    image: "/images/cabanas/casamangata.jpg",
    people: "2 o 4 personas",
    price: "Desde $2,900 / noche",
    description:
      "Perfecta para parejas o familias pequeñas, con opción de sofá cama y tina de ducha.",
    features: [
      "Tina de ducha",
      "Sofá cama matrimonial",
      "Baño completo",
      "Asador",
      "Desayunador",
      "Frigobar",
      "Parrilla eléctrica",
      "Cafetera",
    ],
  },
  {
    id: 5,
    title: "Cabaña Familiar (4 personas)",
    image: "/images/cabanas/cabana4personas.jpg",
    people: "4 personas",
    price: "$2,000 / noche",
    description:
      "Cabaña ideal para familias pequeñas con espacios cómodos.",
    features: [
      "2 camas matrimoniales",
      "Chimenea",
      "Baño completo",
      "Desayunador",
      "Frigobar",
      "Parrilla eléctrica",
      "Cafetera",
      "Asador",
    ],
  },
  {
    id: 6,
    title: "Cabaña 4 o 6 Personas",
    image: "/images/cabanas/cabana46personas.jpg",
    people: "4 a 6 personas",
    price: "$2,300 - $2,500 / noche",
    description:
      "Cabaña amplia ideal para familias o grupos pequeños.",
    features: [
      "2 camas matrimoniales",
      "Sofá cama (algunas unidades)",
      "Chimenea",
      "Baño completo",
      "Desayunador",
      "Frigobar",
      "Parrilla eléctrica",
      "Cafetera",
      "Asador",
    ],
  },
  {
    id: 7,
    title: "Cabaña #4",
    image: "/images/cabanas/cabananumero4.jpg",
    people: "8 personas",
    price: "$4,500 / noche",
    description:
      "Cabaña amplia para grupos grandes con múltiples comodidades.",
    features: [
      "4 camas matrimoniales",
      "2 baños completos",
      "Comedor",
      "Frigobar",
      "Parrilla eléctrica",
      "Asador en jardín",
      "Chimenea",
      "Cafetera",
    ],
  },
  {
    id: 8,
    title: "Cabaña #5",
    image: "/images/cabanas/cabananumero5.jpg",
    people: "8 personas",
    price: "$5,000 / noche",
    description:
      "Cabaña premium con terraza y doble chimenea.",
    features: [
      "4 camas matrimoniales",
      "2 baños completos",
      "Comedor",
      "Frigobar",
      "Parrilla eléctrica",
      "Asador en jardín",
      "2 chimeneas",
      "Terraza",
      "Cafetera",
    ],
  },
  {
    id: 9,
    title: "Cabaña #7",
    image: "/images/cabanas/cabananumero7.jpg",
    people: "8 personas",
    price: "$4,500 / noche",
    description:
      "Cabaña cómoda para grupos con ambiente rústico.",
    features: [
      "4 camas matrimoniales",
      "2 baños completos",
      "Frigobar",
      "Parrilla eléctrica",
      "Chimenea",
      "Cafetera",
    ],
  },
  {
    id: 10,
    title: "Cabaña con Alberca",
    image: "/images/cabanas/cabanaalberca.jpg",
    people: "10 personas",
    price: "$7,500 / noche",
    description:
      "Cabaña con opción de alberca privada (no climatizada).",
    features: [
      "5 camas matrimoniales",
      "2 baños completos",
      "Comedor",
      "Refrigerador",
      "Parrilla eléctrica",
      "Palapa con asador",
      "2 chimeneas",
      "Cafetera",
    ],
  },
  {
    id: 11,
    title: "Cabaña 12 Personas",
    image: "/images/cabanas/cabanas12personas.jpg",
    people: "12 personas",
    price: "$7,900 / noche",
    description:
      "Ideal para grupos grandes o reuniones familiares.",
    features: [
      "6 camas matrimoniales",
      "3 baños completos",
      "Comedor",
      "Refrigerador",
      "Parrilla",
      "Fogatero",
      "Asador en terraza",
      "Cafetera",
    ],
  },
  {
    id: 12,
    title: "Cabaña 16 Personas",
    image: "/images/cabanas/cabanas166personas.jpg",
    people: "16 personas",
    price: "$8,500 / noche",
    description:
      "Amplia cabaña con terraza y sala para grupos grandes.",
    features: [
      "8 camas matrimoniales",
      "3 baños completos",
      "Comedor",
      "Refrigerador",
      "Parrilla eléctrica",
      "Chimenea",
      "Cafetera",
      "Sala",
      "Terraza",
    ],
  },
  {
    id: 13,
    title: "Cabaña 20 Personas",
    image: "/images/cabanas/cabana20personas.jpg",
    people: "20 personas",
    price: "$10,000 - $11,000 / noche",
    description:
      "La opción más grande del complejo, ideal para eventos o grupos grandes.",
    features: [
      "10 camas matrimoniales",
      "3 a 5 baños completos",
      "Comedor",
      "Refrigerador",
      "Parrilla eléctrica",
      "Cocina equipada",
      "Terraza con asador",
      "Cafetera",
    ],
  },
];

export const experiences = [
  {
    title: "Fogata nocturna",
    description:
      "Disfruta una noche tranquila con fogata, chocolate caliente y el sonido del bosque.",
  },
  {
    title: "Escapada romántica",
    description:
      "Preparamos detalles especiales para aniversarios, cumpleaños o fines de semana en pareja.",
  },
  {
    title: "Cercanía a atractivos turísticos",
    description:
      "Ubicación ideal para visitar Prismas Basálticos, haciendas, bosques y el centro de Huasca.",
  },
];

export const gallery = [
  {
    src: "/images/cabanas/hero.jpg",
    alt: "Cabaña elegante en Huasca de Ocampo",
  },
  {
    src: "/images/cabanas/bosque.jpg",
    alt: "Bosque cerca de las cabañas",
  },
  {
    src: "/images/cabanas/interior.jpg",
    alt: "Interior cálido de cabaña",
  },
  {
    src: "/images/cabanas/comida.jpg",
    alt: "Interior cálido de cabaña",
  },
  {
    src: "/images/cabanas/camping.jpg",
    alt: "Interior cálido de cabaña",
  },
];