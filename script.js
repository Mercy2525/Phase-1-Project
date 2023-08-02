//Ensures DOM has loaded
document.addEventListener("DOMContentLoaded", ()=>{
    //get elements from HTML
    let dataList= document.getElementById("datalistOptions")
    let card=document.querySelector(".card")
    let productImages= document.getElementById("all-images")  
    let searchInput=document.querySelector("#search")
    
    //Get from API
  fetch("http://localhost:3000/products")
    .then(res=>res.json())
    .then(data=>displayProducts(data))
    .catch(error=>console.log(error))
    
  //function to display product details

  function displayProducts(products){
    for( let product of products){
      const{id,title,price,image,description}=product
       //display first image
        // if (id == 1) {
        //   let firstImg=document.createElement("p")
        //   firstImg.innerHTML= `<img src="${image}">`
        //   card.appendChild(firstImg)
        // }

        //search option
        let searchOption=document.createElement("option")
        searchOption.class="me"
        searchOption.innerHTML=`
        <option value="${title}"> 
        `
        dataList.appendChild(searchOption)

        // display images and their details
        let allImages=document.createElement("div")
    
        allImages.innerHTML=`
         <div class="card">
          <img class="card-img-top" src="${image}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text">Ksh: ${price}</p>
              <p class="card-text">${description}</p>

             </div>
            </div>`
        productImages.appendChild(allImages)
       }
       //add click Event-listener on search list
       searchInput.addEventListener("input", () => {
        let searchTerm = searchInput.value.toLowerCase();
        let cards = document.querySelectorAll(".card");
        for (let card of cards) {
          let title = card.querySelector(".card-title").textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            card.style.display= "block";
          } else {
            card.style.display = "none";
          }
        }  
        

         })
    }
 
})


//Name, Shop IG, taglines- shopping made easier
//sellers can post new items(below the page)
//delete sold items/reduce the number of items available
//add a search bar so users can search for the specific products they want. 
//Also, add some form of filtering functionality, either by category or date added. 

// FIRST: Get a db.json file or create one- create 20 items(Done)
//1. Shop-Header-Create a search bar,(form,input) and filtering functionality-shoes/clothes(firstDiv in HTML)
//2. Get request api, and post on DOM
    //clothes/1- just for display not sale-get and append
    //Display all goods, to include, title, cost, size, 
    //no of items in stock(maybe)-[secondDiv in HTML]
    //create Div to attach
