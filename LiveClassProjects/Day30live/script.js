const modal = document.querySelector(".product-form-container");
const openBtn = document.querySelector(".modelopener button");
const closeBtn = document.querySelector(".close-btn");
const closeIcon = document.querySelector(".close-icon");

const productForm = document.querySelector(".product-form");

const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productQuantity = document.getElementById("product-quantity");
const productCategory = document.getElementById("product-category");
const tableBody = document.querySelector("tbody");
const totalProductsEl = document.getElementById("total-products");
const lowStockEl = document.getElementById("low-stock");
const outStockEl = document.getElementById("out-stock");
const revenueEl = document.getElementById("total-revenue");

//global array so that it can be used in the searching and applyoing filter
let productsData = [];

//initializer function to open modal
function initModal() {
  openBtn.onclick = () => (modal.style.display = "flex");
  closeBtn.onclick = () => (modal.style.display = "none");
  closeIcon.onclick = () => (modal.style.display = "none");

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
}

initModal();

//check stock status

function getStockStatus(quantity) {
  if (quantity > 10) return { text: "In Stock", className: "in-stock" };

  if (quantity > 0) return { text: "Low", className: "low-stock" };

  return { text: "Out", className: "out-stock" };
}

//creating an object for pushing it into array and also in the table we have creatd
function createNewProduct(name, price, category, quantity) {
  return {
    name,
    price: Number(price),
    category,
    quantity: Number(quantity),
  };
}

//function to add product to table

function addProductToTable(product) {
  const status = getStockStatus(product.quantity); //Check the status of the stock

  const row = `
    <tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.quantity}</td>
      <td>₹${product.price}</td>
      <td class="${status.className}">  //look at the stock checking function
        ${status.text}
      </td>
    </tr>
  `;

  tableBody.insertAdjacentHTML("beforeend", row);
}

//function to update the dashboard acording to the products created
function updateDashboard() {
  let lowStock = 0;
  let outStock = 0;
  let revenue = 0;

  productsData.forEach((product) => {
    revenue += product.price * product.quantity;

    if (product.quantity === 0) outStock++;
    else if (product.quantity <= 10) lowStock++;
  });

  totalProductsEl.innerHTML = productsData.length;
  lowStockEl.textContent = lowStock;
  outStockEl.textContent = outStock;
  revenueEl.textContent = `₹${revenue}`;
}

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const product = createNewProduct(
    //create the object product
    productName.value,
    productPrice.value,
    productCategory.value,
    productQuantity.value,
  );

  productsData.push(product); //push the created onject in the array

  addProductToTable(product); //add product to the table

  updateDashboard(); //dynamic updaate after the product is added to the array

  productForm.reset(); //null the values if the form is submitted
  //   modal.style.display = "none";
});
