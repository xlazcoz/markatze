const produktuak = [
  {
    productName: "kamiseta negra",
    price: 15,
    img: "https://www.joma-sport.com/dw/image/v2/BFRV_PRD/on/demandware.static/-/Sites-joma-masterCatalog/default/dwf0d7d363/images/medium/101739.100_7.jpg?sw=900&sh=900&sm=fit",
    category: 'kamisetak'
  },
  {
    productName: "kamiseta blanca",
    price: 30,
    img: "https://euroserigrafia.com/26137-large_default/camiseta-basica-de-algodon-personalizada.jpg",
    category: 'kamisetak'
  },
  {
    productName: "Puma Zapatillak",
    price: 80,
    img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/397447/02/sv01/fnd/EEA/fmt/png/Zapatillas-PUMA-Club-II-Era",
    category: 'zapatillak' 
  },
  {
    productName: "Adidas Zapatillak",
    price: 60,
    img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/02cd9a97ce874d89ba17ae2b003ebe50_9366/Zapatilla_Grand_Court_Lifestyle_Tennis_Lace-Up_Blanco_GW6511_01_standard.jpg",
    category: 'zapatillak' 
  },
  {
    productName: "Real Sociedad kamiseta",
    price: 80,
    img: "https://camisetasfutbolbaloncesto.com/cdn/shop/files/kamiseta-home-2526-Photoroom.jpg?v=1753348013&width=1946",
    category: 'kamisetak'
  },
  {
    productName: "bakeroak",
    price: 40,
    img: "https://www.prolaboral.com/10403-medium_default/pantalon-vaquero-issa-jest-stretch-8025.jpg",
    category: 'galtzak'
  },
  {
    productName: "Galtza Beltzak",
    price: 70,
    img: "https://www.kiabi.es/images/pantalon-de-jogging-de-tejido-de-chandal-negro-bfb92_2_hd1.jpg",
    category: 'galtzak'
  },
  {
    productName: "panazko galtza",
    price: 60,
    img: "https://www.corbataslester.com/9696-thickbox_default/pantalon-pana-s-p-beige.jpg",
    category: 'galtzak'
  },
]

function erakutsiProduktuak(erakustekoProduktuak) {
  const produktuenZerrenda = document.getElementById("produktuenZerrenda")
  
  produktuenZerrenda.innerHTML = ""
  
  erakustekoProduktuak.forEach(produktua => {
    const div = document.createElement("div")
    div.className = 'produktu-txartela'
    
    div.innerHTML = `
      <img src="${produktua.img}" alt="${produktua.productName}">
      <h3>${produktua.productName}</h3>
      <p class="prezioa">$ ${produktua.price}</p>
      <button>Gehitu saskira</button>
    `
    
    produktuenZerrenda.append(div)
  })
}

function iragaziProduktuak(kategoria) {
  const erakustekoProduktuak = produktuak.filter(produktua => {
    return produktua.category === kategoria
  })
  
  erakutsiProduktuak(erakustekoProduktuak)
}

const kamisetakBtn = document.getElementById('kamisetakBtn');
const galtzakBtn = document.getElementById('galtzakBtn');
const zapatillakBtn = document.getElementById('zapatillakBtn');
const produktuGuztiakBtn = document.getElementById('produktuGuztiakBtn');

kamisetakBtn.addEventListener('click', function() {
  iragaziProduktuak('kamisetak');
});

galtzakBtn.addEventListener('click', function() {
  iragaziProduktuak('galtzak');
});

zapatillakBtn.addEventListener('click', function() {
  iragaziProduktuak('zapatillak');
});

produktuGuztiakBtn.addEventListener('click', function() {
  erakutsiProduktuak(produktuak)
});

erakutsiProduktuak(produktuak)