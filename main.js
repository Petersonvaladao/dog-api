const photo = document.querySelector(".photo");
const btn = document.querySelector(".btn");


let url = "https://dog.ceo/api/breeds/image/random";

async function getDog(url) {
  const response = await fetch(url);
  const jsonBody = await response.json();
  return jsonBody;
}

getDog(url).then (data => {
  let dog = data.message;
  photo.innerHTML = 
  `<img class="img" src="${dog}" alt="">`;
});

function reload () {
  return window.location.reload()
}

btn.addEventListener("click", reload);






