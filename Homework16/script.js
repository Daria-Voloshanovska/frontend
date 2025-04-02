const input = document.getElementById ("input-name")
const form = document.getElementById("form")
const resultDiv = document.getElementById("result")

async function getCheckName(hero) {
const res = await fetch(`https://api.genderize.io/?name=${hero}`);
const data = await res.json();
 console.log(data);
   

resultDiv.innerHTML ='';

const nameEl = document.createElement('p');
nameEl.textContent = `Name: ${data.name}`;

const genderEl = document.createElement('p');
genderEl.textContent = `Gender: ${data.gender || "Unknown" }`;
if (data.gender) {
genderEl.classList.add(data.gender);
}
const probabilityEl = document.createElement('p');
probabilityEl.textContent = `Probability: ${data.probability * 100 }%`;

resultDiv.appendChild(nameEl);
resultDiv.appendChild(genderEl);
resultDiv.appendChild(probabilityEl);

}


form.addEventListener('submit', (event) =>{
event.preventDefault();
const person = event.target.name.value;
getCheckName(person);
});


