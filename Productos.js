const productos = [
    {
      title: "Xiaomi Redmi Note 13 pro 5G",
      categoria: "Celular",
      descripcion: "Pantalla 6.67'' AMOLED FHD+ (120Hz, Dolby Vision), procesador Snapdragon 7s Gen 2, cámara principal de 200 MP con OIS, batería 5100 mAh con carga rápida de 67W, ideal para fotografía de alta resolución y uso intensivo diario, precio estimado: accesible dentro de la gama media.",
      imagen: "IMAGENES/XiamoRedmiNote13pro5G.png"
    },
    {
      title: "Motorola Moto G Stylus 5G (2025)",
      categoria: "Celular",
      descripcion: "Pantalla 6.7'' pOLED con Dolby Atmos, procesador Qualcomm Snapdragon, cámara de 50 MP con OIS, lápiz óptico para productividad y creatividad, ideal para usuarios que buscan versatilidad y herramientas de productividad, precio estimado competitivo en su segmento.",
      imagen: "IMAGENES/MotorolaMotoGStylus5G(2025).png"
    },
    {
      title: "Lenovo IdeaPad Duet 5 Chromebook",
      categoria: "Computadora",
      descripcion: "Pantalla 13.3'' OLED Full HD, procesador Snapdragon 7cG2, RAM: 8 GB, almacenamiento de 128 GB eMMC, batería de hasta 12 horas, ideal para usuarios que buscan versatilidad y portabilidad, precio estimado desde $299 USD.",
      imagen: "IMAGENES/LenovoIdeaPadDuet5Chromebook.png"
    },
    {
      title: "Samsung Galaxy Tab S9",
      categoria: "Tablet",
      descripcion: "Pantalla 10.9'' con resolución 2304 x 1440, procesador Exynos 1380, incluye S PenS, ideal para usuarios que buscan una tablet versátil con herramientas de productividad, precio estimado desde 389 euros.",
      imagen: "IMAGENES/SamsungGalaxyTabS9FE.png"
    }
];

function mostrarProductos(){
    let tarjetas;
    productos.forEach((producto)=> {
        tarjetas += `<div>
                        <img src="IMAGENES/${producto.imagen}"/>
                        <h2>${producto.title}</h2>
                     </div>`;
    });

    document.getElementById("contenedor-productos").innerHTML = tarjetas
}

