// ===============================
// 🏷️ LISTA DE PRODUCTOS (279)
// ===============================
const nombres279 = [
  "ADIDAS","ADIDAS","ADIDAS","ADIDAS","ADIDAS","ADIDAS",
  "ADIDAS","ADIDAS","ADIDAS","New Balance","New Balance","New Balance",
  "New Balance","New Balance","New Balance","Tenis Adidas","Tenis Adidas","Tenis Adidas",
  "Tenis Adidas","TENIS TOMMY CLASICOS","TENIS TOMMY CLASICOS","TENIS TOMMY CLASICOS","TENIS TOMMY CLASICOS","Tenis adidas",
  "Tenis adidas","Tenis adidas","Tenis adidas","Tenis adidas","Zapatos Reebok","Zapatos Reebok",
  "Zapatos Reebok","Zapatos Reebok","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER",
  "Converse All Start","Converse All Start","Converse All Start","Converse All Start","Converse All Start",
  "Zapatos Gasp brillantes","Zapatos Gasp","Zapatos Gasp","Zapatos Gasp","Zapatos Gasp","Tenis New balance",
  "Tenis New balance","Tenis New balance","Tenis New balance","Zapatos Deportivas Vans","Zapatos Deportivas Vans","Zapatos Deportivas Vans",
  "Nike Dunk","Nike Dunk","Nike Dunk","Nike Dunk","Tenis Superstar Adidas","Tenis Superstar Adidas",
  "Tenis Superstar Adidas","Tenis Superstar Adidas","Zapatos Skechers Uno","Zapatos Skechers Uno","Zapatos Skechers Uno","Zapatos Skechers Uno",
  "Zapatos Skechers Uno","Zapatos Skechers Uno","Tenis New Balance","Tenis New Balance","Tenis Suede Charles F. Stead V | PUMA","Tenis New Balance",
  "Tenis New Balance","Tenis New Balance","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA",
  "Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Tenis Suede Charles F. Stead V | PUMA","Zapatillas Tommy Hilfiger™","Zapatillas Tommy Hilfiger™","Zapatillas Tommy Hilfiger™",
  "Zapatillas Tommy Hilfiger™","Zapatillas Tommy Hilfiger™","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger",
  "Zapatillas con plataforma | Negro | Tommy Hilfiger","Tenis Deals Tênis Lindos Tênis Adidas","Tenis Deals Tênis Lindos Tênis Adidas","ADIDAS","Tenis Deals Tênis Lindos Tênis Adidas","Tenis Deals Tênis Lindos Tênis Adidas",
  "ADIDAS","ADIDAS","Reebok Court Advance","ADIDAS","New Balance","Reebok Court Advance",
  "Reebok Court Advance","Reebok Court Advance","New Balance","New Balance","New Balance","New Balance",
  "New Balance","New Balance","New Balance","New Balance","New Balance","New Balance",
  "Chaussures Homme Baskets Louis Vuitton","Chaussures Homme Baskets Louis Vuitton","Converse All Start","Chaussures Homme Baskets Louis Vuitton","Converse All Start","Converse All Start",
  "Converse All Start","New Balance","New Balance","New Balance","New Balance","New Balance",
  "New Balance","New Balance","New Balance","New Balance","New Balance","Skechers BA",
  "New Balance","Skechers BA","Skechers BA","Tenis Fila","Tenis Fila","Tenis Fila","Tenis Fila","Tenis Fila",
  "Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger","Zapatillas con plataforma | Negro | Tommy Hilfiger",
  "Tenis Adidas","Tenis Adidas","Tenis Adidas","Tenis Adidas","Tenis Adidas","TENIS LACOSTE","TENIS LACOSTE","TENIS LACOSTE","TENIS LACOSTE",
  "New Canvas Shoes Sneaker","New Canvas Shoes Sneaker","New Canvas Shoes Sneaker","New Canvas Shoes Sneaker","New Canvas Shoes Sneaker",
  "Tenis Adidas","Tenis Adidas","Tenis Adidas","New Canvas Shoes Sneaker","Tenis Adidas","Tenis Adidas",
  "Nike Dunk","Nike Dunk","Nike Dunk","Nike Dunk","Converse Talón Abierto","Converse Talón Abierto","Converse Talón Abierto","TENIS LACOSTE",
  "Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas","Tenis Superstar Adidas",
  "Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse",
  "Nike SB","Nike SB","Nike SB","Nike SB","Nike SB","Nike SB","Nike SB","Nike SB",
  "Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas","Cloudfoam Tenis Adidas",
  "Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse",
  "Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse","Suela Alta Zapatos Converse",
  "Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers",
  "Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers","Lacoste Powercourt Leather Trainers",
  "TENIS PUMA","TENIS PUMA","TENIS PUMA","TENIS PUMA",
  "Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running","Nike Running",
  "New Balance","New Balance","New Balance","New Balance","New Balance","New Balance","New Balance","New Balance",
  "Beib Shoes","TOMMY HILFIGER","Puma","Mc QUEEN","Adidas","Puma","Puma","Vans Ward Canvas","Tenis River Blanco","Tenis River Blanco","TENIS TOMMY HILFIGER","TENIS TOMMY HILFIGER","Tenis Lacoste","Converse","Reebok Classic Leather","Lacoste",
  "Reebok Classic Leather","Lacoste","Lacoste","TENIS TOMMY HILFIGER","PUMA","PUMA","PUMA","PUMA","PUMA","PUMA","TENIS TOMMY HILFIGER","Reebok Classic Leather","Reebok Classic Leather","Reebok Classic Leather","PUMA","Reebok Classic Leather",
  "Reebok modelo Ramble","Reebok Royal Glide Ripple","Reebok Royal Glide Ripple","Converse Chuck Taylor All Star","Tommy Hilfiger","Reebok Classic Leather",
  "Reebok modelo Classic Leather","Converse","Tommy Hilfiger"
];

// ===============================
// 📦 CREAR PRODUCTOS
// ===============================
const productos = [];

nombres279.forEach((nombre, i) => {
  productos.push({
    nombre: nombre,
    descripcion: "Zapatilla deportiva cómoda y resistente. Ideal para uso diario, entrenamiento y caminatas.",
    imagen: `img/${i + 1}.jpeg`
  });
});

// ===============================
// 🛍️ MOSTRAR PRODUCTOS
// ===============================
function generarProductos() {
  const contenedor = document.getElementById("listaProductos");
  contenedor.innerHTML = "";

  productos.forEach((p, index) => {
    contenedor.innerHTML += `
      <div class="producto">
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>

        <div class="botones">
          <button onclick="verDetalles(${index})">Detalles</button>

          <a href="${p.imagen}" download class="btn-descargar">
            <span class="text">Descargar</span>
          </a>
        </div>
      </div>
    `;
  });
}



// ===============================
// 🔍 DETALLES + WHATSAPP
// ===============================
function verDetalles(index) {
  const p = productos[index];

  document.getElementById("modalImg").src = p.imagen;
  document.getElementById("modalTitulo").textContent = p.nombre;
  document.getElementById("modalDescripcion").textContent = p.descripcion;

  document.getElementById("modalPrecio").innerHTML = `
    👟 Hasta talla 34: <b>$18</b><br>
    👟 Desde talla 35: <b>$20</b>
  `;

  const mensaje = `Hola 👋 Estoy interesado en el producto: ${p.nombre}
Precios:
- Hasta talla 34: $18
- Desde talla 35: $20`;

  document.getElementById("btnWhatsapp1").href =
    `https://wa.me/593968806312?text=${encodeURIComponent(mensaje)}`;

  document.getElementById("btnWhatsapp2").href =
    `https://wa.me/593991216329?text=${encodeURIComponent(mensaje)}`;

  document.getElementById("modal").classList.add("activo");
}

// ===============================
// ❌ CERRAR MODAL
// ===============================
function cerrarModal() {
  document.getElementById("modal").classList.remove("activo");
}

function toggleWhatsapp() {
  document.getElementById("whatsappMenu").classList.toggle("activo");
}





function animarProductos() {
  const productos = document.querySelectorAll(".card");
  const alturaPantalla = window.innerHeight;

  productos.forEach((card, index) => {
    const posicion = card.getBoundingClientRect().top;

    if (posicion < alturaPantalla - 50) {
      setTimeout(() => {
        card.classList.add("mostrar");
      }, index * 100); // efecto en cadena
    }
  });
}

window.addEventListener("scroll", animarProductos);
window.addEventListener("load", animarProductos);








const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });

});





// ===============================
// 🚀 INICIAR
// ===============================
window.onload = generarProductos;
