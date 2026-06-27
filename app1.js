async function dog() {
  const data = await fetch("https://dog.ceo/api/breeds/image/random");
  const dogData = await data.json();
  const finalResult = dogData.message;
  document.getElementById("image").innerHTML = `<img src="${finalResult}" alt="" width="320" />`;
}