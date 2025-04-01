const btnFox = document.getElementById("btn-fox");
const foxGallery =document.getElementById("fox-gallery");

const getFox = () => {
  fetch("https://randomfox.ca/floof")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const img = document.createElement("img");
      img.src = data.image;
      img.className = "imagefox";
      foxGallery.append(img);
    });
};

getFox();

btnFox.addEventListener("click", () =>{
    foxGallery.innerHTML ='';
    getFox();
});
