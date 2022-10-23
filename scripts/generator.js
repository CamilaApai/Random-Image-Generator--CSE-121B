//Image Generator
function getcatimage() {
  fetch('https://aws.random.cat/meow')
    .then(response => response.json())
    .then(data => {
      catimage.innerHTML = `<img src="${data.file}"/>`;    
  })  
  const catimage = document.querySelector("#catimg");
  const catButton = document.querySelector("#catButton");
}
catButton.addEventListener("click", getcatimage);

function getdogimage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => {
      dogimage.innerHTML = `<img src="${data.message}"/>`;
  }) 
  const dogimage = document.querySelector("#dogimg");  
  const dogButton = document.querySelector("#dogButton");
}
dogButton.addEventListener("click", getdogimage);

//Year
const currentDate = new Date();
const currentyear = currentDate.getFullYear();
document.querySelector("#currentyear").textContent = currentyear;

//Message
const weekDay = currentDate.getDay();
let message = "";
if (( weekDay == 1) || ( weekDay == 2) || ( weekDay == 3) || ( weekDay == 4) || ( weekDay == 5)) {
    message = "Hope you have a good day!";
}
else {
    message = "Enjoy your weekend!";
}
document.getElementById("message1").innerHTML = message;

//Add HTML

const text = document.createTextNode(' | Montevideo Chamber | Camila Apai | CSE 121B Project');
  const footer = document.querySelector('#footerinfo');
  footer.appendChild(text);

const header = document.querySelector('header');
const para = document.createElement('p');
para.textContent = 'Welcome!';
header.appendChild(para);



