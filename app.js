
async function getafact(){
   let result= await fetch('https://meowfacts.herokuapp.com/');
   let finalresult=await result.json();
   let fact=finalresult.data[0]
   document.getElementById('container').innerText=fact
}

async function dog(){
    const data=await fetch("https://dog.cen/api/breeds/image/random");
    const dogData=await data.json();
    const finalReult=dogData.message;
    document.getElementById("image").innerHTML=<img src="${finalReult}" alt="width="
} 