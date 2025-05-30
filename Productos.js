const productos = [
    {
      id: 1,
      title: "Xiaomi Redmi Note 13 pro 5G",
      categoria: "Celular",
      marca: "Xiaomi",
      usos: ["Uso diario", "Fotografía", "Entretenimiento"],
      descripcion: "Pantalla 6.67'' AMOLED FHD+ (120Hz, Dolby Vision), procesador Snapdragon 7s Gen 2, cámara principal de 200 MP con OIS, batería 5100 mAh con carga rápida de 67W, ideal para fotografía de alta resolución y uso intensivo diario, precio estimado: accesible dentro de la gama media.",
      imagen: "IMAGENES/XiamoRedmiNote13pro5G.png",
      presupuesto: "$384.000-$1.356.700"
    },
    {
      id: 2,
      title: "Motorola Moto G Stylus 5G (2025)",
      categoria: "Celular",
      marca: "Motorola",
      usos: ["Uso diario", "Estudio", "Consumo multimedia", "Trabajo / Oficina"],
      descripcion: "Pantalla 6.7'' pOLED con Dolby Atmos, procesador Qualcomm Snapdragon, cámara de 50 MP con OIS, lápiz óptico para productividad y creatividad, ideal para usuarios que buscan versatilidad y herramientas de productividad, precio estimado competitivo en su segmento.",
      imagen: "IMAGENES/MotorolaMotoGStylus5G(2025).png",
      presupuesto: "$646.000–$1.231.900" 
    },
    {
      id: 3,
      title: "Lenovo IdeaPad Duet 5 Chromebook",
      categoria: "Computadora",
      marca: "Lenovo",
      usos: ["Uso diario", "Estudio", "Consumo multimedia", "Trabajo / Oficina"],
      descripcion: "Pantalla 13.3'' OLED Full HD, procesador Snapdragon 7cG2, RAM: 8 GB, almacenamiento de 128 GB eMMC, batería de hasta 12 horas, ideal para usuarios que buscan versatilidad y portabilidad, precio estimado desde $299 USD.",
      imagen: "IMAGENES/LenovoIdeaPadDuet5Chromebook.png",
      presupuesto: "$545.896-$875.404"
    }, 
    {
    id: 4,
    title: "Apple iPhone 14",
    categoria: "Celular",
    marca: "Apple",
    usos: ["Fotografía", "Uso diario", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla OLED Super Retina XDR de 6.1'', chip A15 Bionic, cámara dual de 12 MP, Face ID, batería optimizada para todo el día, ideal para usuarios que buscan rendimiento y calidad fotográfica.",
    imagen: "IMAGENES/AppleiPhone14.png",
    presupuesto: "$939.999–$1.314.999"
  },
  { 
    id: 5,
    title: "HP Pavilion x360",
    categoria: "Computadora",
    marca: "HP",
    usos: ["Estudio", "Trabajo / Oficina", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla táctil de 14'', procesador Intel Core i5, 8 GB RAM, 256 GB SSD, diseño convertible 2 en 1, ideal para tareas escolares y profesionales.",
    imagen: "IMAGENES/HPPavilionx360.png",
    presupuesto: "$280.000–$1.009.000"
  },
  {
    id: 6,
    title: "Samsung Galaxy Tab A8",
    categoria: "Tablet",
    marca: "Samsung",
    usos: ["Consumo / Multimedia", "Estudio", "Uso diario / general"],
    descripcion: "Pantalla de 10.5'', procesador Unisoc T618, batería de 7040 mAh, ideal para estudiantes y entretenimiento ligero.",
    imagen: "IMAGENES/SamsungGalaxyTabA8.png",
    presupuesto: "$349.000–$973.000"
  },
  {
    id: 7,
    title: "DELL XPS 13",
    categoria: "Computadora",
    marca: "DELL",
    usos: ["Programación", "Trabajo / Oficina", "Edición de video"],
    descripcion: "Pantalla 13.3'' FHD+, Intel Core i7, 16 GB RAM, SSD 512 GB, ideal para tareas exigentes y diseño profesional.",
    imagen: "IMAGENES/DELLXPS13.png",
    presupuesto: "$850.000–$1.200.000"
  },
  {
    id: 8,
    title: "Motorola Edge 40 Neo",
    categoria: "Celular",
    marca: "Motorola",
    usos: ["Gaming", "Fotografía", "Uso diario"],
    descripcion: "Pantalla 6.55'' P-OLED 144Hz, Dimensity 7030, cámara de 50 MP con OIS, batería 5000 mAh, ideal para multitarea y entretenimiento.",
    imagen: "IMAGENES/MotorolaEdge40Neo.png",
    presupuesto: "$300.000–$400.000"
  },
  {
    id: 9,
    title: "Lenovo Yoga 7i",
    categoria: "Computadora",
    marca: "Lenovo",
    usos: ["Programación", "Creación de contenido", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla táctil 14'' 2.2K, Intel Core i7, 16 GB RAM, SSD 1 TB, ideal para usuarios avanzados y creativos.",
    imagen: "IMAGENES/Lenovo Yoga 7i.png",
    presupuesto: "$850.000–$1.200.000"
  },
  {
    id: 10,
    title: "Amazon Fire HD 10",
    categoria: "Tablet",
    marca: "Amazon",
    usos: ["Consumo / Multimedia", "Uso diario / general", "Entretenimiento"],
    descripcion: "Pantalla 10.1'', resolución Full HD, procesador Octa-Core, Alexa integrada, excelente relación calidad/precio.",
    imagen: "IMAGENES/AmazonFireHD10.png",
    presupuesto: "$150.000–$250.000"
  },
  {
    id: 11,
    title: "Xiaomi Pad 6",
    categoria: "Tablet",
    marca: "Xiaomi",
    usos: ["Estudio", "Trabajo / Oficina", "Consumo / Multimedia"],
    descripcion: "Pantalla 11'' 2.8K 144Hz, procesador Snapdragon 870, batería 8840 mAh, ideal para productividad y entretenimiento.",
    imagen: "IMAGENES/XiaomiPad6.png",
    presupuesto: "$400.000–$550.000"
  },
  {
    id: 12,
    title: "Asus ROG Zephyrus G14",
    categoria: "Computadora",
    marca: "Asus",
    usos: ["Gaming", "Edición de video", "Creación de contenido"],
    descripcion: "Pantalla 14'' QHD 120Hz, AMD Ryzen 9, GPU RTX 3060, 16 GB RAM, 1 TB SSD, portátil potente para creadores y gamers.",
    imagen: "IMAGENES/AsusROGZephyrusG14.png",
    presupuesto: "$850.000–$1.200.000"
  },
  {
    id: 13,
    title: "Realme GT Neo 5",
    categoria: "Celular",
    marca: "Realme",
    usos: ["Gaming", "Uso diario", "Entretenimiento"],
    descripcion: "Pantalla AMOLED 6.74'' 144Hz, Snapdragon 8+ Gen 1, batería 5000 mAh, carga rápida 240W, ideal para usuarios exigentes.",
    imagen: "IMAGENES/RealmeGTNeo5.png",
    presupuesto: "$430.000–$550.000"
  },
  {
    id: 14,
    title: "Acer Aspire 5",
    categoria: "Computadora",
    marca: "Acer",
    usos: ["Estudio", "Trabajo / Oficina", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla 15.6'' FHD, Intel Core i5, 8 GB RAM, SSD 512 GB, cámara web integrada, excelente para tareas académicas y de oficina.",
    imagen: "IMAGENES/AcerAspire5.png",
    presupuesto: "$599.999-$1.099.999"
  },
  {
    id: 15,
    title: "Huawei MatePad 11",
    categoria: "Tablet",
    marca: "Huawei",
    usos: ["Consumo / Multimedia", "Trabajo / Oficina", "Uso diario / general"],
    descripcion: "Pantalla 11'' 120Hz, procesador Snapdragon 865, sistema HarmonyOS, gran batería y experiencia fluida.",
    imagen: "IMAGENES/HuaweiMatePad11.png",
    presupuesto: "$350.000–$500.000"
  },
  {
    id: 16,
    title: "Microsoft Surface Laptop Go 2",
    categoria: "Computadora",
    marca: "Microsoft",
    usos: ["Estudio", "Trabajo / Oficina", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla táctil 12.4'', Intel Core i5, diseño liviano y elegante, ideal para productividad móvil.",
    imagen: "IMAGENES/MicrosoftSurfaceLaptopGo2.png",
    presupuesto: "$570.000–$700.000"
  },
  {
    id: 17,
    title: "Sony Xperia 10 V",
    categoria: "Celular",
    marca: "Sony",
    usos: ["Fotografía", "Entretenimiento", "Uso diario"],
    descripcion: "Pantalla OLED 6.1'', cámara triple con tecnologías de Alpha, batería de larga duración, gran opción multimedia.",
    imagen: "IMAGENES/SonyXperia10V.png",
    presupuesto: "$480.000–$600.000"
  },
  {
    id: 18,
    title: "Chuwi HeroBook Pro",
    categoria: "Computadora",
    marca: "Chuwi",
    usos: ["Estudio", "Uso diario / general"],
    descripcion: "Pantalla 14.1'', Intel Celeron, 8 GB RAM, 256 GB SSD, precio accesible, ideal para navegación y tareas básicas.",
    imagen: "IMAGENES/ChuwiHeroBookPro.png",
    presupuesto: "$280.299 - $415.363"
  },
  {
    id: 19,
    title: "Apple iPad 10ª Generación",
    categoria: "Tablet",
    marca: "Apple",
    usos: ["Estudio", "Consumo / Multimedia", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla 10.9'', chip A14 Bionic, compatible con Apple Pencil, ideal para clases y tareas creativas.",
    imagen: "IMAGENES/AppleiPad10ªGeneración.png",
    presupuesto: "$600.000–$800.000"
  },
  {
    id: 20,
    title: "OnePlus Nord CE 3 Lite",
    categoria: "Celular",
    marca: "OnePlus",
    usos: ["Uso diario", "Reuniones virtuales / clases online", "Entretenimiento"],
    descripcion: "Pantalla LCD 6.72'' 120Hz, Snapdragon 695, cámara de 108 MP, batería 5000 mAh con carga rápida.",
    imagen: "IMAGENES/OnePlusNordCE3Lite.png",
    presupuesto: "$290.000–$350.000"
  },
  {
    id: 21,
    title: "Framework Laptop 13",
    categoria: "Computadora",
    marca: "Framework",
    usos: ["Programación", "Trabajo / Oficina", "Creación de contenido"],
    descripcion: "Laptop modular y reparable, pantalla 13.5'' 3:2, Intel Core i7, RAM y SSD personalizables, diseñada para durar.",
    imagen: "IMAGENES/FrameworkLaptop13.png",
    presupuesto: "$950.000–$1.200.000"
  },
  {
    id: 22,
    title: "Vivo V27 5G",
    categoria: "Celular",
    marca: "Vivo",
    usos: ["Fotografía", "Redes sociales", "Uso diario"],
    descripcion: "Pantalla AMOLED 120Hz, cámara frontal de 50 MP, diseño atractivo, ideal para selfies y contenido digital.",
    imagen: "IMAGENES/VivoV275G.png",
    presupuesto: "$320.000–$400.000"
  },
  {
    id: 23,
    title: "Toshiba Dynabook Satellite Pro",
    categoria: "Computadora",
    marca: "Toshiba",
    usos: ["Trabajo / Oficina", "Estudio", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla 15.6'', Intel Core i5, diseño profesional y confiable para tareas diarias en oficina.",
    imagen: "IMAGENES/ToshibaDynabookSatellitePro.png",
    presupuesto: "$490.000–$600.000"
  },
  {
    id: 24,
    title: "Amazon Kindle Fire Max 11",
    categoria: "Tablet",
    marca: "Amazon",
    usos: ["Consumo / Multimedia", "Lectura", "Entretenimiento"],
    descripcion: "Pantalla 11'', procesador octa-core, ideal para ver series, leer libros y navegar cómodamente.",
    imagen: "IMAGENES/AmazonKindleFireMax11.png",
    presupuesto: "$180.000–$300.000"
  },
  {
    id: 25,
    title: "MSI GF63 Thin",
    categoria: "Computadora",
    marca: "MSI",
    usos: ["Gaming", "Edición de video", "Creación de contenido"],
    descripcion: "Pantalla 15.6'' FHD 144Hz, Intel i7, GPU GTX 1650, buen rendimiento para juegos y edición básica.",
    imagen: "IMAGENES/MSIGF63Thin.png",
    presupuesto: "$700.000–$850.000"
  },
  {
    id: 26,
    title: "Oppo Reno8 T",
    categoria: "Celular",
    marca: "Oppo",
    usos: ["Fotografía", "Entretenimiento", "Uso diario / general"],
    descripcion: "Pantalla AMOLED 6.4'', cámara principal 100 MP, buena autonomía y carga rápida, ideal para redes y fotos.",
    imagen: "IMAGENES/OppoReno8T.png",
    presupuesto: "$310.000–$390.000"
  },
  {
    id: 27,
    title: "Alienware M15 R7",
    categoria: "Computadora",
    marca: "Alienware",
    usos: ["Gaming", "Creación de contenido", "Edición de video"],
    descripcion: "Pantalla 15.6'' QHD 240Hz, procesador Ryzen 9, GPU RTX 3070 Ti, potencia total para gamers exigentes.",
    imagen: "IMAGENES/AlienwareM15R7.png",
    presupuesto: "$1.450.000–$1.800.000"
  },
  {
    id: 28,
    title: "Infinix Zero 5G 2023",
    categoria: "Celular",
    marca: "Infinix",
    usos: ["Uso diario", "Gaming", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla IPS 6.78'' 120Hz, Dimensity 920, cámara 50 MP, gran batería de 5000 mAh.",
    imagen: "IMAGENES/InfinixZero5G2023.png",
    presupuesto: "$220.000–$300.000"
  },
  {
    id: 29,
    title: "Tecno Camon 20 Premier",
    categoria: "Celular",
    marca: "Tecno Mobile",
    usos: ["Fotografía", "Entretenimiento", "Redes sociales"],
    descripcion: "Pantalla AMOLED 6.67'', cámara 108 MP, Helio G99, ideal para creadores de contenido accesible.",
    imagen: "IMAGENES/TecnoCamon20Premier.png",
    presupuesto: "$250.000–$320.000"
  },
  {
    id: 30,
    title: "Google Pixel 7a",
    categoria: "Celular",
    marca: "Google (Pixel)",
    usos: ["Fotografía", "Uso diario", "Reuniones virtuales / clases online"],
    descripcion: "Pantalla OLED 6.1'' 90Hz, Tensor G2, cámara excelente en cualquier condición de luz, ideal para fans de Android puro.",
    imagen: "IMAGENES/GooglePixel7a.png",
    presupuesto: "$520.000–$650.000"
  },
  { 
    id: 31,
    title: "Samsung Galaxy Tab S9",
    categoria: "Tablet",
    marca: "Samsung",
    usos: ["Estudio", "Consumo multimedia", "Trabajo / Oficina"],
    descripcion: "Pantalla 10.9'' con resolución 2304 x 1440, procesador Exynos 1380, incluye S PenS, ideal para usuarios que buscan una tablet versátil con herramientas de productividad, precio estimado desde 389 euros.",
    imagen: "IMAGENES/SamsungGalaxyTabS9.png",
    presupuesto: "$1.184.999–$1.860.000"
  },
];

function mostrarProductos(listaProductos=productos){
    let tarjetas="";
    listaProductos.forEach((p)=> {
      console.log(p)
        tarjetas += `<div class="marco">
                        <button type="button" onclick="mostrarModal()">
                        <img src="${p.imagen}" width="200" height="200"/>
                        </button>
                        <p class="nd">${p.title}<p>
                     </div>`;
    });

    document.getElementById("contenedor-productos").innerHTML = tarjetas
}

function filtrarProductos(Dispositivo,Usos,Marcas,Presupuesto){
  console.log(Dispositivo,Usos,Marcas,Presupuesto);
  let listafiltrada="";

  if(Dispositivo=="Dispositivos" && Usos=="Usos" && Marcas=="Marcas" && Presupuesto!="Presupuesto"){

  }else if(Dispositivo!="Dispositivos" && Usos=="Usos" && Marcas=="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.categoria==Dispositivo);
  }else if(Dispositivo=="Dispositivos" && Usos!="Usos" && Marcas=="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.usos.includes(Usos));
  }else if(Dispositivo=="Dispositivos" && Usos=="Usos" && Marcas!="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.marca==Marcas);
  }else if(Dispositivo!="Dispositivos" && Usos!="Usos" && Marcas=="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.categoria==Dispositivo && producto.usos.includes(Usos));
  }else if(Dispositivo!="Dispositivos" && Usos=="Usos" && Marcas!="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.categoria==Dispositivo && producto.marca==Marcas);
  }else if(Dispositivo=="Dispositivos" && Usos!="Usos" && Marcas!="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.usos.includes(Usos) && producto.marca==Marcas);
  }else if(Dispositivo!="Dispositivos" && Usos!="Usos" && Marcas!="Marcas" && Presupuesto=="Presupuesto"){
    listafiltrada = productos.filter(producto => producto.categoria==Dispositivo &producto.usos.includes(Usos) && producto.marca==Marcas);
  }

  mostrarProductos(listafiltrada)
}

function cerrarModal(){
  document.getElementById("modal").close();
}


function mostrarModal(){
  //document.getElementById("titulo-producto").innerHTML=titulo;
  //document.getElementById("info-producto").innerHTML=descr;
  document.getElementById("modal").showModal();
}