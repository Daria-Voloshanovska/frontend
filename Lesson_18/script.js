const gridContainer = document.getElementById('grid-container');
const loader = document.querySelector('.loader');
const btnReset = document.querySelector('btn-reset');
const form = document.getElementById('form-products');
const amountInput = document.getElementById('limit');
const burger = document.getElementById ('burger');
const menu = document.getElementById('menu');
const errorMessage = document.getElementById('error-message');


let cartCount = 0;
let cartItems = [];

const cart = document.getElementById("cart");
const cartPopup = document.getElementById("cart-popup");
const cartItemsList = document.getElementById("cart-items");
const clearCartBtn = document.getElementById("clear-cart");

function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = cartCount;
  }
}
function updateCartList() {
  cartItemsList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    cartItemsList.appendChild(li);
  });
}


if(burger && menu) {
  burger.addEventListener("click", ()=>{
    menu.classList.toggle("hide")
})
}

async function getProducts(limit =20) {
  gridContainer.innerHTML="";
  loader.classList.remove('hide');
  errorMessage.classList.add("hide");
  errorMessage.textContent = "";

  try {
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
   
    if (!res.ok) throw new Error (`status :${res.status} ${res.statusText ? res.statusText : ''}`);
    const data = await res.json();
    
    loader.classList.toggle('hide');
    gridContainer.classList.remove('hide');

    data.map(product => {
      const section = document.createElement('section');

      const h2 = document.createElement('h2');
      h2.textContent = product.title;

      const img = document.createElement('img');
      img.src = product.image;

      const price = document.createElement('p');
      price.textContent = `Price: $${product.price}`;

      const btnAdd = document.createElement('button');
      btnAdd.textContent = "Add to cart";
      btnAdd.classList.add("btn-add");

     btnAdd.addEventListener('click', () => {
     cartCount++;
     cartItems.push(product.title);
     updateCartCount();
     updateCartList();
    });

      section.append(h2, img, price, btnAdd);
      gridContainer.append(section);
    });

    loader.classList.add('hide');
    gridContainer.classList.remove('hide');

  } catch (error) {
    console.error(`Error: ${error.message}`);
    errorMessage.textContent = `Error: ${error.message}`;
    errorMessage.classList.remove("hide");
    loader.classList.add('hide');
}
  }
 
  cart.addEventListener("click", () => {
    cartPopup.classList.toggle("hide");
  });

  clearCartBtn.addEventListener("click", () => {
    cartCount = 0;
    cartItems = [];
    updateCartCount();
    updateCartList();
    cartPopup.classList.add("hide");
  });

  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const limit = amountInput.value;
    
    if (limit < 1 || limit > 20) {
        alert ('Please enter a number between 1 amd 20');
        return;
    }
    getProducts(limit);
    });

setTimeout(getProducts, 2000);

if(btnReset){
  btnReset.addEventListener('click', () => {
 loader.classList.toggle('hide')
  gridContainer.classList.toggle('hide')
    setTimeout(getProducts, 1500)
});
}
