async function getFood() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        document.getElementById("container").innerHTML =
            `<img src="${data.message}" width="300">`;
    } catch (error) {
        console.error(error);
    }
}