const shoesData = [
  {
    name: "Nike Air Zoom Pegasus 40",
    rating: 4.5,
    price: 8999,
    oldPrice: 9999,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    features: ["Lightweight", "Breathable", "Running"],
    colors: ["#000000", "#ff0000", "#1e90ff"],
    sizes: [7, 8, 9, 10],
    pros: ["Very Comfortable", "Premium Cushion", "Stylish Design"],
    cons: ["Expensive", "Narrow Fit"],
  },

  {
    name: "Adidas Ultraboost 22",
    rating: 4.2,
    price: 11999,
    oldPrice: 13999,
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1059&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Energy Return", "Soft Sole"],
    colors: ["#ffffff", "#1e90ff"],
    sizes: [6, 7, 8, 9, 10],
    pros: ["Excellent Comfort", "Modern Look"],
    cons: ["High Price"],
  },

  {
    name: "Puma RS-X Reinvention",
    rating: 4.3,
    price: 6999,
    oldPrice: 7999,
    image:
      "https://images.unsplash.com/photo-1608230616491-5d696aa9fe52?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D-",
    features: ["Casual", "Street Style", "Comfort Fit"],
    colors: ["#228B22", "#000000"],
    sizes: [7, 8, 9],
    pros: ["Affordable", "Trendy Look"],
    cons: ["Less Arch Support"],
  },

  {
    name: "Reebok Nano X2",
    rating: 4.1,
    price: 7999,
    oldPrice: 8999,
    image:
      "https://images.unsplash.com/photo-1530389912609-9a007b3c38a4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Training", "Grip", "Durable"],
    colors: ["#808080", "#ffffff"],
    sizes: [8, 9, 10],
    pros: ["Stable Heel", "Strong Grip"],
    cons: ["Heavy"],
  },

  {
    name: "Asics Gel Kayano 29",
    rating: 4.7,
    price: 10999,
    oldPrice: 11999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
    features: ["Shock Absorption", "Running Comfort"],
    colors: ["#ff7f00", "#000000"],
    sizes: [7, 8, 9, 10],
    pros: ["Excellent Cushioning"],
    cons: ["Premium Price"],
  },

  {
    name: "New Balance Fresh Foam 1080",
    rating: 4.4,
    price: 9999,
    oldPrice: 10999,
    image:
      "https://images.unsplash.com/photo-1719916313433-2c028607d38a?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Soft Midsole", "Long Run Comfort"],
    colors: ["#800080", "#1e90ff"],
    sizes: [6, 7, 8, 9],
    pros: ["Soft Feel", "Good Stability"],
    cons: ["Simple Design"],
  },

  {
    name: "Under Armour HOVR Phantom",
    rating: 4.0,
    price: 8499,
    oldPrice: 9499,
    image:
      "https://media.istockphoto.com/id/1433052510/photo/young-woman-running-and-getting-fit-in-new-york.jpg?s=2048x2048&w=is&k=20&c=yT9rWTjwMy6GU7Qnl4kBKuxxqoV5H9PsjnE6Caqrmu0=",
    features: ["Responsive", "Modern Style"],
    colors: ["#FFD700", "#000000"],
    sizes: [8, 9, 10],
    pros: ["Stylish", "Comfortable"],
    cons: ["Sizing Issue"],
  },

  {
    name: "Skechers Go Walk 6",
    rating: 3.9,
    price: 5999,
    oldPrice: 6999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    features: ["Daily Comfort", "Lightweight"],
    colors: ["#000080", "#808080"],
    sizes: [6, 7, 8, 9, 10],
    pros: ["Very Comfortable"],
    cons: ["Basic Styling"],
  },

  {
    name: "Fila Disruptor II",
    rating: 4.1,
    price: 6499,
    oldPrice: 7499,
    image:
      "https://images.unsplash.com/photo-1579446565308-427218a2c60e?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    features: ["Chunky Design", "Street Fashion"],
    colors: ["#FFC0CB", "#ffffff"],
    sizes: [7, 8, 9],
    pros: ["Affordable", "Unique Look"],
    cons: ["Heavy Sole"],
  },

  {
    name: "Converse Chuck Taylor",
    rating: 4.6,
    price: 4999,
    oldPrice: 5499,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    features: ["Classic", "Lifestyle", "Durable"],
    colors: ["#000000", "#ffffff"],
    sizes: [6, 7, 8, 9, 10],
    pros: ["Timeless Style"],
    cons: ["Flat Sole"],
  },
];
const container = document.querySelector(".maincontent");
let sum = "";

shoesData.forEach((shoe) => {
  sum += `
  <article class="product-card">

    <section class="left-container">

      <div class="image-container">
        <img src="${shoe.image}" width="100%">
      </div>

      <div class="colors">
        ${shoe.colors
          .map((color) => `<span style="background-color:${color}"></span>`)
          .join("")}
      </div>

      <div class="features">
        ${shoe.features.map((f) => `<span>${f}</span>`).join("")}
      </div>

    </section>

    <section class="right-container">

      <div class="right-top">
        <h2>${shoe.name}</h2>
        <div class="product-rating" data-rating="${shoe.rating}"></div>
      </div>

      <div class="price">
        <span>₹${shoe.price}</span>
        <span class="old-price">₹${shoe.oldPrice}</span>
      </div>

      <div class="sizes">
        ${shoe.sizes.map((size) => `<span>${size}</span>`).join("")}
      </div>

      <div class="pros-cons">

        <div class="pros">
          <h4>Pros</h4>
          <ul>
            ${shoe.pros.map((p) => `<li>${p}</li>`).join("")}
          </ul>
        </div>

        <div class="cons">
          <h4>Cons</h4>
          <ul>
            ${shoe.cons.map((c) => `<li>${c}</li>`).join("")}
          </ul>
        </div>

      </div>

    </section>

  </article>
  `;
});
container.innerHTML = sum;
