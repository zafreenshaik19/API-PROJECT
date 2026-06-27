async function getDog() {

    const loading = document.getElementById("loading");
    const image = document.getElementById("dogImage");

    loading.innerText = "Loading...";
    image.style.display = "none";

    try {

        const response = await fetch("https://dog.ceo/api/breeds/image/random");

        if (!response.ok) {
            throw new Error("Failed to fetch image.");
        }

        const data = await response.json();

        image.src = data.message;
        image.style.display = "block";
        loading.innerText = "";

    } catch (error) {

        loading.innerText = "❌ Unable to load image.";
        console.error(error);

    }

}

// Load a dog automatically when the page opens
getDog();