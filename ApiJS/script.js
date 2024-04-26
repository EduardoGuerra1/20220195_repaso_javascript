const apiUrl = 'https://catfact.ninja/fact';

async function getCat (){

    try{
        const response = await fetch(apiUrl);
        const cat = await response.json();
     
        console.log(cat.fact);

        const divCat = document.getElementById('cat')

        const p = document.createElement('p')

        const {fact, length} = cat;

        p.textContent = cat.fact;
        divCat.appendChild(p);


    } catch(error){
        console.error(error)
    }

 
}

getCat();