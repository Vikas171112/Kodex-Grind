const allProducts = [
  {
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    price: 399,
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
  },
  {
    name: "Apple Watch Series 9 Smartwatch",
    price: 429,
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400",
  },
  {
    name: "JBL Flip 6 Portable Bluetooth Speaker",
    price: 129,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
  },
  {
    name: "Logitech G Pro Wireless Gaming Mouse",
    price: 149,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400",
  },
  {
    name: "Keychron K2 Mechanical Keyboard",
    price: 119,
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400",
  },
  {
    name: "Rain Design Aluminum Laptop Stand",
    price: 59,
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=400",
  },
  {
    name: "Apple AirPods Pro (2nd Generation)",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400",
  },
  {
    name: "GoPro HERO11 Black Action Camera",
    price: 499,
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96aee?w=400",
  },
  {
    name: "Samsung T7 Portable SSD 1TB",
    price: 159,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400",
  },
  {
    name: "TP-Link Tapo Smart Home Security Camera",
    price: 79,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400",
  },
  {
    name: "Apple iPad Air 5th Generation",
    price: 599,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
  },
  {
    name: "Anker Wireless Fast Charging Pad",
    price: 39,
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
  },
  {
    name: "Meta Quest 3 VR Headset",
    price: 549,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=400",
  },
  {
    name: "Blue Yeti USB Studio Microphone",
    price: 139,
    image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?w=400",
  },
  {
    name: "Philips Hue Smart LED Table Lamp",
    price: 89,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400",
  },
];

const grid = document.querySelector(".product-grid");
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");
const cartItems = document.querySelector(".cart-items");
const cartCount = document.getElementById("cart-count");

let cart = [];

function saveCartToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCartFromStorage() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

function renderProducts() {
  let html = "";

  allProducts.forEach((product, index) => {
    const exists = cart.find((item) => item.id === index);

    html += `
      <div class="card">
        <img src="${product.image}">
        <h4>${product.name}</h4>
        <p>$${product.price}</p>
        <button onclick="addToCart(${index})" class="${exists ? "added" : ""}">
          ${exists ? "Added In Cart" : "Add To Cart"}
        </button>
      </div>
    `;
  });

  grid.innerHTML = html;
}

function addToCart(id) {
  let item = cart.find((p) => p.id === id);

  if (item) {
    item.qty++;
  } else {
    cart.push({
      id,
      ...allProducts[id],
      qty: 1,
    });
  }

  saveCartToStorage();
  updateCart();
  renderProducts();
}

function increaseQty(id) {
  cart.find((p) => p.id === id).qty++;
  saveCartToStorage();
  updateCart();
}

function decreaseQty(id) {
  let item = cart.find((p) => p.id === id);

  item.qty--;

  if (item.qty <= 0) {
    cart = cart.filter((p) => p.id !== id);
  }

  saveCartToStorage();
  updateCart();
  renderProducts();
}

function updateCart() {
  cartCount.innerText = cart.length;

  let html = "";

  cart.forEach((item) => {
    html += `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>$${item.price}</p>
        </div>
        <div class="qty">
          <button onclick="decreaseQty(${item.id})">-</button>
          <span>${item.qty}</span>
          <button onclick="increaseQty(${item.id})">+</button>
        </div>
      </div>
    `;
  });

  cartItems.innerHTML = html;
}

cartBtn.onclick = () => {
  cartModal.style.display = "flex";
};

closeCart.onclick = () => {
  cartModal.style.display = "none";
};

cartModal.onclick = (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
};

loadCartFromStorage();
renderProducts();
updateCart();
