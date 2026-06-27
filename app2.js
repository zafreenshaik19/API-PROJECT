async function getFood() {

   let result = await fetch('https://foodish-api.com/api/');
   let finalresult = await result.json();
   let image = finalresult.image;

   document.getElementById('container').innerHTML =
       "<img src='" + image + "' width='300'>";

}