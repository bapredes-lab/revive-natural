// ============================================================
//  REVIVE NATURAL — LISTA DE PRODUCTOS
//  ¿Cómo agregar un producto nuevo?
//  1. Copia uno de los bloques de abajo (entre llaves { })
//  2. Pégalo AL FINAL de la lista (antes del corchete ] final)
//  3. Pon una coma , al final del bloque ANTERIOR
//  4. Cambia: id (siguiente número), nombre, precio, imagen, descripcion, categoria
//  5. Guarda el archivo y sube a GitHub → Vercel actualiza solo
// ============================================================

const WHATSAPP_NUMBER = "573007145704"; // ← Cambia tu número aquí si cambia

const CATEGORIAS = [
  "Todos",
  "Colágeno",
  "Vitaminas",
  "Minerales",
  "Inmunidad",
  "Belleza",
  "Proteínas",
  "Alimentos",
  "Aceites",
  "Especiales"
];

const PRODUCTOS = [
  {
    id: 1,
    nombre: "3 Calostros Factor de Transferencia",
    precio: 65000,
    imagen: "imagenes/3calostros.jpg",
    descripcion: "CaLosPlus con Camu-Camu, Cúrcuma, Hongo Shitake y Omega 3. 50 porciones, 2.400mg de calostros por porción.",
    categoria: "Inmunidad",
    destacado: true
  },
  {
    id: 2,
    nombre: "12 Colágenos con Células Madres",
    precio: 76500,
    imagen: "imagenes/12colagenos.jpg",
    descripcion: "ColagenPlus con 12.000mg de colágeno hidrolizado por porción. Orígenes: Marino, Caprino, Ovino, Avícola y Bovino. 50 porciones.",
    categoria: "Colágeno",
    destacado: true
  },
  {
    id: 3,
    nombre: "Biotin 900 mcg",
    precio: 41500,
    imagen: "imagenes/biotin-900.jpg",
    descripcion: "Healthy America. 90 softgels. Promueve el crecimiento del cabello, fortalece las uñas y mejora la piel.",
    categoria: "Belleza",
    destacado: true
  },
  {
    id: 4,
    nombre: "Super Magnesium 400 mg",
    precio: 65000,
    imagen: "imagenes/super-magnesium.jpg",
    descripcion: "Healthy America. Fórmula 2 Softgels con Aspartato, Lactato y Citrato de Magnesio. 100 softgels. Apoya la función muscular y nerviosa.",
    categoria: "Minerales",
    destacado: false
  },
  {
    id: 5,
    nombre: "Vitamina D3 + K2 DuoVit",
    precio: 67000,
    imagen: "imagenes/vitamina-d3-k2.jpg",
    descripcion: "Healthy America. 100 softgels. Combinación ideal de D3 y K2 para la absorción óptima de calcio y la salud ósea y cardiovascular.",
    categoria: "Vitaminas",
    destacado: true
  },
  {
    id: 6,
    nombre: "Aceite de Coco Orgánico 400g",
    precio: 89000,
    imagen: "imagenes/aceite-coco.jpg",
    descripcion: "OK Natural. Prensado en frío. 100% puro, sin hidrogenar y sin refinar. Ideal para cocinar, hidratación de piel y cabello.",
    categoria: "Aceites",
    destacado: true
  },
  {
    id: 7,
    nombre: "Leche de Soya La Superior 750g",
    precio: 34500,
    imagen: "imagenes/leche-soya.jpg",
    descripcion: "La Superior. Mezcla en polvo para preparar. Sabor a miel. Del grano entero, libre de gluten y lactosa. Peso neto 750g.",
    categoria: "Alimentos",
    destacado: false
  },
  {
    id: 8,
    nombre: "Aceite Corporal Árbol de Té 60ml",
    precio: 6300,
    imagen: "imagenes/aceite-arbol-te.jpg",
    descripcion: "OK Natural. Aceite emoliente de árbol de té. Reduce bacterias y microorganismos. Presentación pequeña 60ml.",
    categoria: "Belleza",
    destacado: false
  },
  {
    id: 9,
    nombre: "Aceite Corporal Árbol de Té 120ml",
    precio: 11000,
    imagen: "imagenes/aceite-arbol-te.jpg",
    descripcion: "OK Natural. Aceite emoliente de árbol de té. Reduce bacterias y microorganismos. Presentación mediana 120ml.",
    categoria: "Belleza",
    destacado: false
  },
  {
    id: 10,
    nombre: "Aceite Corporal Árbol de Té 240ml",
    precio: 18000,
    imagen: "imagenes/aceite-arbol-te.jpg",
    descripcion: "OK Natural. Aceite emoliente de árbol de té. Reduce bacterias y microorganismos. Presentación grande 240ml.",
    categoria: "Belleza",
    destacado: true
  }

  // ← AGREGA NUEVOS PRODUCTOS AQUÍ
  // Copia este bloque, quita las // y cambia los datos:
  // ,{
  //   id: 11,
  //   nombre: "Nombre del producto",
  //   precio: 50000,
  //   imagen: "imagenes/nombre-del-archivo.jpg",
  //   descripcion: "Descripción del producto.",
  //   categoria: "Vitaminas",
  //   destacado: false
  // }
];
