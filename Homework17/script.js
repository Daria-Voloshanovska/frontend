const gridContainer = document.getElementById('grid-container');
const loader = document.querySelector('.loader');
const btnReset = document.getElementById('btn-reset');
const formProducts = document.getElementById('form-products');
const amountInput = document.getElementById('amount');


async function getProducts(limit ='') {
    try {
    loader.classList.remove('hide');
    gridContainer.classList.add('hide');


 const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      if (!res.ok) throw new Error (`Status :${res.status} ${res.statusText || ''}`);
const data = await res.json()
    
    
data.map(product => {
 const section = document.createElement('section');
 const h2 = document.createElement('h2');
 h2.textContent = product.title;
 const img = document.createElement('img');
 img.src = product.image;
 const price = document.createElement('p');
 price.textContent = `Price: $${product.price}`;
section.append(h2, img, price);
gridContainer.append(section);

});
loader.classList.add('hide');
gridContainer.classList.remove('hide');

} catch (error) {
 console.error(`Error: ${error.message}`);
 loader.classList.add('hide');
 gridContainer.classList.remove('hide');
}
}
    
formProducts.addEventListener('submit', (event) =>{
event.preventDefault();
const limit = amountInput.value;

if (limit < 1 || limit > 20) {
    alert ('Please enter a number between 1 amd 20');
    return;
}
getProducts(limit);
});

btnReset.addEventListener('click', () => {
    amountInput.value ='';
    getProducts();
   
});

setTimeout(getProducts, 2000);

